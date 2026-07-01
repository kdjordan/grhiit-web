<template>
  <section class="py-24 md:py-40 bg-grhiit-black-warm relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-grhiit-red/10 blur-[120px] pointer-events-none"></div>
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-grhiit-red to-transparent"></div>
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-grhiit-red/10 border border-grhiit-red/30 mb-8">
          <span class="w-2 h-2 bg-grhiit-red rounded-full animate-pulse"></span>
          <span class="font-mono text-xs uppercase tracking-widest text-grhiit-red">Founding iOS access</span>
        </div>

        <h2 class="font-display text-5xl md:text-7xl lg:text-8xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
          Begin free.
          <span class="block mt-2 md:mt-4 text-outline-red text-outline-thick">Finish earned.</span>
        </h2>

        <div class="mt-10 grid md:grid-cols-3 gap-4 text-left">
          <div class="bg-grhiit-black/60 border border-grhiit-white/10 p-6">
            <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">Step 01</div>
            <h3 class="mt-5 font-display text-3xl uppercase text-grhiit-white">Start</h3>
            <p class="mt-3 font-body text-grhiit-white/55">Get early iOS access and run the first two sessions free.</p>
          </div>
          <div class="bg-grhiit-black/60 border border-grhiit-white/10 p-6">
            <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">Step 02</div>
            <h3 class="mt-5 font-display text-3xl uppercase text-grhiit-white">Unlock</h3>
            <p class="mt-3 font-body text-grhiit-white/55">Buy Cycle 1 once for $24.99. No subscription. No endless library.</p>
          </div>
          <div class="bg-grhiit-black/60 border border-grhiit-white/10 p-6">
            <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">Step 03</div>
            <h3 class="mt-5 font-display text-3xl uppercase text-grhiit-white">Earn</h3>
            <p class="mt-3 font-body text-grhiit-white/55">Finish the 8-week cycle to unlock what comes next.</p>
          </div>
        </div>

        <div class="mt-12 md:mt-14">
          <button
            @click="$emit('openWaitlist')"
            class="group relative px-12 py-5 bg-grhiit-red text-grhiit-white font-display uppercase tracking-widest text-lg md:text-xl overflow-hidden hover:shadow-glow-red-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <span class="relative z-10">Get early iOS access</span>
            <div class="absolute inset-0 bg-grhiit-red-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <div class="mt-14 md:mt-16 pt-10 border-t border-grhiit-white/10">
          <p class="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-grhiit-white">
            No PDF. No theory.
            <span class="text-grhiit-red">Just the timer.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()
</script>
