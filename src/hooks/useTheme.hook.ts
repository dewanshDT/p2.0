"use client"
import React, { useEffect, useState } from "react"

type Theme = "dark" | "light"

export default function useTheme() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    const localTheme: Theme = (localStorage.getItem("theme") as Theme) ?? "dark"

    setTheme(localTheme)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    // Store the selected theme in the local storage.
    localStorage.setItem("theme", theme)

    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme((value) => (value === "light" ? "dark" : "light"))
  }

  return { theme, setTheme, toggleTheme }
}
