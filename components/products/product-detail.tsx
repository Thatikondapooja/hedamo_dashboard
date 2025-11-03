"use client"

import type { Product, AITransparencyResponse } from "@/lib/types"
import { getScoreLabel } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import ScoreGauge from "@/components/visualizations/score-gauge"
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductDetailProps {
  product: Product
  aiResponse: AITransparencyResponse | null
}

export default function ProductDetail({ product, aiResponse }: ProductDetailProps) {
  return (
    <div className="p-6 space-y-8">
      <Link href="/products">
        <Button variant="outline">← Back to Products</Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-muted-foreground mt-2">{product.description}</p>
              </div>
              <Badge variant={product.status === "published" ? "success" : "warning"}>{product.status}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Category</p>
                <p className="font-semibold">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Created</p>
                <p className="font-semibold">{product.createdAt}</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, idx) => (
                <Badge key={idx} variant="secondary">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, idx) => (
                <Badge key={idx} variant="success">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Score Section */}
        <div className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20">
          <h2 className="text-xl font-semibold mb-6">Transparency Score</h2>
          <ScoreGauge score={product.transparencyScore} />
          <p className="text-center mt-4 text-sm text-muted-foreground">{getScoreLabel(product.transparencyScore)}</p>
        </div>
      </div>

      {/* AI Analysis */}
      {aiResponse && (
        <div className="bg-card rounded-lg border border-border p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">AI Transparency Analysis</h2>
            <p className="text-muted-foreground">{aiResponse.explanation}</p>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Top Suggestions</h3>
            <div className="space-y-2">
              {aiResponse.suggestions.slice(0, 5).map((suggestion, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Flags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Risk Flags</h3>
            <div className="space-y-2">
              {aiResponse.flags.map((flag, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 p-3 rounded-lg ${
                    flag.severity === "high"
                      ? "bg-red-100 dark:bg-red-900/30"
                      : flag.severity === "medium"
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : "bg-blue-100 dark:bg-blue-900/30"
                  }`}
                >
                  {flag.severity === "high" ? (
                    <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  ) : flag.severity === "medium" ? (
                    <AlertTriangle size={20} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{flag.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">Severity: {flag.severity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
