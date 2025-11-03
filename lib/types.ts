export interface Product {
  id: string
  name: string
  description: string
  category: string
  status: "draft" | "submitted" | "published"
  transparencyScore: number
  ingredients: string[]
  certifications: string[]
  createdAt: string
  updatedAt: string
}

export interface AITransparencyResponse {
  productName: string
  score: number
  explanation: string
  suggestions: string[]
  flags: {
    message: string
    severity: "low" | "medium" | "high"
  }[]
}

export interface FormData {
  basicInfo: {
    name: string
    description: string
    category: string
  }
  ingredients: {
    name: string
    sourcing: string
  }[]
  certifications: {
    name: string
    id: string
  }[]
}
