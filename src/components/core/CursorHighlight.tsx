"use client"

import { useCursor } from "@/context/cursor/CursorProvider"
import React, { useRef } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CursorHighlight: React.FC<Props> = (props) => {
  const { setFollowerDimensions } = useCursor()
  const container = useRef<HTMLDivElement | null>(null)

  const manageMouseEnter = () => {
    if (container.current) {
      setFollowerDimensions({
        height: container.current.offsetHeight + 12,
        width: container.current?.offsetWidth + 12,
      })
    }
  }

  const manageMouseLeave = () => {
    setFollowerDimensions(undefined)
  }
  return (
    <div
      {...props}
      onMouseEnter={() => {
        manageMouseEnter()
      }}
      onMouseLeave={() => {
        manageMouseLeave()
      }}
      onClick={() => {
        manageMouseLeave()
      }}
      ref={container}
    >
      {props.children}
    </div>
  )
}

export default CursorHighlight
