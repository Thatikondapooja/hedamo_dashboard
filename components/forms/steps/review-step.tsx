"use client"

import type { FormData } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface ReviewStepProps {
  formData: FormData
}

export default function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <p className="text-sm text-muted-foreground">Product Name</p>
            <p className="font-medium">{formData.basicInfo.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Description</p>
            <p className="font-medium">{formData.basicInfo.description}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="font-medium">{formData.basicInfo.category}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
        <div className="space-y-2">
          {formData.ingredients.length > 0 ? (
            formData.ingredients.map((ing, idx) => (
              <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">{ing.name}</p>
                <p className="text-sm text-muted-foreground">{ing.sourcing}</p>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground">No ingredients added</p>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {formData.certifications.length > 0 ? (
            formData.certifications.map((cert, idx) => (
              <Badge key={idx} variant="success">
                {cert.name}
              </Badge>
            ))
          ) : (
            <p className="text-muted-foreground">No certifications added</p>
          )}
        </div>
      </div>
    </div>
  )
}
