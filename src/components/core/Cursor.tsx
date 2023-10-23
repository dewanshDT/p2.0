"use client"

import { motion } from "framer-motion"
import clsx from "clsx"
import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null)
  const follower = useRef<HTMLDivElement>(null)
  const [moving, setMoving] = useState(false)
  const timeOut = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const cursorX = gsap.quickTo(cursor.current, "left", { duration: 0.01 })
    const cursorY = gsap.quickTo(cursor.current, "top", { duration: 0.01 })

    const followerX = gsap.quickTo(follower.current, "left", { duration: 0.2 })
    const followerY = gsap.quickTo(follower.current, "top", { duration: 0.2 })

    const handleMouseMove = (eve: MouseEvent) => {
      cursorX(eve.clientX)
      cursorY(eve.clientY)

      followerX(eve.clientX)
      followerY(eve.clientY)

      setMoving(true)

      if (timeOut.current) {
        clearTimeout(timeOut.current)
      }
      timeOut.current = setTimeout(() => {
        setMoving(false)
      }, 100)
    }
    // Cleanup the event listener when the component unmounts

    window?.addEventListener("mousemove", handleMouseMove)

    return () => {
      window?.removeEventListener("mousemove", handleMouseMove)
    }
  })

  return (
    <>
      <div
        ref={cursor}
        className="pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 aspect-square mix-blend-difference bg-white h-1 absolute"
      ></div>
      <motion.div
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        initial={{ borderRadius: "1px" }}
        variants={{
          going: { borderRadius: "12px" },
          static: { borderRadius: "1px" },
        }}
        animate={moving ? "going" : "static"}
        ref={follower}
        className={clsx(
          "follower",
          "pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 aspect-square mix-blend-difference border-red-500 border-2 h-6 absolute",
        )}
      ></motion.div>
    </>
  )
}

export default Cursor
