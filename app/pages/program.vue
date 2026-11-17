<template>
  <div class="bg-obsidian text-bone">
    <!-- Hero -->
    <section class="relative overflow-hidden min-h-[80svh] flex items-end pt-24">
      <img src="/images/sections/stone-steps.webp" alt="" class="absolute inset-0 w-full h-full object-cover object-[70%_50%]" />
      <div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/10"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">The Cycle</p>
        <h1 class="mt-4 font-display uppercase leading-brutal tracking-wide text-6xl md:text-8xl">You<br />versus you.</h1>
        <p class="mt-8 font-body text-lg md:text-xl text-bone/80 max-w-md">6 weeks. 18 Sessions. Bodyweight. A number to hold.</p>
      </div>
    </section>

    <!-- Not a video -->
    <section class="py-24 md:py-32 border-t border-iron">
      <div class="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        <div class="font-display uppercase tracking-wide text-3xl md:text-5xl leading-tight">
          <p class="text-bone/40">60 seconds of jumping jacks.</p>
          <p class="text-bone/40">30 seconds off.</p>
          <p class="mt-6 text-bone">That is a video.</p>
        </div>
        <div class="font-body text-lg md:text-xl text-bone/75 space-y-2 md:pt-3">
          <p>Six seconds. Ten reps.</p>
          <p>You count. You hold it.</p>
          <p>Next week, fifteen.</p>
          <p class="text-bone">Then it changes.</p>
        </div>
      </div>
    </section>

    <!-- The math -->
    <section class="py-24 md:py-32 bg-graphite">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <h2 class="font-display uppercase leading-brutal tracking-wide text-5xl md:text-7xl">The math.</h2>
        <div class="mt-12 grid sm:grid-cols-3 gap-px bg-iron">
          <div v-for="l in levers" :key="l" class="bg-graphite p-8">
            <p class="font-display uppercase tracking-wide text-2xl md:text-3xl">{{ l }}</p>
          </div>
        </div>
        <ul class="mt-12 flex flex-wrap gap-3 font-mono text-sm uppercase tracking-widest">
          <li v-for="r in ratios" :key="r" class="px-4 py-2 border border-iron-ash/40 text-bone/70">{{ r }}</li>
        </ul>
        <p class="mt-8 font-body text-lg text-bone/60">6 on, 3 off. Two weeks later, 6 on, 2 off. <span class="text-bone">It adds up.</span></p>
      </div>
    </section>

    <!-- The summit -->
    <section class="relative overflow-hidden py-28 md:py-40">
      <img src="/images/sections/ridge-path.webp" alt="" class="absolute inset-0 w-full h-full object-cover object-[60%_50%]" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/10"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <h2 class="font-display uppercase leading-brutal tracking-wide text-5xl md:text-7xl">Past<br />the summit.</h2>
        <div class="mt-10 font-body text-lg md:text-xl text-bone/75 space-y-2 max-w-md">
          <p>The climb builds. It peaks. It comes back down.</p>
          <p>The easy move from the start returns.</p>
          <p class="text-bone">Same precision. Now.</p>
        </div>
        <p class="mt-12 font-display uppercase tracking-wide text-3xl md:text-5xl leading-tight">
          Gassed.<br />Called up.<br /><span class="text-ember">Same rep.</span>
        </p>
      </div>
    </section>

    <!-- Movements -->
    <section class="py-24 md:py-32 border-t border-iron">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <h2 class="font-display uppercase leading-brutal tracking-wide text-5xl md:text-7xl">Your body<br />is the load.</h2>
        <p class="mt-8 font-body text-lg text-bone/70">Fail safe. No spotter. The load you carry for life.</p>
        <div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-iron">
          <p v-for="m in movements" :key="m" class="bg-obsidian p-6 md:p-8 font-display uppercase tracking-wide text-xl md:text-2xl">{{ m }}</p>
        </div>
      </div>
    </section>

    <!-- You vs you -->
    <section class="py-24 md:py-32 bg-graphite">
      <div class="max-w-6xl mx-auto px-6 md:px-12 font-display uppercase tracking-wide leading-tight text-3xl md:text-5xl">
        <p class="text-bone/40">Who were you yesterday.</p>
        <p class="text-bone/70 md:pl-24">Who are you today.</p>
        <p class="text-bone md:pl-48">What are you becoming.</p>
        <p class="mt-12 font-body normal-case tracking-normal text-lg md:text-xl text-bone/60">Each Session ends in a review. Yesterday is the number to beat.</p>
        <p class="mt-10 font-display uppercase tracking-wide text-2xl md:text-4xl leading-tight">Virtue is the good.<br /><span class="text-bone/45">Fitness is the side effect.</span></p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 md:py-32 text-center border-t border-iron">
      <h2 class="font-display uppercase leading-brutal tracking-wide text-6xl md:text-8xl">Begin.</h2>
      <p class="mt-6 font-body text-lg text-bone/70">One Cycle. One price. Once.<br />Paid once. Nothing to cancel.</p>
      <NuxtLink to="/#begin" class="inline-block mt-10 px-10 py-5 bg-ember text-bone font-display uppercase tracking-widest text-lg hover:bg-ember-dark transition-colors">Begin Cycle I</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const levers = ['Longer work.', 'Harder movement.', 'Less rest.']
const ratios = ['6 / 3', '6 / 2', '20 / 10', '30 / 15', '60 / 30', '60 / 60']
const movements = ['Burpees', 'Squat thrusts', 'Jump squats', 'Lunges', 'Pushups', '8-count bodybuilders', 'Squats', 'Planks']
useSeoMeta({
  title: 'The Cycle',
  description: 'You versus you. 6 weeks. 18 Sessions. Bodyweight. A number to hold.',
  ogTitle: 'GRHIIT — The Cycle',
  ogDescription: 'Longer work. Harder movement. Less rest. You count. You hold it.',
})
</script>
