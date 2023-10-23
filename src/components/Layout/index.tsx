"use client"

import React, { useEffect, useRef } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Lenis from "@studio-freight/lenis"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef(null)
  const content = useRef(null)
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: container.current ?? undefined,
      content: content.current ?? undefined,
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <div
      ref={container}
      id="main-scroll"
      className="h-screen w-screen overflow-hidden overflow-y-auto"
    >
      <Header />
      <div className="h-full pt-14" ref={content}>
        <main className="overflow-x-hidden flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
