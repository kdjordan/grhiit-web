<template>
  <section id="what-is-grhiit" ref="problemSection" class="py-24 md:py-40 bg-grhiit-black-warm relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(232, 17, 15, 0.03) 40px, rgba(232, 17, 15, 0.03) 41px);"></div>
    </div>
    <div class="absolute inset-0 vignette-warm pointer-events-none"></div>
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-2 h-1/2 bg-grhiit-red z-10"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-3 max-w-3xl">
          <h2 class="font-display text-4xl md:text-6xl lg:text-7xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
            Not a workout app.
            <span class="block mt-2 md:mt-4 text-outline-red text-outline-thick">A practice.</span>
          </h2>

          <div class="mt-10 space-y-6 text-lg md:text-xl font-body leading-relaxed text-grhiit-white/70">
            <p>
              Most people have never discovered their real threshold. They have only found the point where they start negotiating.
            </p>
            <p>
              GRHIIT uses voluntary discomfort, incomplete recovery, continuity, and progressive exposure to expand physical capacity and mental resilience.
            </p>
            <p class="text-grhiit-white">
              Fat loss, conditioning, lean muscle, and EPOC are intentional byproducts. They are not the product.
            </p>
          </div>

          <div class="mt-10 bg-grhiit-black/60 border-l-4 border-grhiit-red p-6 md:p-8">
            <p class="font-display uppercase tracking-wide text-2xl md:text-3xl text-grhiit-white skew-forward">
              The product is identity transformation.
            </p>
            <p class="mt-4 font-body text-grhiit-white/60 text-lg">
              Become the kind of person who no longer negotiates with discomfort.
            </p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid grid-cols-2 gap-3 md:gap-4">
            <div v-for="principle in principles" :key="principle.title" class="bg-grhiit-black/55 border border-grhiit-white/10 p-5 md:p-6 min-h-40">
              <div class="font-mono text-sm text-grhiit-red uppercase tracking-widest">{{ principle.number }}</div>
              <h3 class="mt-6 font-display text-2xl uppercase tracking-wide text-grhiit-white leading-none">{{ principle.title }}</h3>
              <p class="mt-4 font-body text-sm text-grhiit-white/55 leading-relaxed">{{ principle.description }}</p>
            </div>
          </div>
          <p class="mt-6 font-body text-sm text-grhiit-white/35">
            Discomfort is the point. Injury is not. The practice is hard by design, not reckless by default.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  { number: '01', title: 'Discomfort', description: 'Choose the hard thing before life chooses one for you.' },
  { number: '02', title: 'Incomplete recovery', description: 'Move before you feel ready. That is the lesson.' },
  { number: '03', title: 'Continuity', description: 'Stop restarting your identity every Monday.' },
  { number: '04', title: 'Exposure', description: 'Hard is not conquered. It is expanded.' },
]
</script>
