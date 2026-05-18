// Eshop stub — returns empty product list.
// Replace with real DB query when eshop is implemented.
export default defineEventHandler(async (_event) => {
  return { products: [], total: 0 }
})
