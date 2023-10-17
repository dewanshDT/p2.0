"use client"

import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Lenis from "@studio-freight/lenis"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <>
      <Header />
      <main className="overflow-x-hidden flex flex-col items-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
