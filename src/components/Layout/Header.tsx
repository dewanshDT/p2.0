"use client"

import { useTheme } from "@/hooks"
import Link from "next/link"

const Header = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <header className="w-full z-10 flex sticky top-0 dark:bg-neutral-900 bg-neutral-100 flex-col items-center">
      <div className="max-w-6xl p-4 w-full flex justify-between items-center">
        <Link href="/">
          <div className="text-base uppercase text-neutral-700 dark:text-neutral-300 font-semibold">
            Dewansh
          </div>
        </Link>
        <button className="capitalize text-sm" onClick={() => toggleTheme()}>
          Theme: <span className="font-medium uppercase">{theme}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
