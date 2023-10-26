import { Hero, Projects } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dewansh Thakur: Full Stack Developer",
  description:
    "I'm a Web Developer & open source contributor with a passion for creating innovative products. With over 4 years of experience, I've contributed to projects like Processing Foundation. My expertise extends beyond UI design and Full Stack development, as I'm also learning DevOps, and system design, ensuring robust and well-rounded solutions for the market.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full px-4 max-w-6xl">
      <Hero />
      <Projects className="mt-16 sm:mt-80" />
      <span className="text-neutral-400">
        &#47;&#47; work in progress, check back often!
      </span>
    </div>
  )
}

import React from "react"
