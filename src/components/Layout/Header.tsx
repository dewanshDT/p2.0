"use client"

import { useTheme } from "@/hooks"

const Header = () => {
  const { toggleTheme } = useTheme()
  return <button onClick={() => toggleTheme()}>Header</button>
}

export default Header
