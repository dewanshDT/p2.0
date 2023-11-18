"use client"

import React, { useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"

import { Gradient } from "@/lib/Gradient"

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  id: string
}

const GradientCanvas: React.FC<Props> = (props) => {
  const gradient = useRef(new Gradient())

  useEffect(() => {
    if (props.id) {
      // @ts-ignore
      gradient.current.initGradient(`#${props.id}`)
    }
  })

  return (
    <canvas
      {...props}
      id={props.id}
      className={twMerge("gradient-canvas", props.className)}
    >
      Gradient
    </canvas>
  )
}

export default GradientCanvas
