<template>
  <header class="absolute top-0 left-0 right-0 z-20 flex justify-center pt-6">
    <nav class="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-8 py-4 shadow-xl">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="text-2xl font-primary uppercase font-bold mr-4"
          >GRHIIT</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-semibold"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/program"
          class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-semibold"
          >Program</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-semibold"
          >Articles</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-semibold"
          >About</NuxtLink
        >
        <UiGButton size="sm" @click="emit('openWaitlist')"
          >Join Waitlist</UiGButton
        >
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  openWaitlist: []
}>()
</script>
