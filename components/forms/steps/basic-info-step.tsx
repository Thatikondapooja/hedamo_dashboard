"use client"

import type { FormData } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BasicInfoStepProps {
  formData: FormData
  setFormData: (data: FormData) => void
}

const categories = ["Beverages", "Spreads", "Coffee", "Snacks", "Oils", "Dairy", "Bakery", "Other"]

export default function BasicInfoStep({ formData, setFormData }: BasicInfoStepProps) {
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      basicInfo: {
        ...formData.basicInfo,
        [field]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Product Name *</label>
        <Input
          placeholder="e.g., Organic Herbal Tea"
          value={formData.basicInfo.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description *</label>
        <Textarea
          placeholder="Describe your product..."
          className="min-h-24"
          value={formData.basicInfo.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Category *</label>
        <select
          className="w-full px-3 py-2 border border-input rounded-md bg-background"
          value={formData.basicInfo.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
