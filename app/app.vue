<script setup lang="ts">
const colorMode = useColorMode()

const { data: nav } = await useAsyncData('navigation', () =>
  queryCollection('navigation').first()
)
const { data: footer } = await useAsyncData('footer', () =>
  queryCollection('footer').first()
)

provide('nav', nav)
provide('footer', footer)

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : 'white')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'cs'
  },
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://vytisknem.to/#business',
      'name': 'vytisknem.to',
      'url': 'https://vytisknem.to',
      'description': 'Profesionální 3D tisk a 3D modelování na míru.',
      'email': 'info@vytisknem.to',
      'currenciesAccepted': 'CZK',
      'paymentAccepted': 'Hotovost, Platební karta, Bankovní převod',
      'areaServed': { '@type': 'Country', 'name': 'Česká republika' },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Praha',
        'addressCountry': 'CZ'
      },
      'openingHoursSpecification': [{
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }]
    })
  }]
})

useSeoMeta({
  // ogImage: 'https://vytisknem.to/og-default.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
