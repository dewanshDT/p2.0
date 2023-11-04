"use client"

import { useTheme } from "@/hooks"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"
import CursorHighlight from "../core/CursorHighlight"

const Header = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <header className="header w-full border-b-neutral-200 border-b dark:border-b-neutral-900 z-10 flex absolute top-0 flex-col items-center">
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
    </header>
  )
}

export default Header
