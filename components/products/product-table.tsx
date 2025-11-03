"use client"

import type { Product } from "@/lib/types"
import { getScoreCategory } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Eye, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { api } from "@/lib/api"

interface ProductTableProps {
  products: Product[]
  loading: boolean
}

export default function ProductTable({ products, loading }: ProductTableProps) {
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    setDeleting(id)
    try {
      await api.deleteProduct(id)
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">Loading products...</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">No products found</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Product Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Transparency Score</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline">{product.category}</Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div
                        className={`h-full rounded-full transition-all ${
                          getScoreCategory(product.transparencyScore) === "high"
                            ? "bg-green-500"
                            : getScoreCategory(product.transparencyScore) === "medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${product.transparencyScore}%` }}
                      />
                    </div>
                    <span className="font-semibold">{product.transparencyScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      product.status === "published"
                        ? "success"
                        : product.status === "submitted"
                          ? "warning"
                          : "secondary"
                    }
                  >
                    {product.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/products/${product.id}`}>
                      <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                        <Eye size={16} />
                        View
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      disabled={deleting === product.id}
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
