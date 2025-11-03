"use client"

import type { FormData } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X, Plus } from "lucide-react"

interface IngredientsStepProps {
  formData: FormData
  setFormData: (data: FormData) => void
}

export default function IngredientsStep({ formData, setFormData }: IngredientsStepProps) {
  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: "", sourcing: "" }],
    })
  }

  const removeIngredient = (idx: number) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((_, i) => i !== idx),
    })
  }

  const updateIngredient = (idx: number, field: string, value: string) => {
    const updated = [...formData.ingredients]
    updated[idx] = { ...updated[idx], [field]: value }
    setFormData({ ...formData, ingredients: updated })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-4">Add Ingredients</label>
        <div className="space-y-3">
          {formData.ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex gap-2">
              <Input
                placeholder="Ingredient name"
                value={ingredient.name}
                onChange={(e) => updateIngredient(idx, "name", e.target.value)}
              />
              <Input
                placeholder="Sourcing details"
                value={ingredient.sourcing}
                onChange={(e) => updateIngredient(idx, "sourcing", e.target.value)}
              />
              <Button variant="outline" size="sm" onClick={() => removeIngredient(idx)} className="text-destructive">
                <X size={18} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={addIngredient} variant="outline" className="w-full gap-2 bg-transparent">
        <Plus size={18} />
        Add Ingredient
      </Button>
    </div>
  )
}
