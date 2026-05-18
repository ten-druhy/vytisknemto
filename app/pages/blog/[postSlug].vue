<script setup lang="ts">
const route = useRoute('/blog/[postSlug]')

const { data: post } = await useAsyncData(`blog-${route.params.postSlug}`, () =>
  queryCollection('blog')
    .path(`/blog/${route.params.postSlug}`)
    .first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Článek nenalezen', fatal: true })
}

useSeo({
  title: post.value.title,
  description: post.value.description,
  image: post.value.image
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': post.value.title,
      'description': post.value.description,
      'datePublished': post.value.date,
      'author': { '@type': 'Person', 'name': post.value.author },
      'publisher': {
        '@type': 'Organization',
        'name': 'vytisknem.to',
        'logo': { '@type': 'ImageObject', 'url': 'https://vytisknem.to/logo.svg' }
      },
      'image': post.value.image,
      'inLanguage': 'cs'
    })
  }]
})
</script>

<template>
  <div v-if="post">
    <UPageSection :ui="{ root: 'py-16 sm:py-24', container: 'max-w-3xl' }">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-1 text-sm text-muted hover:text-default transition-colors mb-8"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" />
        Zpět na blog
      </NuxtLink>

      <div class="flex flex-wrap gap-1 mb-4">
        <UBadge
          v-for="tag in post.tags"
          :key="tag"
          :label="tag"
          color="neutral"
          variant="soft"
          size="xs"
        />
      </div>

      <h1 class="text-3xl sm:text-4xl font-bold text-highlighted leading-tight">
        {{ post.title }}
      </h1>

      <p class="mt-2 text-muted text-sm font-mono">
        {{ new Date(post.date).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' }) }}
        · {{ post.author }}
      </p>

      <div v-if="post.image" class="mt-6 rounded-xl overflow-hidden">
        <NuxtImg
          :src="post.image"
          :alt="post.imageAlt || post.title"
          class="w-full"
          width="800"
          height="450"
          format="webp"
        />
      </div>

      <div class="mt-8 prose prose-invert max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <div class="mt-12 pt-8 border-t border-default">
        <p class="text-muted text-sm mb-4">
          Máte otázku nebo zájem o 3D tisk?
        </p>
        <UButton
          label="Kontaktovat nás"
          to="/kontakt"
          color="primary"
          leading-icon="i-lucide-mail"
        />
      </div>
    </UPageSection>
  </div>
</template>
