<template>
  <section class="hero relative overflow-hidden bg-obsidian">
    <picture class="absolute inset-0">
      <source media="(orientation: portrait), (max-aspect-ratio: 1/1)" srcset="/images/hero/hero-canyon-mobile.webp" />
      <img src="/images/hero/hero-canyon.webp" alt="" class="hero-img w-full h-full object-cover" fetchpriority="high" />
    </picture>
    <div class="hero-shade absolute inset-0"></div>

    <div class="hero-inner relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
      <div class="hero-copy">
        <p class="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-ember">iPhone app</p>
        <h1 class="hero-title font-display uppercase text-bone tracking-wide">
          The path<br />of most<br />resistance.
        </h1>
        <p class="mt-6 font-display uppercase tracking-wide text-xl md:text-2xl text-bone/80 leading-tight">
          Stop working out.<br class="sm:hidden" /> Start training.
        </p>
        <p class="mt-5 font-body text-base md:text-lg text-bone/75 max-w-md">
          A scripted bodyweight program for iPhone.<br />Six weeks. Eighteen Sessions.
        </p>
        <p class="mt-6 font-mono text-xs uppercase tracking-widest text-bone/50">
          6 weeks <span class="text-ember">·</span> 18 Sessions <span class="text-ember">·</span> Forward only
        </p>

        <div class="mt-8 flex flex-wrap gap-3 items-stretch">
          <button @click="$emit('openWaitlist')" class="px-8 py-4 bg-ember text-bone font-display uppercase tracking-widest text-base md:text-lg hover:bg-ember-dark transition-colors">
            Begin Cycle I
          </button>
          <a v-if="appStore.live && appStore.url" :href="appStore.url" target="_blank" rel="noopener" class="inline-flex items-center">
            <img :src="appStore.badge" alt="Download on the App Store" class="h-[3.25rem] md:h-[3.6rem] w-auto" />
          </a>
          <div v-else class="store-soon inline-flex flex-col justify-center px-6 py-2 border border-bone/25 bg-obsidian/60 text-bone" aria-label="Coming soon to the App Store">
            <span class="font-body text-[10px] uppercase tracking-[0.2em] text-bone/50 leading-tight">Coming soon to the</span>
            <span class="font-display uppercase tracking-widest text-base md:text-lg leading-tight">App Store</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'openWaitlist'): void }>()
const { appStore } = useAppConfig()
</script>

<style scoped>
.hero { --nav: 4rem; min-height: 100svh; display: flex; padding-top: var(--nav); }
@media (min-width: 768px) { .hero { --nav: 5rem; } }

.hero-inner { display: flex; align-items: center; padding-block: clamp(2rem, 6svh, 5rem); }
.hero-title { line-height: 0.88; font-size: clamp(2.6rem, min(7.2vw, 10svh), 7.25rem); }

.hero-img { object-position: 70% 85%; }
.hero-copy { max-width: min(40rem, 54%); }
.hero-shade { background: linear-gradient(to right, rgba(11,11,11,.92) 0%, rgba(11,11,11,.75) 35%, rgba(11,11,11,.15) 60%, transparent 75%); }

@media (orientation: portrait), (max-aspect-ratio: 1/1) {
  .hero-img { object-position: 50% 100%; }
  .hero-inner { align-items: flex-start; padding-top: clamp(1.25rem, 18svh, 14rem); padding-bottom: 34svh; }
  .hero-copy { max-width: 36rem; }
  .hero-title { font-size: clamp(2.4rem, min(13vw, 7svh), 5.5rem); }
  .hero-shade { background: linear-gradient(to bottom, rgba(11,11,11,.15) 0%, rgba(11,11,11,.72) 28%, rgba(11,11,11,.72) 58%, rgba(11,11,11,0) 70%); }
}

@media (max-height: 720px) and (orientation: landscape) {
  .hero-inner { align-items: flex-start; padding-block: 0.4rem 0.85rem; }
  .hero-title { font-size: clamp(2.15rem, 7.2svh, 4.1rem); }
  .hero-copy > p.mb-5 { margin-bottom: 0.4rem; }
  .hero-copy > .mt-6 { margin-top: 0.55rem; }
  .hero-copy > .mt-5 { margin-top: 0.4rem; }
  .hero-copy > .mt-8 { margin-top: 0.7rem; }
  .hero-copy .px-8 { padding-top: 0.7rem; padding-bottom: 0.7rem; }
  .hero-copy .text-xl { font-size: 1.15rem; }
  .hero-copy .md\:text-2xl { font-size: 1.25rem; }
}
</style>
