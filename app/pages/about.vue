<template>
  <div class="bg-obsidian text-bone">
    <section class="relative overflow-hidden min-h-[70svh] flex items-end pt-24">
      <img src="/images/sections/canyon-begin.webp" alt="" class="absolute inset-0 w-full h-full object-cover object-[70%_85%]" />
      <div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/10"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">About</p>
        <h1 class="mt-4 font-display uppercase leading-brutal tracking-wide text-6xl md:text-8xl">A practice.<br />Not a program.</h1>
      </div>
    </section>

    <section class="py-24 md:py-32 border-t border-iron">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="grid md:grid-cols-3 gap-px bg-iron">
          <div v-for="b in blocks" :key="b.t" class="bg-obsidian p-8">
            <h2 class="font-display uppercase tracking-wide text-3xl">{{ b.t }}</h2>
            <p class="mt-4 font-body text-bone/65 leading-relaxed">{{ b.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 bg-graphite">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <h2 class="font-display uppercase leading-brutal tracking-wide text-5xl md:text-7xl">The rules.</h2>
        <ul class="mt-12 grid sm:grid-cols-2 gap-px bg-iron">
          <li v-for="r in rules" :key="r.t" class="bg-graphite p-8">
            <p class="font-display uppercase tracking-wide text-2xl">{{ r.t }}</p>
            <p class="mt-2 font-body text-bone/60">{{ r.d }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-24 md:py-32 text-center border-t border-iron">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">Rooted in Stoicism.</p>
      <p class="mt-6 font-display uppercase tracking-wide text-4xl md:text-6xl leading-tight">The obstacle<br /><span class="text-bone/50">is the path.</span></p>
      <NuxtLink to="/#begin" class="inline-block mt-12 px-10 py-5 bg-ember text-bone font-display uppercase tracking-widest text-lg hover:bg-ember-dark transition-colors">Begin</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const blocks = [
  { t: 'The method', d: 'Grit. High-intensity intervals. Bodyweight. Fifteen years of practice, made exact.' },
  { t: 'The structure', d: 'Fixed work. Fixed rest. The timer sets the load. You set the count.' },
  { t: 'The mind', d: 'It all starts with mindset. The structure decides. Not your mood.' },
]
const rules = [
  { t: 'Effort over time.', d: 'Short. Total.' },
  { t: 'Discipline over mood.', d: 'Show up unwilling.' },
  { t: 'Return over perfect.', d: 'Come back. Again.' },
  { t: 'Form over ego.', d: 'Form first. Then load.' },
]
useSeoMeta({
  title: 'About',
  description: 'A practice of voluntary discomfort. Bodyweight. Fixed work. Fixed rest. You set the count.',
})
</script>
