"use client"

import { useTheme } from "@/hooks"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"
import CursorHighlight from "../core/CursorHighlight"
import clsx from "clsx"
import { motion, useScroll } from "framer-motion"
import { usePathname } from "next/navigation"
import { BLOG_URL_REGEX } from "@/lib/constants"

const Header = () => {
  const { toggleTheme, theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const path = usePathname()

  return (
    <header
      className={clsx(
        "header",
        "sticky top-0 z-10",
        "w-full",
        "flex flex-col items-center",
      )}
    >
      <div className="max-w-6xl px-4 py-3 w-full flex justify-between items-center">
        <CursorHighlight>
          <Link href="/">
            <div className="text-base tracking-widest uppercase px-[.6em] py-[.02em] bg-red-500 text-neutral-100 font-bold">
              Dewansh
            </div>
          </Link>
        </CursorHighlight>
        <div className="flex items-center text-sm gap-4">
          <CursorHighlight>
            <Link href="/blog">Blog</Link>
          </CursorHighlight>
          <CursorHighlight>
            <Link href="/about">About</Link>
          </CursorHighlight>
          <CursorHighlight className="flex items-center">
            <button
              aria-label="theme toggle"
              className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-xl"
              onClick={() => toggleTheme()}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </CursorHighlight>
        </div>
      </div>
      {BLOG_URL_REGEX.test(path) && (
        <div className="relative w-full">
          <div className="absolute left-0 w-full border-b-2 border-neutral-100 dark:border-neutral-900"></div>
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute left-0 w-full border-b-2 border-red-500 origin-left"
          ></motion.div>
        </div>
      )}
    </header>
  )
}

export default Header
