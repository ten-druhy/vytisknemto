<template>
  <div>
    <section>
      <UContainer>
        <div class="flex gap-4 flex-wrap md:flex-nowrap">
          <div class="flex flex-col justify-between flex-1/2">
            <h1>Zakázkový <span class="text-(--ui-primary) font-bold">3D tisk</span> a modelování pro každého</h1>
            <p>Transformujeme Vaše nápady do reality</p>
            <div>
              <UButton trailing-icon="i-lucide-arrow-right" class="px-4 py-2">Kontaktujte nás</UButton>
              <UButton variant="outline" to="/galerie" class="mx-2 px-4 py-2">Naše služby</UButton>
            </div>
          </div>
          <div>
            <div
              class="bg-radial from-primary-500/15 from-30% via-primary-600/25 via-60% to-65% to-transparent p-8 rounded-full animate-float">

              <div
                class="bg-radial from-primary-500/15 from-30% via-primary-600/25 via-60% to-65% to-transparent p-8 rounded-full animate-float anim-delay-1">
                <div
                  class="bg-radial from-primary-500/15 from-30% via-primary-600/25 via-60% to-65% to-transparent p-8 rounded-full animate-float anim-delay-2">
                  <UIcon name="i-material-symbols-hexagon-outline" class="animate-float anim-delay-3" size="32"></UIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section>
      <UContainer>
        <div class="w-full text-center">
          <h2>Jak to funguje?</h2>
          <p>Jednoduchý proces od nahrání modelu až po doručení
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
          <UCard v-for="(card, index) of servicesCards" class="shadow hover:shadow-xl transition-shadow ease-in-out"
            :key="index">
            <template #header>
              <div class="flex justify-between">
                <h3 class="text--doubled">{{ index + 1 }}</h3>
                <UIcon v-if="card.icon" :name="card.icon" class="size-8 text-(--ui-primary)" />
                <span v-else></span>
              </div>
              <h3 class="text-center">{{ card.title }}</h3>
            </template>
            <div>
              <p>{{ card.text }}</p>
            </div>
          </UCard>
        </div>
        <div class="w-full text-center">
          <p class="my-2">
            V případě, že nemáte vlastní 3D model k vytištění, rádi Vám pomůžeme i s modelováním.
          </p>
          <UButton>Začít
            <UIcon name="i-lucide-arrow-right" />
          </UButton>
        </div>
      </UContainer>
    </section>
    <section>
      <UContainer>
        <div class="flex gap-4 flex-wrap md:flex-nowrap">
          <div class="flex-1/2 grid grid-cols-2 gap-2 h-fit self-center">
            <NuxtImg alt="Consulting splash image" width="300" height="192" :placeholder="[300, 192, 20, 2]"
              src="/splash/consulting_1.jpg" class="rounded-2xl h-48 shadow-lg object-cover -translate-y-8" />

            <NuxtImg alt="Consulting splash image" width="300" height="192" :placeholder="[300, 192, 20, 2]"
              src="/splash/consulting_3.jpg" class="rounded-2xl h-48 shadow-lg object-cover translate-y-8" />

            <NuxtImg alt="Consulting splash image" width="300" height="192" :placeholder="[300, 192, 20, 2]"
              src="/splash/consulting_4.jpg" class="rounded-2xl h-48 shadow-lg object-cover -translate-y-8" />

            <NuxtImg alt="Consulting splash image" width="300" height="192" :placeholder="[300, 192, 20, 2]"
              src="/splash/consulting_5.jpg" class="rounded-2xl h-48 shadow-lg object-cover translate-y-8" />
          </div>
          <div class="flex-1/2 flex flex-col justify-between h-128 mt-8 md:mt-0">
            <h2>Budování Excelence Prostřednictvím Expertního Poradenství</h2>
            <p>Po dobu více než 30 let poskytujeme profesionální poradenské služby ve stavebnictví klientům po celé
              zemi.
              Náš tým zkušených profesionálů je zavázán dosahovat mimořádných výsledků pro projekty všech velikostí.</p>
            <div class="grid grid-cols-2 gap-y-2 gap-x-1">

              <VTChipKeyword v-for="(item, index) of aboutItems" :key="`about-${index}`" icon="i-lucide-check"
                :text="item" />
            </div>
            <div class="mx-auto">
              <UButton>Náš přístup</UButton>
              <UButton class="mx-2" variant="outline">Seznámení s týmem</UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section>
      <UContainer>
        <div class="w-full text-center">
          <h2>Kontaktujte nás</h2>
          <p>Nevíte si rady, nebo potřebujete konzultaci? Náš tým je připraven Vám pomoci v každém ohledu.</p>
          <div class="flex flex-wrap md:flex-nowrap gap-4 mt-4">
            <UForm class="flex-1/2 flex flex-wrap bg-(--ui-bg) p-2 rounded-xl" :state="state" @submit="submitEmail"
              :schema="contactSchema">
              <h3 class="w-full mb-4">Napište nám</h3>
              <UFormField class="flex-1/2 px-1" name="name">
                <UInput placeholder="" :ui="{ base: 'peer' }" variant="outline" class="w-full rounded-2xl"
                  id="contact-form-name" v-model="state.name">
                  <label for="contact-form-name"
                    class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-(--ui-bg) text-(--ui-text-highlighted) px-2 rounded-full">Celé
                      jméno<span class="text-(--ui-primary) mx-1">*</span></span>
                  </label>
                </UInput>
              </UFormField>
              <UFormField class="flex-1/2  px-1 mb-4" name="phone">
                <UInput id="contact-form-phone" v-model="state.phone" placeholder="" :ui="{ base: 'peer' }"
                  variant="outline" class="w-full rounded-2xl">
                  <label for="contact-form-phone"
                    class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-(--ui-bg) text-(--ui-text-highlighted) px-2 rounded-full">Telefon</span>
                  </label>
                </UInput>
              </UFormField>
              <UFormField class="flex-1/2 px-1 mb-4" name="email">
                <UInput id="contact-form-email" v-model="state.email" placeholder="" :ui="{ base: 'peer' }"
                  variant="outline" class="w-full rounded-2xl">
                  <label for="contact-form-email"
                    class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-(--ui-bg) text-(--ui-text-highlighted) px-2 rounded-full">E-mail<span
                        class="text-(--ui-primary) mx-1">*</span></span>
                  </label>
                </UInput>
              </UFormField>
              <UFormField class="flex-1/2  px-1 mb-4" name="subject">
                <UInput id="contact-form-subject" v-model="state.subject" placeholder="" :ui="{ base: 'peer' }"
                  variant="outline" class="w-full rounded-2xl">
                  <label for="contact-form-subject"
                    class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-(--ui-bg) text-(--ui-text-highlighted) px-2 rounded-full">Předmět
                      zprávy<span class="text-(--ui-primary) mx-1">*</span></span>
                  </label>
                </UInput>
              </UFormField>
              <UFormField class="w-full px-1" name="message">
                <UTextarea id="contact-form-message" v-model="state.message" placeholder="" :ui="{ base: 'peer' }"
                  variant="outline" class="w-full rounded-2xl">
                  <label for="contact-form-message"
                    class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-(--ui-bg) text-(--ui-text-highlighted) px-2 rounded-full">Zpráva<span
                        class="text-(--ui-primary) mx-1">*</span></span>
                  </label>
                </UTextarea>
              </UFormField>
              <UFormField name="validationToken" class="w-full px-1">
                <NuxtTurnstile v-model="state.validationToken" ref="turnstile" class="self-center"
                  :theme="$colorMode.value === 'dark' ? 'dark' : 'auto'" appearance="interaction-only" />
              </UFormField>

              <UFormField class="w-full px-1">
                <UButton type="submit" class="self-center" :disabled="loading" :loading="loading">
                  Odeslat
                </UButton>
              </UFormField>
            </UForm>
            <div class="flex-1/2 justify-between flex flex-col">
              <h3>Kontaktní informace</h3>
              <p>Náš tým profesionálních stavebních dozorců je Vám k dispozici každý pracovní den od 9:00 do 17:00.</p>
              <div class="flex items-center text-start my-2 bg-(--ui-bg) px-4 py-2 rounded-xl">
                <UAvatar class="mr-2" icon="i-lucide-phone" size="xl" :ui="{ icon: 'text-(--ui-primary)' }" />
                <div class="ml-2">
                  <h3>Telefon</h3>
                  <div>+420 123 456 789</div>
                  <UButton v-if="$device.isMobile" variant="link" color="primary" href="tel:+420606060153" class="p-0">
                    Zavolejte nám</UButton>
                </div>
              </div>
              <div class="flex items-center text-start my-2  bg-(--ui-bg) px-4 py-2 rounded-xl">
                <UAvatar class="mr-2" icon="i-lucide-at-sign" size="xl" :ui="{ icon: 'text-(--ui-primary)' }" />
                <div class="ml-2">
                  <h3>Email</h3>
                  <div>info@clientconsult.cz</div>
                  <UButton variant="link" color="primary" href="mailto:info@clientconsult.cz" class="p-0">
                    Napište nám
                  </UButton>
                </div>
              </div>
              <div class="flex items-center text-start mt-2  bg-(--ui-bg) px-4 py-2 rounded-xl">
                <UAvatar class="mr-2" icon="i-lucide-building" size="xl" :ui="{ icon: 'text-(--ui-primary)' }" />
                <div class="ml-2">
                  <h3>Adresa</h3>
                  <div>Táboritská 880/14, 130 00 Praha 3-Žižkov</div>
                  <UButton variant="link" color="primary"
                    :href="$device.isMobile ? 'geo:50.0830796,14.4494936' : 'http://maps.google.com/?q=Táboritská 880/14, 130 00 Praha 3-Žižkov'"
                    target="_blank" class="p-0">
                    Navštivte nás</UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js'
