"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { FormData } from "@/lib/types"
import BasicInfoStep from "./steps/basic-info-step"
import IngredientsStep from "./steps/ingredients-step"
import CertificationsStep from "./steps/certifications-step"
import ReviewStep from "./steps/review-step"
import SuccessStep from "./steps/success-step"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STEPS = [
  { id: 1, title: "Basic Info", description: "Product details" },
  { id: 2, title: "Ingredients", description: "Ingredient sourcing" },
  { id: 3, title: "Certifications", description: "Product certifications" },
  { id: 4, title: "Review", description: "Confirm details" },
]

export default function ProductFormWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedProduct, setSubmittedProduct] = useState<any>(null)
  const [formData, setFormData] = useState<FormData>({
    basicInfo: { name: "", description: "", category: "" },
    ingredients: [],
    certifications: [],
  })

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const product = await api.createProduct(formData)
      setSubmittedProduct(product)
      setCurrentStep(STEPS.length)
      setTimeout(() => {
        router.push("/products")
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (currentStep === STEPS.length) {
    return <SuccessStep product={submittedProduct} />
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Add New Product</h1>
        <p className="text-muted-foreground">Fill in your product details step by step</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        {STEPS.map((step, idx) => (
          <div key={step.id} className="flex-1">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                  idx <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {idx + 1}
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                    idx < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
            <div className="mt-2">
              <p className="font-semibold text-sm">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="bg-card rounded-lg border border-border p-8 min-h-96">
        {currentStep === 0 && <BasicInfoStep formData={formData} setFormData={setFormData} />}
        {currentStep === 1 && <IngredientsStep formData={formData} setFormData={setFormData} />}
        {currentStep === 2 && <CertificationsStep formData={formData} setFormData={setFormData} />}
        {currentStep === 3 && <ReviewStep formData={formData} />}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <Button variant="outline" onClick={handlePrev} disabled={currentStep === 0} className="gap-2 bg-transparent">
          <ChevronLeft size={18} />
          Previous
        </Button>

        {currentStep === STEPS.length - 1 ? (
          <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
            {isSubmitting ? "Submitting..." : "Submit Product"}
            <ChevronRight size={18} />
          </Button>
        ) : (
          <Button onClick={handleNext} className="gap-2">
            Next
            <ChevronRight size={18} />
          </Button>
        )}
      </div>
    </div>
  )
}
