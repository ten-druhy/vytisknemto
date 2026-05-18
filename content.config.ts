import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional()
}).optional()

export default defineContentConfig({
  collections: {
    // Home page — MDC markdown, sections rendered via content components
    home: defineCollection({
      source: 'index.md',
      type: 'page',
      schema: z.object({ seo: seoSchema })
    }),

    // Blog articles
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        author: z.string().default('Tým vytisknem.to'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false)
      })
    }),

    // FAQ entries
    faq: defineCollection({
      type: 'data',
      source: 'faq/*.yml',
      schema: z.object({
        question: z.string(),
        answer: z.string(),
        category: z.enum([
          'obecne',
          'objednavky',
          'materialy',
          'dodaci-doby',
          'soubory',
          'platby'
        ]).default('obecne'),
        order: z.number().default(0)
      })
    }),

    // Gallery items
    galerie: defineCollection({
      type: 'data',
      source: 'galerie/*.yml',
      schema: z.object({
        title: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        category: z.enum([
          'figurky',
          'prototypy',
          'nahradni-dily',
          'dekorace',
          'ostatni'
        ]),
        material: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0)
      })
    }),

    // Products (future eshop — empty dir, schema ready)
    products: defineCollection({
      type: 'data',
      source: 'products/*.yml',
      schema: z.object({
        sku: z.string(),
        title: z.string(),
        description: z.string(),
        price: z.number(),
        priceVat: z.number(),
        images: z.array(z.string()),
        material: z.string(),
        category: z.string(),
        inStock: z.boolean().default(true),
        weight: z.number().optional()
      })
    }),

    // Navigation — editable via Studio
    navigation: defineCollection({
      source: 'navigation.yml',
      type: 'data',
      schema: z.object({
        navLinks: z.array(z.object({
          label: z.string(),
          to: z.string()
        })),
        ctaButton: z.object({
          label: z.string(),
          to: z.string(),
          icon: z.string().optional()
        }),
        ctaMobileLabel: z.string()
      })
    }),

    // Footer — editable via Studio
    footer: defineCollection({
      source: 'footer.yml',
      type: 'data',
      schema: z.object({
        tagline: z.string(),
        columns: z.array(z.object({
          label: z.string(),
          links: z.array(z.object({
            label: z.string(),
            to: z.string()
          }))
        })),
        copyrightSuffix: z.string(),
        legalLinks: z.array(z.object({
          label: z.string(),
          to: z.string()
        }))
      })
    }),

    // Inner pages — MDC markdown, sections rendered via content components
    cenik: defineCollection({
      source: 'cenik.md',
      type: 'page',
      schema: z.object({ seo: seoSchema })
    }),

    oNas: defineCollection({
      source: 'o-nas.md',
      type: 'page',
      schema: z.object({ seo: seoSchema })
    }),

    jakToFunguje: defineCollection({
      source: 'jak-to-funguje.md',
      type: 'page',
      schema: z.object({ seo: seoSchema })
    }),

    sluzby: defineCollection({
      source: 'sluzby.md',
      type: 'page',
      schema: z.object({ seo: seoSchema })
    })
  }
})
