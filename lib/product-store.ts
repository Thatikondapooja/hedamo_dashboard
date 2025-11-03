const STORAGE_KEY = "hedamo_products"

let listeners: ((products: any[]) => void)[] = []

export const productStore = {
  getProducts: () => {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  },

  setProducts: (products: any[]) => {
    if (typeof window === "undefined") return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    console.log("[v0] Store updated, notifying", listeners.length, "listeners")
    listeners.forEach((listener) => {
      try {
        listener([...products])
      } catch (error) {
        console.error("[v0] Error notifying listener:", error)
      }
    })
  },

  addProduct: (product: any) => {
    const current = productStore.getProducts()
    const updated = [...current, product]
    console.log("[v0] Adding product, total:", updated.length)
    productStore.setProducts(updated)
  },

  subscribe: (listener: (products: any[]) => void) => {
    console.log("[v0] New subscriber added")
    listeners.push(listener)
    listener([...productStore.getProducts()])
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  },

  initializeFromMock: (mockProducts: any[]) => {
    const existing = productStore.getProducts()
    if (existing.length === 0) {
      console.log("[v0] Initializing from mock, products:", mockProducts.length)
      productStore.setProducts(mockProducts)
    }
  },

  clearListeners: () => {
    listeners = []
  },
}
