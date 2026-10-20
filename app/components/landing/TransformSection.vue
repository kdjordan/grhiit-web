<template>
  <section class="relative bg-obsidian py-28 md:py-40">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <h2 class="font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-7xl">
        Identity is<br />the outcome.
      </h2>

      <div class="mt-16 grid md:grid-cols-3 gap-px bg-iron">
        <div v-for="s in stages" :key="s.week" class="bg-obsidian p-8">
          <p class="font-mono text-xs uppercase tracking-widest text-bone/40">{{ s.week }}</p>
          <h3 class="mt-2 font-display uppercase tracking-wide text-3xl text-bone">{{ s.name }}</h3>
          <p class="mt-4 font-body text-bone/60 leading-relaxed">{{ s.body }}</p>
        </div>
      </div>

      <div class="mt-16 font-body text-lg text-bone/70 space-y-1">
        <p>The hard talk. <span class="text-bone">Not that hard.</span></p>
        <p>The early alarm. <span class="text-bone">Not that hard.</span></p>
      </div>

      <div class="mt-16 h-px w-16 bg-ember"></div>
      <div class="mt-8 font-display uppercase tracking-wide text-3xl md:text-4xl leading-tight">
        <p class="text-bone/50">Fitness is the side effect.</p>
        <p class="text-bone">Identity is the outcome.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stages = [
  { week: 'Week 1', name: 'Resist', body: 'The body wants out. The mind makes excuses. You continue.' },
  { week: 'Week 3', name: 'Quiet', body: 'The bargaining stops. Timer starts. You move.' },
  { week: 'Week 6', name: 'Known', body: 'You know what hard is now.' },
]
</script>
