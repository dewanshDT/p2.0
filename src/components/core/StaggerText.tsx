"use client"

import { Variants, motion } from "framer-motion"
import React from "react"

interface Props {
  children: string
  splitBy?: "space" | "token"
  speed?: number
  delay?: number
}

const defaultAnimations: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

const StaggerText: React.FC<Props> = ({
  children,
  splitBy = "token",
  speed = 1,
  delay = 0,
}) => {
  if (splitBy === "token")
    return (
      <>
        <span className="sr-only">{children}</span>
        <motion.span
          whileInView="visible"
          initial="hidden"
          transition={{
            staggerChildren: 0.1 / speed,
            duration: 0.005 / speed,
            delay: delay,
          }}
          viewport={{ once: true }}
        >
          {children.split(" ").map((word, wordIndex) => (
            <span key={`${word}${wordIndex}`}>
              {word.split("").map((token, tokenIndex) => (
                <motion.span
                  key={`${token}${tokenIndex}`}
                  variants={defaultAnimations}
                >
                  {token}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.span>
      </>
    )
  return (
    <>
      <span className="sr-only">{children}</span>
      <motion.span
        whileInView="visible"
        initial="hidden"
        transition={{
          staggerChildren: 0.2 / speed,
          duration: 0.005 / speed,
          delay: delay,
        }}
        viewport={{ once: true }}
      >
        {children.split(" ").map((word, wordIndex) => (
          <motion.span
            key={`${word}${wordIndex}`}
            className="inline-block whitespace-pre"
            variants={defaultAnimations}
          >
            {word + " "}
          </motion.span>
        ))}
      </motion.span>
    </>
  )
}

export default StaggerText
