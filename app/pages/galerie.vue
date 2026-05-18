<script setup lang="ts">
useSeo({
  title: 'Galerie',
  description: 'Prohlédněte si ukázky našich 3D výtisků — figurky, prototypy, náhradní díly, dekorace a více.'
})

const { data: allItems } = await useAsyncData('galerie', () =>
  queryCollection('galerie').order('order', 'ASC').all()
)

const categories = [
  { key: 'vse', label: 'Vše' },
  { key: 'figurky', label: 'Figurky' },
  { key: 'prototypy', label: 'Prototypy' },
  { key: 'nahradni-dily', label: 'Náhradní díly' },
  { key: 'dekorace', label: 'Dekorace' },
  { key: 'ostatni', label: 'Ostatní' }
]

type GalerieItem = NonNullable<typeof allItems.value>[number]

const activeCategory = ref('vse')
const lightboxOpen = ref(false)
const lightboxItem = ref<GalerieItem | null>(null)
const failedImages = reactive(new Set<string>())

function openLightbox(item: GalerieItem) {
  lightboxItem.value = item
  lightboxOpen.value = true
}

const filtered = computed(() => {
  if (!allItems.value) return []
  if (activeCategory.value === 'vse') return allItems.value
  return allItems.value.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <div>
    <UPageHero
      title="Galerie"
      description="Ukázky toho, co umíme vytisknout. Každý projekt je unikátní."
      :ui="{ root: 'py-16 sm:py-24' }"
    />

    <UPageSection :ui="{ root: 'py-16 sm:py-24', container: 'max-w-6xl' }">
      <div class="flex flex-wrap gap-2 justify-center mb-8">
        <UButton
          v-for="cat in categories"
          :key="cat.key"
          :label="cat.label"
          :color="activeCategory === cat.key ? 'primary' : 'neutral'"
          :variant="activeCategory === cat.key ? 'solid' : 'ghost'"
          size="sm"
          @click="activeCategory = cat.key"
        />
      </div>

      <div
        v-if="filtered.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <button
          v-for="item in filtered"
          :key="item.title"
          class="group relative rounded-xl overflow-hidden aspect-square bg-elevated border border-default hover:border-primary transition-colors"
          @click="openLightbox(item)"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.imageAlt"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            :class="{ 'hidden': failedImages.has(item.title) }"
            loading="lazy"
            width="400"
            height="400"
            format="webp"
            @error="failedImages.add(item.title)"
          />
          <div
            v-if="failedImages.has(item.title)"
            class="flex flex-col items-center justify-center w-full h-full gap-2 text-dimmed"
          >
            <UIcon name="i-lucide-image" class="size-8 text-primary/30" />
            <span class="text-xs text-center px-2">{{ item.title }}</span>
          </div>
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
            <div class="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <p class="text-white text-sm font-semibold">
                {{ item.title }}
              </p>
              <p v-if="item.material" class="text-white/70 text-xs">
                {{ item.material }}
              </p>
            </div>
          </div>
        </button>
      </div>

      <div v-else class="text-center py-16 text-dimmed">
        V této kategorii zatím nejsou žádné položky.
      </div>
    </UPageSection>

    <!-- Lightbox modal -->
    <UModal
      v-model:open="lightboxOpen"
      :ui="{ content: 'max-w-2xl' }"
    >
      <template #body>
        <div v-if="lightboxItem">
          <NuxtImg
            :src="lightboxItem.image"
            :alt="lightboxItem.imageAlt"
            class="w-full rounded-lg"
            width="800"
            height="800"
            format="webp"
          />
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-highlighted">
              {{ lightboxItem.title }}
            </h3>
            <p v-if="lightboxItem.material" class="text-sm text-muted mt-1">
              Materiál: {{ lightboxItem.material }}
            </p>
          </div>
        </div>
      </template>
    </UModal>

    <UPageCTA
      title="Chcete podobný výtisk?"
      description="Pošlete nám svůj model nebo popis a my vám připravíme nabídku."
      :links="[{ label: 'Poptávka', to: '/kontakt', color: 'primary', size: 'xl' }]"
    />
  </div>
</template>
