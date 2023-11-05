"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, stagger, useAnimation } from "framer-motion" // Import useAnimation from framer-motion
import { twMerge } from "tailwind-merge"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  percentage: number
}

const ProgressBar: React.FC<Props> = (props) => {
  const container = useRef<HTMLDivElement>(null)
  const [innerDivs, setInnerDivs] = useState<React.JSX.Element[]>()
  const controls = useAnimation() // Initialize animation controls

  useEffect(() => {
    if (container.current) {
      const width = container.current.offsetWidth
      const divPercentage = (8 / width) * 100

      const numDivs = Math.round(props.percentage / divPercentage)

      const innerDivArr = Array.from({ length: numDivs }, (_, index) => (
        <motion.div
          key={index}
          className="bg-white h-full w-1"
          transition={{ duration: 0.75 }}
          initial={{ backgroundColor: "#10bbbb" }} // Set initial opacity to 0
          animate={{ backgroundColor: "#ffffff" }} // Animate opacity to 1
        ></motion.div>
      ))

      setInnerDivs(innerDivArr)
    }
  }, [setInnerDivs, props.percentage])

  return (
    <div
      ref={container}
      {...props}
      className={twMerge(
        "w-full h-6 flex p-1 gap-1 overflow-hidden border-2 border-red-500",
        props.className,
      )}
    >
      <motion.div className="w-auto flex gap-1" animate={controls}>
        {innerDivs}
      </motion.div>
    </div>
  )
}

export default ProgressBar
