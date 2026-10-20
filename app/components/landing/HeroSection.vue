<template>
  <section class="relative min-h-[100svh] flex items-end md:items-center overflow-hidden bg-obsidian">
    <picture class="absolute inset-0">
      <source media="(max-width: 767px)" srcset="/images/hero/hero-canyon-mobile.webp" />
      <img src="/images/hero/hero-canyon.webp" alt="" class="w-full h-full object-cover object-center" fetchpriority="high" />
    </picture>
    <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30 md:bg-gradient-to-r md:from-obsidian md:via-obsidian/70 md:to-transparent"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-32 md:py-32 fade-up">
      <h1 class="font-display uppercase text-bone leading-brutal tracking-wide text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        Hard is<br />misunderstood.
      </h1>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/80">Most never find their threshold.</p>
      <p class="mt-2 font-body text-lg md:text-xl text-bone">You can.</p>

      <p class="mt-8 font-mono text-xs md:text-sm uppercase tracking-widest text-bone/50">
        6 weeks <span class="text-ember">·</span> 18 Sessions <span class="text-ember">·</span> Forward only
      </p>

      <div class="mt-10 flex flex-col sm:flex-row gap-4">
        <button @click="$emit('openWaitlist')" class="px-10 py-5 bg-ember text-bone font-display uppercase tracking-widest text-lg hover:bg-ember-dark transition-colors">
          Begin Cycle I
        </button>
        <a href="#what-is-grhiit" class="px-10 py-5 border border-bone/20 text-bone font-display uppercase tracking-widest text-lg hover:border-bone/60 transition-colors text-center">
          The Path ↓
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'openWaitlist'): void }>()
</script>
