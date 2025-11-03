"use client"

import type { FormData } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X, Plus } from "lucide-react"

interface CertificationsStepProps {
  formData: FormData
  setFormData: (data: FormData) => void
}

const suggestedCerts = [
  "USDA Organic",
  "Fair Trade",
  "Non-GMO",
  "Gluten-Free",
  "Vegan",
  "Rainforest Alliance",
  "Carbon Neutral",
]

export default function CertificationsStep({ formData, setFormData }: CertificationsStepProps) {
  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: "", id: "" }],
    })
  }

  const removeCertification = (idx: number) => {
    setFormData({
      ...formData,
      certifications: formData.certifications.filter((_, i) => i !== idx),
    })
  }

  const updateCertification = (idx: number, field: string, value: string) => {
    const updated = [...formData.certifications]
    updated[idx] = { ...updated[idx], [field]: value }
    setFormData({ ...formData, certifications: updated })
  }

  const addSuggestedCert = (cert: string) => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: cert, id: "" }],
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-3">Quick Add</label>
        <div className="flex flex-wrap gap-2 mb-6">
          {suggestedCerts.map((cert) => (
            <Button key={cert} variant="outline" size="sm" onClick={() => addSuggestedCert(cert)}>
              + {cert}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4">Your Certifications</label>
        <div className="space-y-3">
          {formData.certifications.map((cert, idx) => (
            <div key={idx} className="flex gap-2">
              <Input
                placeholder="Certification name"
                value={cert.name}
                onChange={(e) => updateCertification(idx, "name", e.target.value)}
              />
              <Input
                placeholder="Certification ID"
                value={cert.id}
                onChange={(e) => updateCertification(idx, "id", e.target.value)}
              />
              <Button variant="outline" size="sm" onClick={() => removeCertification(idx)} className="text-destructive">
                <X size={18} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={addCertification} variant="outline" className="w-full gap-2 bg-transparent">
        <Plus size={18} />
        Add Certification
      </Button>
    </div>
  )
}
