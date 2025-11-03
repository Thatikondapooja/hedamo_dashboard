"use client"

import type { Product } from "@/lib/types"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ScoreDistributionChartProps {
  products: Product[]
}

export default function ScoreDistributionChart({ products }: ScoreDistributionChartProps) {
  const ranges = [
    { range: "0-20", min: 0, max: 20 },
    { range: "21-40", min: 21, max: 40 },
    { range: "41-60", min: 41, max: 60 },
    { range: "61-80", min: 61, max: 80 },
    { range: "81-100", min: 81, max: 100 },
  ]

  const data = ranges.map(({ range, min, max }) => ({
    range,
    count: products.filter((p) => p.transparencyScore >= min && p.transparencyScore <= max).length,
  }))

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-4">Score Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="oklch(0.4 0.2 280)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
