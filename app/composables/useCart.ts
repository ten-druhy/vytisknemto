// Eshop stub — no-op cart for future expansion.
// Replace this body with a Pinia store + API calls when eshop is built.
export function useCart() {
  return {
    items: ref<{ sku: string; qty: number }[]>([]),
    total: computed(() => 0),
    addItem: (_sku: string, _qty: number) => Promise.resolve(),
    removeItem: (_sku: string) => Promise.resolve(),
    clear: () => Promise.resolve()
  }
}
