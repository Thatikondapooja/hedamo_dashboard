"use client"

import type { Product } from "@/lib/types"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

interface CategoryBreakdownChartProps {
  products: Product[]
}

const COLORS = [
  "oklch(0.65 0.22 41)",
  "oklch(0.6 0.12 185)",
  "oklch(0.4 0.07 227)",
  "oklch(0.83 0.19 84)",
  "oklch(0.77 0.19 70)",
]

export default function CategoryBreakdownChart({ products }: CategoryBreakdownChartProps) {
  const categoryData = products.reduce(
    (acc, product) => {
      const existing = acc.find((item) => item.name === product.category)
      if (existing) {
        existing.value++
      } else {
        acc.push({ name: product.category, value: 1 })
      }
      return acc
    },
    [] as { name: string; value: number }[],
  )

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-4">Products by Category</h2>
      {categoryData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-muted-foreground">No data available</p>
      )}
    </div>
  )
}
