"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SuccessStepProps {
  product: any
}

export default function SuccessStep({ product }: SuccessStepProps) {
  return (
    <div className="max-w-2xl mx-auto text-center py-16 space-y-6">
      <CheckCircle size={64} className="mx-auto text-green-500" />
      <div>
        <h1 className="text-4xl font-bold mb-2">Product Added Successfully!</h1>
        <p className="text-lg text-muted-foreground">
          Your product "{product?.name}" has been created and submitted for AI transparency analysis.
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border p-6 space-y-3 text-left">
        <h3 className="font-semibold">What happens next?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>✓ Our AI will analyze your product's transparency</li>
          <li>✓ You'll receive a transparency score</li>
          <li>✓ Detailed suggestions for improvement</li>
          <li>✓ Risk flags and compliance recommendations</li>
        </ul>
      </div>

      <div className="flex gap-3 justify-center pt-4">
        <Link href="/products">
          <Button variant="outline">View All Products</Button>
        </Link>
        <Link href={`/products/${product?.id}`}>
          <Button>View Product Details</Button>
        </Link>
      </div>
    </div>
  )
}
