"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import type { Product } from "@/lib/types"
import ProductTable from "@/components/products/product-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { productStore } from "@/lib/product-store"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await api.getProducts()
        console.log("[v0] Initial products loaded:", data.length)
        setProducts(data)
      } catch (error) {
        console.error("[v0] Error loading products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()

    const unsubscribe = productStore.subscribe((updatedProducts) => {
      console.log("[v0] Products updated via subscription:", updatedProducts.length)
      setProducts([...updatedProducts])
    })

    return unsubscribe
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Products</h1>
          <p className="text-muted-foreground mt-1">Manage and monitor your product portfolio</p>
        </div>
        <Link href="/add-product">
          <Button className="gap-2">
            <Plus size={18} />
            Add Product
          </Button>
        </Link>
      </div>

      <ProductTable products={products} loading={loading} />
    </div>
  )
}
