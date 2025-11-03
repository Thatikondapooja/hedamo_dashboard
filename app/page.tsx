"use client"

import { useEffect, useState } from "react"
import Sidebar from "@/components/layout/sidebar"
import TopNav from "@/components/layout/top-nav"
import { useDarkMode } from "@/hooks/use-dark-mode"

export default function RootPage() {
  const [mounted, setMounted] = useState(false)
  const { isDark } = useDarkMode()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav />
          <main className="flex-1 overflow-auto">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-balance">Welcome to Hedamo</h1>
              <p className="text-muted-foreground mt-2">Product Transparency Dashboard</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
