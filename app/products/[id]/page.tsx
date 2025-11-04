"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import type { Product, AITransparencyResponse } from "@/lib/types"
import ProductDetail from "@/components/products/product-detail"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [aiResponse, setAiResponse] = useState<AITransparencyResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const id = params.id as string
        const data = await api.getProductById(id)
        setProduct(data)
        if (data) {
          const analysis = await api.analyzeProductTransparency(id)
          setAiResponse(analysis)
        }
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    )
  }

  return <ProductDetail product={product} aiResponse={aiResponse} />
}
