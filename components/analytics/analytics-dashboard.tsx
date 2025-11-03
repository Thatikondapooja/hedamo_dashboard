"use client"

import type { Product } from "@/lib/types"
import ScoreDistributionChart from "./score-distribution-chart"
import CategoryBreakdownChart from "./category-breakdown-chart"
import StatsOverview from "./stats-overview"

interface AnalyticsDashboardProps {
  products: Product[]
}

export default function AnalyticsDashboard({ products }: AnalyticsDashboardProps) {
  return (
    <div className="space-y-6">
      <StatsOverview products={products} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScoreDistributionChart products={products} />
        <CategoryBreakdownChart products={products} />
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold mb-4">Transparency by Status</h2>
        <div className="grid grid-cols-3 gap-4">
          {(["draft", "submitted", "published"] as const).map((status) => {
            const count = products.filter((p) => p.status === status).length
            const avgScore =
              products.filter((p) => p.status === status).reduce((sum, p) => sum + p.transparencyScore, 0) /
                (count || 1) || 0
            return (
              <div key={status} className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground capitalize mb-1">{status}</p>
                <p className="text-2xl font-bold">{count}</p>
                <p className="text-xs text-muted-foreground mt-2">Avg Score: {avgScore.toFixed(1)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
