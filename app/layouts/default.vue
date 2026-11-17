<template>
  <div class="min-h-screen bg-grhiit-black text-grhiit-white font-body relative">
    <!-- Navigation -->
    <LayoutTopNav @open-waitlist="openWaitlistModal" />

    <!-- Main content with top padding for fixed nav -->
    <main class="pt-16 md:pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-grhiit-gray-900 border-t border-grhiit-gray-800 mt-0 py-16">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid md:grid-cols-3 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <h3 class="font-display font-extrabold text-2xl uppercase tracking-tight text-grhiit-white mb-4">
              GRHIIT
            </h3>
            <p class="font-body text-grhiit-white/60 leading-relaxed">
              A practice of voluntary discomfort. No equipment. No fluff.
            </p>
          </div>

          <!-- Principles -->
          <div>
            <h4 class="font-display font-semibold text-sm uppercase tracking-widest text-grhiit-white mb-4">
              Principles
            </h4>
            <ul class="space-y-2 font-body text-grhiit-white/60">
              <li>Effort over time.</li>
              <li>Discipline over mood.</li>
              <li>Return over perfect.</li>
              <li>Form over ego.</li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h4 class="font-display font-semibold text-sm uppercase tracking-widest text-grhiit-white mb-4">
              Connect
            </h4>
            <p class="font-body text-grhiit-white/60 mb-6">
              Do not negotiate.
            </p>
            <button
              @click="openWaitlistModal"
              class="px-6 py-3 bg-grhiit-red text-grhiit-white font-display font-semibold text-sm uppercase tracking-widest hover:bg-grhiit-red-dark hover:shadow-glow-red transition-all duration-300"
            >
              Begin
            </button>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-grhiit-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-body text-sm text-grhiit-white/40">
            &copy; 2026 GRHIIT. Do hard things on purpose.
          </p>
          <p class="font-mono text-xs text-grhiit-white/30 uppercase tracking-widest">
            One Session. One second. One rep.
          </p>
        </div>
      </div>
    </footer>

    <!-- Waitlist Modal -->
    <ClientOnly>
      <UiWaitlistModal
        :is-open="isWaitlistModalOpen"
        @close="closeWaitlistModal"
        @submit="handleWaitlistSubmit"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const isWaitlistModalOpen = ref(false)

const openWaitlistModal = () => {
  isWaitlistModalOpen.value = true
}

const closeWaitlistModal = () => {
  isWaitlistModalOpen.value = false
}

const handleWaitlistSubmit = (data: { email: string; name: string; success: boolean }) => {
  console.log('Waitlist signup:', data)
}
</script>
