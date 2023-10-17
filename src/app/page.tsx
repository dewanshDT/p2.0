"use client"
import { Hero, Projects } from "@/components"

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
