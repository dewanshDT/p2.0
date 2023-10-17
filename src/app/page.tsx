"use client"

import { Hero, Projects } from "@/components"
import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Hero className="w-full max-w-6xl px-4" />
      <Projects className="mt-16 sm:mt-80 w-full max-w-6xl sm:px-4" />
      <span className="text-neutral-400">
        &#47;&#47; work in progress, check back often!
      </span>
    </div>
  )
}
