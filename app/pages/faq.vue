<script setup lang="ts">
useSeo({
  title: 'Časté dotazy',
  description: 'Odpovědi na nejčastější otázky o 3D tisku, objednávkách, materiálech, dodacích lhůtách a platbách.'
})

const { data: faqs } = await useAsyncData('faqs', () =>
  queryCollection('faq').order('order', 'ASC').all()
)

const categoryLabels: Record<string, string> = {
  obecne: 'Obecné otázky',
  objednavky: 'Objednávky',
  materialy: 'Materiály',
  'dodaci-doby': 'Dodací lhůty',
  soubory: 'Formáty souborů',
  platby: 'Platby'
}

const grouped = computed(() => {
  if (!faqs.value) return []
  const groups: Record<string, typeof faqs.value> = {}
  for (const faq of faqs.value) {
    if (!groups[faq.category]) groups[faq.category] = []
    groups[faq.category]!.push(faq)
  }
  return Object.entries(groups).map(([cat, items]) => ({
    category: cat,
    label: categoryLabels[cat] ?? cat,
    items: items.map(item => ({
      label: item.question,
      content: item.answer
    }))
  }))
})
</script>

<template>
  <div>
    <UPageHero
      title="Časté dotazy"
      description="Nenašli jste odpověď? Napište nám na info@vytisknem.to nebo použijte kontaktní formulář."
      :ui="{ root: 'py-16 sm:py-24' }"
    />

    <UPageSection :ui="{ root: 'py-16 sm:py-24', container: 'max-w-3xl' }">
      <div class="space-y-10">
        <div
          v-for="group in grouped"
          :key="group.category"
        >
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary font-mono mb-4">
            {{ group.label }}
          </h2>
          <UAccordion
            :items="group.items"
            :ui="{
              item: 'border border-default rounded-xl mb-2 overflow-hidden',
              trigger: 'p-4 hover:bg-elevated',
              content: 'px-4 pb-4 text-muted leading-relaxed text-sm'
            }"
          />
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-muted mb-4">
          Nenašli jste odpověď na svou otázku?
        </p>
        <UButton
          label="Napsat nám"
          to="/kontakt"
          color="primary"
          leading-icon="i-lucide-mail"
        />
      </div>
    </UPageSection>
  </div>
</template>
