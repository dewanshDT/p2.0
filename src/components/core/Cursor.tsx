"use client"

import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { Variants, motion, useMotionValue, useSpring } from "framer-motion"
import { useCursor } from "@/context/cursor/CursorProvider"

const cursorVariants: Variants = {
  down: { height: 10, width: 10 },
  up: { height: 4, width: 4 },
}

const Cursor = () => {
  const [moving, setMoving] = useState(false)
  const [mouseDown, setMouseDown] = useState(false)
  const timeOut = useRef<NodeJS.Timeout | null>(null)

  const { followerDimensions } = useCursor()

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothOptions = { damping: 15, stiffness: 150, mass: 0.4 }

  const smoothMouse = {
    x: mouse.x,
    y: mouse.y,
  }

  useEffect(() => {
    const handleMouseMove = (eve: MouseEvent) => {
      setMoving(true)

      const { clientX, clientY } = eve
      mouse.x.set(clientX)
      mouse.y.set(clientY)

      if (timeOut.current) {
        clearTimeout(timeOut.current)
      }

      timeOut.current = setTimeout(() => {
        setMoving(false)
      }, 100)
    }

    const handleMouseDown = (eve: MouseEvent) => {
      // gsap.to(cursor.current, { height: "10px", width: "10px", duration: 0.2 })
      setMouseDown(true)
    }

    const handleMouseUp = (eve: MouseEvent) => {
      // gsap.to(cursor.current, { height: "4px", width: "4px", duration: 0.2 })
      setMouseDown(false)
    }

    // Cleanup the event listener when the component unmounts
    window?.addEventListener("mousemove", handleMouseMove)
    window?.addEventListener("mousedown", handleMouseDown)
    window?.addEventListener("mouseup", handleMouseUp)

    return () => {
      window?.removeEventListener("mousemove", handleMouseMove)
      window?.removeEventListener("mouseup", handleMouseUp)
      window?.removeEventListener("mousedown", handleMouseDown)
    }
  })

  return (
    <>
      <motion.div
        id="cursor"
        // ref={cursor}
        transition={{ duration: 0.15 }}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        variants={cursorVariants}
        animate={mouseDown ? "down" : "up"}
        className={clsx(
          "pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 aspect-square mix-blend-difference bg-white h-1 absolute",
          { "opacity-0 h-0": followerDimensions },
        )}
      ></motion.div>
      <motion.div
        style={{
          left: useSpring(smoothMouse.x, smoothOptions),
          top: useSpring(smoothMouse.y, smoothOptions),
        }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        initial={{
          borderRadius: "1px",
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          going: { borderRadius: "12px", borderWidth: "4px", rotate: 360 },
          static: { borderRadius: "1px", borderWidth: "2px", rotate: 0 },
          active: {
            width: followerDimensions?.width,
            height: followerDimensions?.height,
          },
        }}
        animate={followerDimensions ? "active" : moving ? "going" : "static"}
        // ref={follower}
        id="follower"
        className={clsx(
          "absolute",
          "pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 aspect-square mix-blend-difference dark:border-red-500 border-[#10bbbb] border-2 h-6",
        )}
      ></motion.div>
    </>
  )
}

export default Cursor
