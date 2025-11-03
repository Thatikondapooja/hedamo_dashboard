"use client"

import type { Product } from "@/lib/types"

interface StatsOverviewProps {
  products: Product[]
}

export default function StatsOverview({ products }: StatsOverviewProps) {
  const totalProducts = products.length
  const avgScore =
    products.length > 0 ? (products.reduce((sum, p) => sum + p.transparencyScore, 0) / products.length).toFixed(1) : 0
  const publishedCount = products.filter((p) => p.status === "published").length
  const highScoreCount = products.filter((p) => p.transparencyScore >= 80).length

  const stats = [
    { label: "Total Products", value: totalProducts, icon: "📦" },
    { label: "Average Score", value: avgScore, icon: "📊" },
    { label: "Published", value: publishedCount, icon: "✅" },
    { label: "Excellent (80+)", value: highScoreCount, icon: "⭐" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
