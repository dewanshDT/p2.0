"use client"

import { Hero, Projects } from "@/components"
import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <div className="flex min-h-screen max-w-6xl w-full px-4 flex-col">
      <Hero />
      <Projects />
      <span className="text-neutral-400">
        &#47;&#47; work in progress, check back often!
      </span>
    </div>
  )
}
