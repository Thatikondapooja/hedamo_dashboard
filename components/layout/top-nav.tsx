"use client"

import { useDarkMode } from "@/hooks/use-dark-mode"
import { Moon, Sun, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopNav() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell size={20} className="text-foreground" />
        </button>

        <Button variant="outline" size="sm" onClick={toggleDarkMode} className="gap-2 bg-transparent">
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? "Light" : "Dark"}
        </Button>
      </div>
    </header>
  )
}
