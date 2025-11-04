import type { Product, AITransparencyResponse, FormData } from "./types"
import { MOCK_PRODUCTS, MOCK_AI_RESPONSE } from "./mock-data"
import { productStore } from "./product-store"

// Simulate API delay for realistic behavior
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const api = {
  // Products
  async getProducts(): Promise<Product[]> {
    await delay(300)
    productStore.initializeFromMock(MOCK_PRODUCTS)
    return productStore.getProducts()
  },

  async getProductById(id: string): Promise<Product | null> {
    await delay(200)
    const products: Product[] = productStore.getProducts()
    return products.find((p: Product) => p.id === id) || null
  },

  async createProduct(data: FormData): Promise<Product> {
    await delay(800)
    const newProduct: Product = {
      id: Date.now().toString(),
      name: data.basicInfo.name,
      description: data.basicInfo.description,
      category: data.basicInfo.category,
      status: "draft",
      transparencyScore: Math.floor(Math.random() * 40) + 50,
      ingredients: data.ingredients.map((i) => i.name),
      certifications: data.certifications.map((c) => c.name),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    }
    productStore.addProduct(newProduct)
    return newProduct
  },

  async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    await delay(600)
    const products = productStore.getProducts()
    const product = products.find((p) => p.id === id)
    if (!product) throw new Error("Product not found")
    const updated = { ...product, ...data, updatedAt: new Date().toISOString().split("T")[0] }
    const index = products.findIndex((p) => p.id === id)
    products[index] = updated
    productStore.setProducts(products)
    return updated
  },

  async deleteProduct(id: string): Promise<void> {
    await delay(400)
    const products = productStore.getProducts()
    const index = products.findIndex((p) => p.id === id)
    if (index !== -1) {
      products.splice(index, 1)
      productStore.setProducts(products)
    }
  },

  // AI Analysis
  async analyzeProductTransparency(productId: string): Promise<AITransparencyResponse> {
    await delay(1200)
    return {
      ...MOCK_AI_RESPONSE,
      score: Math.floor(Math.random() * 30) + 65,
    }
  },
}
