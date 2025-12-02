<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-grhiit-black/90 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden bg-grhiit-gray-900 border border-grhiit-gray-800 p-8 md:p-10 text-left align-middle shadow-2xl transition-all">
              <!-- Red accent line -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-grhiit-red"></div>

              <DialogTitle as="h3" class="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-grhiit-white mb-6">
                Join the First <span class="text-grhiit-red">1,000</span>
              </DialogTitle>

              <div class="mb-8">
                <p class="text-grhiit-white/70 font-body mb-4">
                  Get early access to GRHIIT, live session invites, and the complete 8 Weeks starter program.
                </p>
                <p class="text-grhiit-red font-display font-semibold text-sm uppercase tracking-widest">
                  All it takes is all you've got.
                </p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-5">
                <!-- Success Message -->
                <div v-if="successMessage" class="p-4 bg-green-500/10 border border-green-500/50 text-green-400 text-sm font-body">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="p-4 bg-grhiit-red/10 border border-grhiit-red/50 text-grhiit-red text-sm font-body">
                  {{ errorMessage }}
                </div>

                <div>
                  <label for="email" class="block text-sm font-display font-semibold text-grhiit-white mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    :disabled="loading"
                    class="w-full px-4 py-3.5 bg-grhiit-black border border-grhiit-gray-800 text-grhiit-white font-body placeholder-grhiit-white/30 focus:outline-none focus:border-grhiit-red focus:ring-1 focus:ring-grhiit-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label for="name" class="block text-sm font-display font-semibold text-grhiit-white mb-2 uppercase tracking-widest">
                    First Name
                  </label>
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    required
                    :disabled="loading"
                    class="w-full px-4 py-3.5 bg-grhiit-black border border-grhiit-gray-800 text-grhiit-white font-body placeholder-grhiit-white/30 focus:outline-none focus:border-grhiit-red focus:ring-1 focus:ring-grhiit-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div class="flex gap-3 pt-4">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="flex-1 px-6 py-4 bg-grhiit-red text-grhiit-white font-display font-semibold uppercase tracking-widest hover:bg-grhiit-red-dark hover:shadow-glow-red transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ loading ? 'Joining...' : 'Join Now' }}
                  </button>
                  <button
                    type="button"
                    :disabled="loading"
                    @click="closeModal"
                    class="px-6 py-4 border border-grhiit-gray-800 text-grhiit-white/60 font-display font-semibold uppercase tracking-widest hover:border-grhiit-white/30 hover:text-grhiit-white transition-all duration-300 disabled:opacity-50"
                  >
                    Close
                  </button>
                </div>
              </form>

              <p class="text-xs font-body text-grhiit-white/30 mt-6 text-center italic">
                One day. One second. One rep at a time.
              </p>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  submit: [data: { email: string; name: string; success: boolean }]
}>()

const email = ref('')
const name = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const closeModal = () => {
  emit('close')
  setTimeout(() => {
    email.value = ''
    name.value = ''
    loading.value = false
    successMessage.value = ''
    errorMessage.value = ''
  }, 300)
}

const submitForm = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const formData = new FormData()
    formData.append('email_address', email.value)
    formData.append('fields[first_name]', name.value)

    const response = await fetch('https://app.kit.com/forms/8773678/subscriptions', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })

    successMessage.value = 'Success! Check your email to confirm your subscription.'

    emit('submit', {
      email: email.value,
      name: name.value,
      success: true,
    })

    setTimeout(() => {
      closeModal()
    }, 2000)
  } catch (error) {
    console.error('ConvertKit submission error:', error)
    errorMessage.value = 'Something went wrong. Please try again.'

    emit('submit', {
      email: email.value,
      name: name.value,
      success: false,
    })
  } finally {
    loading.value = false
  }
}
</script>
