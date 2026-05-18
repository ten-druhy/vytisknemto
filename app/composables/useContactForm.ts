export interface ContactFormState {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
  fileName: string
  gdprConsent: boolean
}

export function useContactForm() {
  const state = reactive<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    fileName: '',
    gdprConsent: false
  })

  const loading = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  async function submit() {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: state
      })
      success.value = true
      Object.assign(state, {
        name: '', email: '', phone: '', serviceType: '', message: '', fileName: '', gdprConsent: false
      })
    }
    catch (err: unknown) {
      const fetchError = err as { data?: { statusMessage?: string } }
      error.value = fetchError?.data?.statusMessage ?? 'Nepodařilo se odeslat zprávu. Zkuste to znovu.'
    }
    finally {
      loading.value = false
    }
  }

  return { state, loading, success, error, submit }
}
