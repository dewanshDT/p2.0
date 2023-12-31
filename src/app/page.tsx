import { SmoothScroll } from "@/components"
import { Experience, Hero, Projects } from "@/sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dewansh Thakur: Full Stack Developer",
  description:
    "I'm a Web Developer & open source contributor with a passion for creating innovative products. With over 4 years of experience, I've contributed to projects like Processing Foundation. My expertise extends beyond UI design and Full Stack development, as I'm also learning DevOps, and system design, ensuring robust and well-rounded solutions for the market.",
}

export default function Home() {
  return (
    <article className="flex flex-col min-h-screen w-full px-4 max-w-6xl">
      <Hero />
      <Experience className="my-16 sm:my-20" />
      <Projects className="" />
      <span className="text-neutral-400 mt-16">
        &#47;&#47; This is work in progress, please check back often!
      </span>
      <SmoothScroll />
    </article>
  )
}

import React from "react"
