"use client"

import { useTheme } from "@/hooks"

const Header = () => {
  const { toggleTheme } = useTheme()
  return (
    <header className="w-full flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <button onClick={() => toggleTheme()}>Header</button>
      </div>
    </header>
  )
}

export default Header