import { FetchError } from "ofetch"
import type { InternalApi } from "nitropack/types"
import type { ZodIssue } from 'zod'
import { contactSchema, type ContactSchema } from '~/schemas/contactSchema'


const state = reactive<Partial<ContactSchema>>({})
const turnstile = useTemplateRef("turnstile")
const loading = ref(false)
const servicesCards: { icon?: string, text: string, title: string }[] = [
  {
    icon: "i-lucide-circle-fading-arrow-up",
    title: "Nahrajte 3D model",
    text: "Nahrajte váš vlastní 3D model ve formátu STL, OBJ nebo jiném podporovaném formátu a získejte okamžitou kalkulaci ceny."
  },
  {
    icon: "i-lucide-circle-dollar-sign",
    title: "Cenová Kalkulace",
    text: "Náš tým zpracuje Vaše požadavky a ozve se vám s cenovou nabídkou."
  },
  {
    icon: "i-lucide-circle-check-big",
    title: "Schválení nabídky",
    text: "Dolaďte s našim týmem požadavky na materiál a vlastnosti produktu."
  },
  {
    icon: "i-lucide-package-open",
    title: "Doručení a sdílení",
    text: "Hotový výrobek vám doručíme pomocí kurýrní služby."
  }
]
const aboutItems = [
  "Více než 30 let zkušeností v oboru",
  "Tým certifikovaných stavebních expertů",
  "Úspěšné dokončení 500+ projektů",
  "Oceňované konzultační služby",
  "Strategická partnerství s předními dodavateli",
  "Závazek k udržitelným stavebním praktikám",
]
const toast = useToast()
async function submitEmail() {
  loading.value = true
  try {
    const submitFetch = await $fetch<InternalApi["/api/submitContact"]>("/api/submitContact", { method: "post", body: state })
    toast.add({
      color: "success",
      title: "Kontaktní formulář odeslán",
      description: "Děkujeme za Váš zájem, brzy se Vám ozveme s odpovědí",
      icon: "i-lucide-circle-check-big"
    })
  } catch (err) {
    const t: Partial<Toast> = {
      color: "error",
      title: "Formulář se nepodařilo odeslat",
      icon: `i-lucide-circle-alert`,
      description: "Neznamý error",
    }
    if (err instanceof FetchError) {
      if (err.statusCode === 400) {
        t.icon = "i-lucide-triangle-alert"
        t.title = "Formulář se nepodařilo odeslat: Validační chyba"
        t.description = h("div", (err.data?.data as ZodIssue[]).map(el => h("div", { innerHTML: el.message })))
      }
      if (err.statusCode === 403) {
        t.icon = "i-lucide-shield-x"
        t.description = "Captcha chyba"
      }
    }
    toast.add(t)
  }
  turnstile.value?.reset()
  loading.value = false
}
</script>
<style lang="scss" scoped>
section {
  padding: 5rem 0;
  // --bg-grid-color: var(--ui-bg-muted);
  // --bg-grid-alpha: 100%;
  // --bg-grid-line: rgb(from var(--bg-grid-color) r g b / var(--bg-grid-alpha));
  // --bg-grid-width: 2px;
  // --bg-grid-img: linear-gradient(var(--bg-grid-line) var(--bg-grid-width), transparent var(--bg-grid-width)), linear-gradient(45deg, var(--bg-grid-line) var(--bg-grid-width), transparent var(--bg-grid-width));
  // background-image: var(--bg-grid-img);
  // background-size: 40px 40px;
  background-color: var(--ui-bg-elevated);

  &:nth-child(even) {
    // --bg-grid-color: var(--ui-bg);
    // background-image: none;
    background-color: var(--ui-bg-accented);
  }
}


.dark section {
  // --bg-grid-alpha: 35%;
  // --bg-grid-width: 1px;
  // background-image: none;

  // &:nth-child(even) {
  //   background-image: var(--bg-grid-img);
  // }
  background-color: var(--ui-bg-accented);

  &:nth-child(even) {
    background-color: var(--ui-bg-elevated);
  }
}

.animate-float {
  animation: 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0s infinite alternate none running float;
}


@keyframes float {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }

}

.anim-delay-1 {
  animation-delay: 1s;
}

.anim-delay-2 {
  animation-delay: 2s;
}

.anim-delay-3 {
  animation-delay: 3s;
}

.text--doubled {
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: .5rem .4rem rgb(from var(--ui-primary) r g b / 35%);
}
</style>