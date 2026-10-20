<template>
  <section class="relative bg-iron py-28 md:py-40">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <h2 class="font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-7xl">
        6 weeks.<br />One path.
      </h2>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/70">The blocks grow. Rest shrinks. You stay.</p>

      <ol class="mt-16 grid md:grid-cols-3 gap-px bg-iron-ash/30">
        <li v-for="p in phases" :key="p.num" class="bg-iron p-8">
          <div class="flex items-baseline justify-between">
            <span class="font-display text-4xl text-bone">{{ p.num }}</span>
            <span class="font-mono text-xs uppercase tracking-widest text-bone/40">{{ p.ratio }}</span>
          </div>
          <p class="mt-4 font-mono text-xs uppercase tracking-widest text-ember">Weeks {{ p.weeks }} · Sessions {{ p.sessions }}</p>
          <p class="mt-4 font-body text-lg text-bone/80">{{ p.line }}</p>
        </li>
      </ol>

      <p class="mt-16 font-body text-lg text-bone/60">It does not get easier. <span class="text-bone">The exits close.</span></p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Ratios per phase are TBD until the 6-week Cycle content is final.
const phases = [
  { num: 'I', weeks: '1–2', sessions: '1–6', ratio: '[TBD]', line: 'Learn to show up.' },
  { num: 'II', weeks: '3–4', sessions: '7–12', ratio: '[TBD]', line: 'The body obeys.' },
  { num: 'III', weeks: '5–6', sessions: '13–18', ratio: '[TBD]', line: 'Hold when you want to leave.' },
]
</script>
