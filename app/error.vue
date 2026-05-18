<script setup lang="ts">
interface NuxtError {
  statusCode: number
  statusMessage: string
  message: string
}

const props = defineProps<{ error: NuxtError }>()

const title = computed(() => {
  if (props.error.statusCode === 404) return 'Stránka nenalezena'
  if (props.error.statusCode === 500) return 'Interní chyba serveru'
  return `Chyba ${props.error.statusCode}`
})

const description = computed(() => {
  if (props.error.statusCode === 404) return 'Omlouváme se, požadovaná stránka neexistuje nebo byla přesunuta.'
  return 'Omlouváme se za potíže. Zkuste to prosím znovu nebo nás kontaktujte.'
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <UPageHero
        :title="title"
        :description="description"
        :ui="{ root: 'py-24 sm:py-32' }"
      >
        <template #links>
          <UButton
            label="Zpět na úvodní stránku"
            color="primary"
            leading-icon="i-lucide-home"
            @click="handleError"
          />
        </template>
      </UPageHero>
    </UMain>
    <AppFooter />
  </UApp>
</template>
