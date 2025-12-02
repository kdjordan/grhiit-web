<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-grhiit-black/80 backdrop-blur-md border-b border-grhiit-gray-800">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="font-display font-extrabold text-xl md:text-2xl uppercase tracking-tight text-grhiit-white hover:text-grhiit-red transition-colors"
          >
            GRHIIT
          </NuxtLink>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-display text-sm uppercase tracking-widest text-grhiit-white/70 hover:text-grhiit-red transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
            <button
              @click="emit('openWaitlist')"
              class="px-5 py-2.5 bg-grhiit-red text-grhiit-white font-display font-semibold text-sm uppercase tracking-widest hover:bg-grhiit-red-dark hover:shadow-glow-red transition-all duration-300"
            >
              Join
            </button>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-grhiit-white hover:text-grhiit-red transition-colors"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-grhiit-gray-800">
            <div class="flex flex-col gap-4">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="font-display text-sm uppercase tracking-widest text-grhiit-white/70 hover:text-grhiit-red transition-colors py-2"
                @click="mobileMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                @click="emit('openWaitlist'); mobileMenuOpen = false"
                class="mt-2 px-5 py-3 bg-grhiit-red text-grhiit-white font-display font-semibold text-sm uppercase tracking-widest hover:bg-grhiit-red-dark transition-all duration-300 w-full"
              >
                Join the First 1,000
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  openWaitlist: []
}>()

const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Program' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
]
</script>
