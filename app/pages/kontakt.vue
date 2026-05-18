<script setup lang="ts">
import { z } from 'zod'

useSeo({
  title: 'Kontakt a poptávka',
  description: 'Nezávazná poptávka 3D tisku a modelování. Odešlete svůj projekt a my se ozveme do 24 hodin.'
})

const { state, loading, success, error, submit } = useContactForm()

const serviceOptions = [
  { label: '3D Tisk', value: '3D Tisk' },
  { label: '3D Modelování', value: '3D Modelování' },
  { label: 'Náhradní díl', value: 'Náhradní díl' },
  { label: 'Série / Větší zakázka', value: 'Série' },
  { label: 'Poradenství', value: 'Poradenství' },
  { label: 'Jiné', value: 'Jiné' }
]

const formSchema = z.object({
  name: z.string().min(2, 'Zadejte prosím své jméno'),
  email: z.string().email('Zadejte platnou e-mailovou adresu'),
  phone: z.string().optional(),
  serviceType: z.string().min(1, 'Vyberte typ služby'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
  gdprConsent: z.literal(true, { error: 'Souhlas je povinný' })
})

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files?.[0]) {
    state.fileName = target.files[0].name
  }
}
</script>

<template>
  <div>
    <UPageHero
      title="Kontakt a poptávka"
      description="Popište nám svůj projekt a my vám do 24 hodin připravíme nezávaznou nabídku."
      :ui="{ root: 'py-16 sm:py-24' }"
    />

    <UPageSection :ui="{ root: 'py-16 sm:py-24', container: 'max-w-5xl' }">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Form -->
        <div>
          <UAlert
            v-if="success"
            title="Zpráva odeslána!"
            description="Děkujeme. Ozveme se vám do 24 hodin."
            color="success"
            variant="soft"
            class="mb-6"
          />

          <UAlert
            v-if="error"
            :title="error"
            color="error"
            variant="soft"
            class="mb-6"
          />

          <UForm
            :schema="formSchema"
            :state="state"
            class="space-y-4"
            @submit="submit"
          >
            <UFormField label="Jméno a příjmení" name="name" required>
              <UInput
                v-model="state.name"
                placeholder="Jan Novák"
                class="w-full"
              />
            </UFormField>

            <UFormField label="E-mailová adresa" name="email" required>
              <UInput
                v-model="state.email"
                type="email"
                placeholder="jan@priklad.cz"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Telefon" name="phone">
              <UInput
                v-model="state.phone"
                type="tel"
                placeholder="+420 123 456 789"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Typ služby" name="serviceType" required>
              <USelect
                v-model="state.serviceType"
                :items="serviceOptions"
                placeholder="Vyberte typ služby"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Popis projektu" name="message" required>
              <UTextarea
                v-model="state.message"
                placeholder="Popište svůj projekt, rozměry, materiál, počet kusů..."
                :rows="5"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Přiložit soubor (STL, OBJ, STEP, foto)" name="file">
              <div class="flex items-center gap-3">
                <label class="cursor-pointer">
                  <UButton
                    label="Vybrat soubor"
                    color="neutral"
                    variant="outline"
                    size="sm"
                    as="span"
                  />
                  <input
                    type="file"
                    accept=".stl,.obj,.step,.stp,.3mf,.jpg,.jpeg,.png,.pdf"
                    class="sr-only"
                    @change="handleFileChange"
                  >
                </label>
                <span v-if="state.fileName" class="text-sm text-muted">{{ state.fileName }}</span>
                <span v-else class="text-sm text-dimmed">Žádný soubor</span>
              </div>
              <p class="mt-1 text-xs text-dimmed">
                Max. 10 MB. Formáty: STL, OBJ, STEP, 3MF, JPG, PNG, PDF
              </p>
            </UFormField>

            <UFormField name="gdprConsent">
              <UCheckbox
                v-model="state.gdprConsent"
                label="Souhlasím se zpracováním osobních údajů pro účely zpracování poptávky."
                required
              />
            </UFormField>

            <UButton
              type="submit"
              label="Odeslat poptávku"
              color="primary"
              :loading="loading"
              :disabled="loading"
              trailing-icon="i-lucide-send"
              class="w-full justify-center"
            />
          </UForm>
        </div>

        <!-- Contact info -->
        <div class="space-y-6">
          <div class="rounded-2xl border border-default bg-elevated p-6">
            <h2 class="text-lg font-semibold text-highlighted mb-4">
              Kontaktní informace
            </h2>
            <dl class="space-y-3">
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-mail" class="size-5 text-primary shrink-0" />
                <a href="mailto:info@vytisknem.to" class="text-default hover:text-primary transition-colors">
                  info@vytisknem.to
                </a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-map-pin" class="size-5 text-primary shrink-0" />
                <span class="text-default">Praha, Česká republika</span>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-clock" class="size-5 text-primary shrink-0" />
                <span class="text-default">Po–Pá: 9:00–18:00</span>
              </div>
            </dl>
          </div>

          <div class="rounded-2xl border border-default bg-elevated p-6">
            <h3 class="font-semibold text-highlighted mb-3">
              Jak nás kontaktovat
            </h3>
            <ul class="space-y-2 text-sm text-muted">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="size-4 text-primary mt-0.5 shrink-0" />
                Vyplňte formulář — odpovídáme do 24 hodin
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="size-4 text-primary mt-0.5 shrink-0" />
                Přiložte soubor nebo obrázek projektu
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="size-4 text-primary mt-0.5 shrink-0" />
                Nezávazná konzultace a nabídka zdarma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
