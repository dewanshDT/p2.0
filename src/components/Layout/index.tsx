"use client"

import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Lenis from "@studio-freight/lenis"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathName = usePathname()

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
      <AnimatePresence mode="wait">
        <motion.div
          key={pathName}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <Header />
          <main className="overflow-x-hidden flex flex-col items-center min-h-screen">
            {children}
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout
