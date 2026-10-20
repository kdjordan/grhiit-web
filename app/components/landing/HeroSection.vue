<template>
  <section class="hero relative min-h-[100svh] flex overflow-hidden bg-obsidian">
    <picture class="absolute inset-0">
      <source media="(orientation: portrait), (max-aspect-ratio: 1/1)" srcset="/images/hero/hero-canyon-mobile.webp" />
      <img src="/images/hero/hero-canyon.webp" alt="" class="hero-img w-full h-full object-cover" fetchpriority="high" />
    </picture>
    <div class="hero-shade absolute inset-0"></div>

    <div class="hero-copy relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
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

<style scoped>
/* Landscape: desktop image, figure + V slit at ~70% x / 85% y; copy left on the dark wall */
.hero { align-items: center; }
.hero-img { object-position: 70% 85%; }
.hero-shade { background: linear-gradient(to right, #0B0B0B 0%, rgba(11,11,11,.85) 35%, rgba(11,11,11,.2) 65%, transparent 100%); }

/* Portrait (any width): vertical image, figure bottom-center; copy at bottom over a dark fade */
@media (orientation: portrait), (max-aspect-ratio: 1/1) {
  .hero { align-items: flex-end; }
  .hero-img { object-position: 50% 60%; }
  .hero-shade { background: linear-gradient(to top, #0B0B0B 0%, rgba(11,11,11,.9) 30%, rgba(11,11,11,.25) 55%, transparent 75%); }
  .hero-copy { padding-top: 0; padding-bottom: 4rem; }
}
</style>
