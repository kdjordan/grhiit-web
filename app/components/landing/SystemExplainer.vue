<template>
  <section id="what-is-grhiit" class="relative overflow-hidden bg-graphite py-28 md:py-40">
    <img src="/images/sections/ridge-path.webp" alt="" class="absolute inset-x-0 top-0 w-full h-[70%] object-cover object-[60%_45%] opacity-60" loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/80 to-graphite"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
      <h2 class="font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-7xl">
        Hard,<br />redefined.
      </h2>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/80">
        18 Sessions. 3 per week. Bodyweight. No negotiation.
      </p>

      <div class="mt-16 grid sm:grid-cols-2 gap-px bg-iron">
        <div v-for="(f, i) in features" :key="f.title" class="bg-graphite/95 p-8">
          <span class="font-mono text-xs text-ember">0{{ i + 1 }}</span>
          <h3 class="mt-3 font-display uppercase tracking-wide text-2xl text-bone">{{ f.title }}</h3>
          <p class="mt-3 font-body text-bone/60 leading-relaxed">{{ f.body }}</p>
        </div>
      </div>

      <NuxtLink to="/program" class="inline-block mt-12 font-display uppercase tracking-widest text-bone/70 hover:text-bone transition-colors">
        See the Cycle →
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { title: 'Bodyweight', body: 'Burpees. Squat thrusts. Jump squats. Bodybuilders. Your body is the load.' },
  { title: 'Tabata blocks', body: '20 on. 10 off. The blocks grow. Rest shrinks.' },
  { title: 'Around the blocks', body: 'Short, exact intervals. You leave with more than you thought.' },
  { title: 'Forward only', body: 'No Session repeats. Miss one, it is gone. The next awaits.' },
]
</script>
