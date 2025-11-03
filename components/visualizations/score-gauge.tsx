"use client"

import { useEffect, useState } from "react"

interface ScoreGaugeProps {
  score: number
  animated?: boolean
}

export default function ScoreGauge({ score, animated = true }: ScoreGaugeProps) {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score)

  useEffect(() => {
    if (!animated) return

    let current = 0
    const timer = setInterval(() => {
      current += Math.ceil(score / 50)
      if (current >= score) {
        setDisplayScore(score)
        clearInterval(timer)
      } else {
        setDisplayScore(current)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [score, animated])

  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (displayScore / 100) * circumference

  const getColor = (score: number) => {
    if (score >= 80) return "#10b981" // green
    if (score >= 60) return "#f59e0b" // amber
    return "#ef4444" // red
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={160} height={160} viewBox="0 0 160 160" className="transform -rotate-90">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted opacity-20"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={getColor(displayScore)}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-4xl font-bold">{displayScore}</div>
        <div className="text-sm text-muted-foreground">/ 100</div>
      </div>
    </div>
  )
}
