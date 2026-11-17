<template>
  <section class="py-28 md:py-40 bg-obsidian border-t border-iron">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">The equation</p>
      <h2 class="mt-4 font-display uppercase leading-brutal tracking-wide text-5xl md:text-8xl">The math.</h2>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/75 max-w-xl">
        Intensity rises three ways. Longer work. Harder movement. Less rest.
      </p>

      <div class="mt-10 grid sm:grid-cols-3 gap-px bg-iron">
        <div v-for="l in levers" :key="l" class="bg-obsidian p-6 md:p-8">
          <p class="font-display uppercase tracking-wide text-2xl md:text-3xl">{{ l }}</p>
        </div>
      </div>

      <p class="mt-16 font-mono text-xs uppercase tracking-[0.25em] text-bone/40">Example progression · intervals are still being written</p>

      <ol class="mt-6 space-y-5">
        <li v-for="w in weeks" :key="w.week" class="row">
          <div class="label">
            <span class="font-mono text-xs uppercase tracking-widest text-bone/40">Week {{ w.week }}</span>
            <span class="font-body text-sm text-bone/80">{{ w.note }}</span>
          </div>
          <div class="bars" aria-hidden="true">
            <span class="bar work" :style="{ width: w.workPct }">{{ w.work }}</span>
            <span class="bar rest" :style="{ width: w.restPct }">{{ w.rest }}</span>
          </div>
        </li>
      </ol>
      <p class="mt-8 font-body text-bone/55">6 on, 3 off becomes 6 on, 2 off. <span class="text-bone">It adds up.</span></p>
      <p class="mt-3 font-mono text-[11px] uppercase tracking-widest text-bone/30">Also used: 20/10 · 30/15 · 60/30 · 60/60</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const levers = ['Longer work.', 'Harder movement.', 'Less rest.']
// Example only — real Cycle I intervals are TBD.
const weeks = [
  { week: '1', work: '6 on', rest: '3 off', workPct: '32%', restPct: '16%', note: '10 reps · squat thrusts' },
  { week: '2', work: '6 on', rest: '3 off', workPct: '32%', restPct: '16%', note: '12 reps · squat thrusts' },
  { week: '3', work: '6 on', rest: '2 off', workPct: '32%', restPct: '11%', note: '12 reps · squat thrusts' },
  { week: '4', work: '8 on', rest: '2 off', workPct: '42%', restPct: '11%', note: '12 reps · jump squats' },
  { week: '5', work: '8 on', rest: '2 off', workPct: '42%', restPct: '11%', note: '15 reps · jump squats' },
  { week: '6', work: '10 on', rest: '2 off', workPct: '52%', restPct: '11%', note: '15 reps · jump squats' },
]
</script>

<style scoped>
.row { display: grid; gap: 0.5rem; }
@media (min-width: 768px) {
  .row { grid-template-columns: 14rem 1fr; align-items: center; gap: 1.5rem; }
}
.label { display: flex; flex-direction: column; gap: 0.15rem; }
.bars { display: flex; align-items: stretch; gap: 3px; min-height: 2.5rem; }
.bar { display: flex; align-items: center; padding: 0 0.7rem; font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
.work { background: #B33A1B; color: #F3F1EA; }
.rest { background: #2a2a2a; color: rgba(243,241,234,.55); }
</style>
