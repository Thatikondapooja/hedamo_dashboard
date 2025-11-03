import type { Product, AITransparencyResponse } from "./types"

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Organic Herbal Tea",
    description: "Premium organic herbal blend with natural ingredients",
    category: "Beverages",
    status: "published",
    transparencyScore: 72,
    ingredients: ["Green tea leaves", "Chamomile", "Lavender", "Honey extract"],
    certifications: ["USDA Organic", "Fair Trade"],
    createdAt: "2025-01-15",
    updatedAt: "2025-01-20",
  },
  {
    id: "2",
    name: "Pure Almond Butter",
    description: "Cold-pressed almond butter, no additives",
    category: "Spreads",
    status: "published",
    transparencyScore: 85,
    ingredients: ["Raw almonds", "Sea salt"],
    certifications: ["Organic", "Non-GMO", "Vegan"],
    createdAt: "2025-01-10",
    updatedAt: "2025-01-19",
  },
  {
    id: "3",
    name: "Sustainable Coffee Beans",
    description: "Fair-trade, single-origin coffee from Ethiopian highlands",
    category: "Coffee",
    status: "published",
    transparencyScore: 91,
    ingredients: ["Arabica coffee beans"],
    certifications: ["Fair Trade", "Rainforest Alliance", "Organic"],
    createdAt: "2025-01-20",
    updatedAt: "2025-01-20",
  },
  {
    id: "4",
    name: "Protein Energy Bars",
    description: "High-protein snack bars with natural sweeteners",
    category: "Snacks",
    status: "published",
    transparencyScore: 65,
    ingredients: ["Whey protein", "Almonds", "Dates", "Coconut oil", "Stevia"],
    certifications: ["Gluten-Free"],
    createdAt: "2025-01-18",
    updatedAt: "2025-01-18",
  },
  {
    id: "5",
    name: "Artisan Olive Oil",
    description: "Cold-pressed extra virgin olive oil from Italian groves",
    category: "Oils",
    status: "submitted",
    transparencyScore: 78,
    ingredients: ["Extra virgin olive"],
    certifications: ["PDO", "Organic"],
    createdAt: "2025-01-22",
    updatedAt: "2025-01-22",
  },
]

export const MOCK_AI_RESPONSE: AITransparencyResponse = {
  productName: "Organic Herbal Tea",
  score: 72,
  explanation:
    "Moderate transparency level. The product has clear ingredient sourcing information but lacks detailed certifications verification. Additional documentation about the supply chain would significantly improve the transparency score.",
  suggestions: [
    "Add sourcing details for green tea leaves with specific regions",
    "Include certification IDs for all organic claims",
    "Clarify packaging recyclability and environmental impact",
    "Provide supplier information and quality testing results",
    "Add nutritional analysis and health benefit documentation",
  ],
  flags: [
    {
      message: "Incomplete sourcing documentation for 2 ingredients",
      severity: "medium",
    },
    {
      message: "Certification details need verification",
      severity: "high",
    },
    {
      message: "Missing sustainability metrics",
      severity: "low",
    },
  ],
}

export const SCORE_COLOR_MAP = {
  high: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  medium: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
  low: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
}

export function getScoreCategory(score: number): "high" | "medium" | "low" {
  if (score >= 80) return "high"
  if (score >= 60) return "medium"
  return "low"
}

export function getScoreLabel(score: number): string {
  const category = getScoreCategory(score)
  const labels = { high: "Excellent", medium: "Good", low: "Needs Review" }
  return labels[category]
}
