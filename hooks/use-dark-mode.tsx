"use client"

import { useEffect, useState } from "react"

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const stored = localStorage.getItem("hedamo-theme")
    setIsDark(stored === "dark" || (!stored && prefersDark))
  }, [])

  useEffect(() => {
    if (!mounted) return
    const htmlElement = document.documentElement
    if (isDark) {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [isDark, mounted])

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newValue = !prev
      localStorage.setItem("hedamo-theme", newValue ? "dark" : "light")
      return newValue
    })
  }

  return { isDark, toggleDarkMode, mounted }
}
