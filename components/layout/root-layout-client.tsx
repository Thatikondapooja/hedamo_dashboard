"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useDarkMode } from "@/hooks/use-dark-mode"

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { isDark } = useDarkMode()

  useEffect(() => {
    setMounted(true)
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

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
