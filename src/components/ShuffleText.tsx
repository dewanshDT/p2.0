"use client"

import React, { useEffect, useState } from "react"

const shuffleString = (str: string) => {
  const array = str.split("")
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.join("")
}

interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  children: string
  count?: number
}

const ShuffleText: React.FC<Props> = ({ children, count = 14, ...props }) => {
  const [shuffledText, setShuffledText] = useState(children)
  const [animationCount, setAnimationCount] = useState(0)

  useEffect(() => {
    setShuffledText(shuffleString(children))
  }, [])

  useEffect(() => {
    if (animationCount < count) {
      const shuffleInterval = setInterval(() => {
        const shuffled = shuffleString(children)
        setShuffledText(shuffled)
        setAnimationCount(animationCount + 1)
      }, 100) // Adjust the interval as needed

      return () => clearInterval(shuffleInterval)
    } else {
      setShuffledText(children)
    }
  }, [children, animationCount, count])

  return <span {...props}>{shuffledText}</span>
}

// export default dynamic(() => Promise.resolve(ShuffleText), {
//   ssr: false,
// })

export default ShuffleText
