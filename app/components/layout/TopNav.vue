<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-black/55 backdrop-blur-[2px] border-b border-white/[0.06]">
      <div class="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:h-20 md:px-8">
        <NuxtLink
          to="/"
          class="group flex items-center gap-3 text-grhiit-white transition-colors hover:text-white"
          aria-label="GRHIIT home"
        >
          <img src="/favicon.svg" alt="" class="h-8 w-8 opacity-90 grayscale" />
          <span class="font-mono text-sm uppercase tracking-[0.42em] text-white/72 group-hover:text-white md:text-base">
            GRHIIT
          </span>
        </NuxtLink>

        <div class="hidden items-center gap-9 lg:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/72 transition-colors hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <button
          @click="emit('openWaitlist')"
          class="hidden border border-white/20 bg-[#f0e8df] px-8 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] md:block"
        >
          Begin Free
        </button>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 text-white/75 transition-colors hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="border-t border-white/[0.06] bg-black/95 px-5 py-5 lg:hidden">
          <div class="mx-auto flex max-w-[1180px] flex-col gap-4">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <button
              @click="emit('openWaitlist'); mobileMenuOpen = false"
              class="mt-3 border border-white/20 bg-[#f0e8df] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black"
            >
              Begin Free
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  openWaitlist: []
}>()

const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/#what-is-grhiit', label: 'The Practice' },
  { to: '/#app', label: 'The App' },
  { to: '/#method', label: 'The Method' },
  { to: '/about', label: 'About' },
  { to: '/articles', label: 'Blog' },
]
</script>
