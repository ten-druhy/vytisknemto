<script setup lang="ts">
useSeo({
  title: 'Blog',
  description: 'Články o 3D tisku, materiálech, technologiích a případové studie z naší dílny.'
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <UPageHero
      title="Blog"
      description="Tipy, průvodce a novinky ze světa 3D tisku."
      :ui="{ root: 'py-16 sm:py-24' }"
    />

    <UPageSection :ui="{ root: 'py-16 sm:py-24', container: 'max-w-4xl' }">
      <div v-if="posts && posts.length > 0" class="grid sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="group block rounded-2xl border border-default bg-elevated p-5 hover:border-primary transition-colors"
        >
          <div v-if="post.image" class="mb-4 rounded-lg overflow-hidden aspect-video">
            <NuxtImg
              :src="post.image"
              :alt="post.imageAlt || post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width="600"
              height="338"
              format="webp"
            />
          </div>
          <div class="flex flex-wrap gap-1 mb-2">
            <UBadge
              v-for="tag in post.tags.slice(0, 3)"
              :key="tag"
              :label="tag"
              color="neutral"
              variant="soft"
              size="xs"
            />
          </div>
          <h2 class="text-base font-semibold text-highlighted group-hover:text-primary transition-colors leading-snug">
            {{ post.title }}
          </h2>
          <p class="mt-1 text-sm text-dimmed line-clamp-2">
            {{ post.description }}
          </p>
          <p class="mt-3 text-xs text-dimmed font-mono">
            {{ new Date(post.date).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' }) }}
            · {{ post.author }}
          </p>
        </NuxtLink>
      </div>

      <div v-else class="text-center py-16 text-dimmed">
        Žádné články zatím nebyly publikovány.
      </div>
    </UPageSection>
  </div>
</template>
