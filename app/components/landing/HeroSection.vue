<template>
  <section class="relative min-h-screen overflow-hidden bg-grhiit-black pt-24 md:pt-28">
    <div class="absolute inset-0">
      <img
        src="/images/brand/threshold-hero.png"
        alt="A lone figure at a threshold"
        class="h-full w-full object-cover opacity-55 grayscale"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-grhiit-black via-grhiit-black/70 to-grhiit-black/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-grhiit-black via-transparent to-grhiit-black/70"></div>
      <div class="absolute inset-0 opacity-[0.035] noise-overlay pointer-events-none"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-8 min-h-[calc(100vh-6rem)] flex items-center">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full py-16 md:py-24">
        <div class="lg:col-span-7 max-w-4xl">
          <div class="inline-flex items-center gap-3 border border-grhiit-red/30 bg-grhiit-black/50 px-4 py-2 mb-8">
            <span class="h-2 w-2 bg-grhiit-red rounded-full animate-pulse"></span>
            <span class="font-mono text-xs uppercase tracking-[0.3em] text-grhiit-red">iOS early access</span>
          </div>

          <h1 class="font-display uppercase text-grhiit-white leading-brutal tracking-wide skew-forward text-6xl md:text-8xl lg:text-9xl">
            Hard is
            <span class="block text-outline-red text-outline-thick mt-2 md:mt-4">misunderstood.</span>
          </h1>

          <div class="mt-8 max-w-2xl border-l-4 border-grhiit-red pl-6">
            <p class="text-xl md:text-2xl font-body text-grhiit-white/80 leading-relaxed">
              GRHIIT is an 8-week bodyweight practice that uses sustained intensity, incomplete recovery, and forward-only progression to recalibrate what hard feels like.
            </p>
            <p class="mt-5 text-lg md:text-xl font-body text-grhiit-white/55 leading-relaxed">
              Fitness is the byproduct. Identity is the product.
            </p>
          </div>

          <div class="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
            <div class="border border-grhiit-white/10 bg-grhiit-black/50 p-4">
              <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">02 free</div>
              <div class="mt-2 font-display text-2xl uppercase text-grhiit-white">sessions</div>
            </div>
            <div class="border border-grhiit-white/10 bg-grhiit-black/50 p-4">
              <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">$24.99</div>
              <div class="mt-2 font-display text-2xl uppercase text-grhiit-white">cycle 1</div>
            </div>
            <div class="border border-grhiit-white/10 bg-grhiit-black/50 p-4">
              <div class="font-mono text-grhiit-red text-sm uppercase tracking-widest">24 total</div>
              <div class="mt-2 font-display text-2xl uppercase text-grhiit-white">sessions</div>
            </div>
          </div>

          <div class="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              @click="$emit('openWaitlist')"
              class="group relative px-10 py-5 bg-grhiit-red text-grhiit-white font-display uppercase tracking-widest text-lg overflow-hidden hover:shadow-glow-red-lg transition-all duration-300"
            >
              <span class="relative z-10">Get early iOS access</span>
              <div class="absolute inset-0 bg-grhiit-red-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a
              href="#what-is-grhiit"
              class="px-10 py-5 border-2 border-grhiit-white/20 text-grhiit-white font-display uppercase tracking-widest text-lg hover:border-grhiit-red hover:text-grhiit-red transition-all duration-300 text-center"
            >
              See the practice
            </a>
          </div>

          <p class="mt-6 text-sm font-body text-grhiit-white/45 max-w-xl">
            No PDF. No infinite workout library. No fake app screens. Just the timer, the cycle, and the first two sessions free.
          </p>
        </div>

        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm">
            <div class="absolute -inset-10 bg-grhiit-red/15 blur-[90px]"></div>
            <div class="relative mx-auto h-[620px] w-[305px] rounded-[3rem] border border-grhiit-white/15 bg-[#050505] p-3 shadow-2xl">
              <div class="h-full rounded-[2.35rem] border border-grhiit-white/10 bg-gradient-to-b from-[#181818] via-[#080808] to-black overflow-hidden relative">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 rounded-b-3xl bg-[#050505]"></div>
                <div class="absolute inset-0 opacity-[0.04] noise-overlay"></div>
                <div class="p-8 pt-16 h-full flex flex-col">
                  <div class="font-mono text-xs uppercase tracking-[0.28em] text-grhiit-red">Cycle 1</div>
                  <div class="mt-4 h-2 w-full bg-grhiit-white/10">
                    <div class="h-full w-[8%] bg-grhiit-red"></div>
                  </div>
                  <div class="mt-12 flex-1 flex items-center justify-center">
                    <div class="relative h-44 w-44 rounded-full border border-grhiit-white/10 flex items-center justify-center">
                      <div class="absolute inset-3 rounded-full border border-grhiit-red/30"></div>
                      <div class="absolute inset-8 rounded-full border border-grhiit-white/10"></div>
                      <div class="h-2 w-2 bg-grhiit-red rounded-full shadow-glow-red"></div>
                    </div>
                  </div>
                  <div class="grid grid-cols-4 gap-2">
                    <div v-for="n in 24" :key="n" class="h-2" :class="n <= 2 ? 'bg-grhiit-red' : 'bg-grhiit-white/10'"></div>
                  </div>
                  <div class="mt-8 border border-grhiit-white/10 bg-grhiit-black/70 p-4">
                    <div class="h-3 w-24 bg-grhiit-white/15"></div>
                    <div class="mt-3 h-2 w-36 bg-grhiit-white/10"></div>
                    <div class="mt-2 h-2 w-28 bg-grhiit-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-grhiit-white/35">
              Abstract app preview. Final UI in progress.
            </div>
          </div>
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
