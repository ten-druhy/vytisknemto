import { SitemapUrlInput } from "@nuxtjs/sitemap"

export default defineSitemapEventHandler(async () => {

    const api = await $fetch<{ stories: { slug: string }[] }>(`https://api.storyblok.com/v2/cdn/stories`, {
        query: {
            token: `${process.env.STORYBLOK_TOKEN}`,
            version: process.env.NUXT_PUBLIC_USE_DRAFTS ? "draft" : "published"
        }
    });
    return api.stories.map(el => { return { loc: `galerie/${el.slug}` } }) satisfies SitemapUrlInput[]
})