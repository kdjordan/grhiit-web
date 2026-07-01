<template>
  <section id="method" class="py-24 md:py-40 bg-grhiit-black relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.025] pointer-events-none" style="background-image: linear-gradient(rgba(250,250,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.12) 1px, transparent 1px); background-size: 70px 70px;"></div>
    <div class="absolute -right-20 top-20 w-96 h-96 bg-grhiit-red/10 blur-[130px] pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div class="lg:col-span-5 lg:sticky lg:top-28">
          <div class="font-mono text-xs uppercase tracking-[0.35em] text-grhiit-red mb-5">The method</div>
          <h2 class="font-display text-4xl md:text-6xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
            The timer does not negotiate.
          </h2>
          <p class="mt-8 text-xl font-body text-grhiit-white/65 leading-relaxed">
            8 weeks. 24 sessions. Three sessions per week. A small vocabulary of bodyweight movements, repeated under changing pressure until your old gauge stops working.
          </p>
        </div>

        <div class="lg:col-span-7">
          <div class="grid md:grid-cols-2 gap-5">
            <div v-for="feature in features" :key="feature.title" class="group relative bg-grhiit-gray-900/80 p-6 md:p-8 border border-grhiit-white/10 hover:border-grhiit-red/50 transition-colors duration-300">
              <div class="font-mono text-xs uppercase tracking-[0.28em] text-grhiit-red">{{ feature.kicker }}</div>
              <h3 class="mt-5 font-display text-3xl uppercase tracking-wide text-grhiit-white leading-none">{{ feature.title }}</h3>
              <p class="mt-5 font-body text-grhiit-white/60 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>

          <div class="mt-8 border border-grhiit-red/30 bg-grhiit-red/5 p-6 md:p-8">
            <div class="font-display text-3xl md:text-4xl uppercase text-grhiit-white leading-none skew-forward">
              You cannot buy Cycle 2.
              <span class="block mt-2 text-grhiit-red">You earn it.</span>
            </div>
            <p class="mt-5 font-body text-grhiit-white/60 text-lg leading-relaxed">
              Subsequent cycles unlock only after the first 8-week cycle is completed. GRHIIT is not an infinite library you browse. It is a path you finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    kicker: 'Bodyweight only',
    title: 'No equipment. No hiding.',
    description: 'Pushups, burpees, squat thrusts, bodyweight squats, jumps, and other simple movements. The difficulty comes from execution, not gear.',
  },
  {
    kicker: 'Incomplete recovery',
    title: 'Move before ready.',
    description: 'Rest is intentionally limited. You learn to produce effort while still carrying the last interval.',
  },
  {
    kicker: 'Forward only',
    title: 'No repeated sessions.',
    description: 'Each session is unique. Once it is done, it is done. The cycle moves forward, or you restart.',
  },
  {
    kicker: 'One-time unlock',
    title: '$24.99 for Cycle 1.',
    description: 'The first two sessions are free. Unlock the full 8-week Cycle 1 with a one-time purchase. No subscription.',
  },
]
</script>
