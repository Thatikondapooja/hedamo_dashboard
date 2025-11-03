"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import type { Product } from "@/lib/types"
import AnalyticsDashboard from "@/components/analytics/analytics-dashboard"

export default function AnalyticsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.getProducts()
        setProducts(data)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground mt-1">Monitor your portfolio transparency metrics</p>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Loading analytics...</p>
      ) : (
        <AnalyticsDashboard products={products} />
      )}
    </div>
  )
}
