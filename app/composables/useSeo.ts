interface SeoOptions {
  title: string
  description: string
  image?: string
  noindex?: boolean
}

export function useSeo(options: SeoOptions) {
  // const image = options.image ?? '/og-default.png'

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: `${options.title} — vytisknem.to`,
    ogDescription: options.description,
    // ogImage: image.startsWith('http') ? image : `https://vytisknem.to${image}`,
    ogType: 'website',
    ogLocale: 'cs_CZ',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    robots: options.noindex ? 'noindex,nofollow' : 'index,follow'
  })
}
