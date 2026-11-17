<template>
  <section class="relative bg-obsidian overflow-hidden py-28 md:py-40 border-t border-iron">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">The creed</p>
      <h2 class="mt-4 font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-8xl">
        The path<br />of most<br />resistance.
      </h2>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/75 max-w-lg">
        We choose the hardest thing we can.
      </p>

      <ul class="no-list mt-16 md:mt-24 font-display uppercase tracking-wide leading-none">
        <li v-for="(line, i) in refusals" :key="line" :style="{ marginLeft: offset(i) }">{{ line }}</li>
      </ul>

      <p class="mt-20 md:mt-28 font-display uppercase tracking-wide text-5xl md:text-7xl text-bone leading-none">
        Do the work.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const refusals = ['No machines.', 'No subscription.', 'No audience.', 'No AI coach.', 'No mirror.']
const offset = (i: number) => `${Math.min(i, 4) * 0.6}em`
</script>

<style scoped>
.no-list { font-size: clamp(1.75rem, 4.5vw, 3.75rem); }
.no-list li { color: rgba(243, 241, 234, 0.45); padding: 0.18em 0; }
.no-list li:last-child { color: rgba(243, 241, 234, 0.7); }
@media (max-width: 639px) {
  .no-list li { margin-left: 0 !important; }
}
</style>
