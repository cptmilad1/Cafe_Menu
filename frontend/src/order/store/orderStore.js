import { create } from 'zustand'

// Local-only order state. Nothing is sent to the backend until the order API contract is confirmed.
export const useOrderStore = create((set, get) => ({
  lines: {}, // { [productId]: { product, quantity } }
  placed: null, // { number, name, table, items, total } once handed to the barista

  addItem: (product) =>
    set((state) => {
      const current = state.lines[product.id]
      return {
        placed: null,
        lines: {
          ...state.lines,
          [product.id]: { product, quantity: (current?.quantity ?? 0) + 1 },
        },
      }
    }),

  changeQuantity: (productId, delta) =>
    set((state) => {
      const current = state.lines[productId]
      if (!current) return state
      const quantity = current.quantity + delta
      const lines = { ...state.lines }
      if (quantity <= 0) delete lines[productId]
      else lines[productId] = { ...current, quantity }
      return { lines }
    }),

  clear: () => set({ lines: {} }),

  placeOrder: ({ name, table }) => {
    const items = Object.values(get().lines)
    if (items.length === 0) return null
    const total = items.reduce((sum, line) => sum + line.product.price * line.quantity, 0)
    const placed = {
      number: Math.floor(100 + Math.random() * 900), // demo number, not a server-issued id
      name: name.trim(),
      table: Number(table),
      items,
      total,
    }
    set({ placed, lines: {} })
    return placed
  },

  reset: () => set({ placed: null }),
}))

export const selectItemCount = (state) =>
  Object.values(state.lines).reduce((sum, line) => sum + line.quantity, 0)

export const selectTotal = (state) =>
  Object.values(state.lines).reduce((sum, line) => sum + line.product.price * line.quantity, 0)
