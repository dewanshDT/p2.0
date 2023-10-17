"use client"
import React, { RefObject } from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { twMerge } from "tailwind-merge"
import { GoArrowUpRight } from "react-icons/go"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  arrow?: boolean
}

const Button: React.FC<Props> = (props) => {
  const button = useRef(null)
  let timeline = useRef<GSAPTimeline>()
  let timeoutId: any = null

  useEffect(() => {
    if (!timeline.current) {
      timeline.current = gsap.timeline({ paused: true })
      timeline.current
        .to(
          button.current,
          {
            top: "-25%",
            left: "10%",
            scale: 1.5,
            duration: 0.4,
            ease: "power3.in",
          },
          "enter",
        )
        .to(
          button.current,
          { top: "-10em", left: "10em", scale: 0.5, duration: 0.25 },
          "exit",
        )
    }
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    if (timeline.current) timeline.current.tweenFromTo("enter", "exit")
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) timeline.current.play()
    }, 300)
  }

  return (
    <button
      className={twMerge(
        "relative overflow-hidden group px-4 py-2 gap-3 flex items-end border-red-500 border-2",
        props.className,
      )}
      onMouseEnter={() => {
        manageMouseEnter()
      }}
      onMouseLeave={() => {
        manageMouseLeave()
      }}
      {...props}
    >
      {props.children}
      {props.arrow && (
        <GoArrowUpRight className="text-xl group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform" />
      )}
      <div
        ref={button}
        className="bg-red-500 z-[-1] w-full aspect-square scale-105 absolute rounded-full top-full -left-full"
      ></div>
    </button>
  )
}

export default Button