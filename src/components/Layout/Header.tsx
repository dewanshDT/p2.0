"use client"

import { useTheme } from "@/hooks"
import Link from "next/link"

const Header = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <header className="header w-full border-b-neutral-200 border-b dark:border-b-neutral-900 z-10 flex sticky top-0 flex-col items-center">
      <div className="max-w-6xl px-4 py-3 w-full flex justify-between items-center">
        <Link href="/">
          <div className="text-base tracking-widest uppercase px-[.6em] py-[.02em] bg-red-500 text-neutral-100 font-bold">
            Dewansh
          </div>
        </Link>
        <div className="flex items-center text-sm gap-4">
          <Link href="/about">About</Link>
          <button className="capitalize" onClick={() => toggleTheme()}>
            <span className="font-medium uppercase">{theme}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
