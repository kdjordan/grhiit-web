<template>
  <section id="what-is-grhiit" class="relative overflow-hidden bg-graphite py-28 md:py-40">
    <div class="ridge-img" role="presentation"></div>
    <div class="ridge-shade"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
      <h2 class="font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-7xl">
        Hard,<br />redefined.
      </h2>
      <p class="mt-8 font-body text-lg md:text-xl text-bone/80">
        Not more weight. Less rest.
      </p>

      <div class="ridge-spacer" aria-hidden="true"></div>
      <div class="grid sm:grid-cols-2 gap-px bg-iron">
        <div v-for="(f, i) in features" :key="f.title" class="bg-graphite/95 p-8">
          <span class="font-mono text-xs text-ember">0{{ i + 1 }}</span>
          <h3 class="mt-3 font-display uppercase tracking-wide text-2xl text-bone">{{ f.title }}</h3>
          <p class="mt-3 font-body text-bone/60 leading-relaxed">{{ f.body }}</p>
        </div>
      </div>

      <p class="mt-14 font-display uppercase tracking-wide text-2xl md:text-3xl leading-tight"><span class="text-bone">Every rep is judged. By you.</span><br /><span class="text-bone/45">Not the mirror.</span></p>

      <NuxtLink to="/program" class="inline-block mt-12 font-display uppercase tracking-widest text-bone/70 hover:text-bone transition-colors">
        See the Cycle →
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { title: 'Press play', body: 'It calls work. It calls rest. You go.' },
  { title: 'Less rest', body: 'Overload is not only weight. Rest shrinks, Session by Session.' },
  { title: 'The summit', body: 'Build. Summit: 20 on, 10 off. Descend. The reps after you want to quit are the point.' },
  { title: 'Again', body: 'One heavy lift proves little. Twenty squats in twenty seconds. Again. And again.' },
]
</script>

<style scoped>
/* Stone steps (focal right half) stay visible: image is a top band at its natural ratio, faded into Graphite; cards start below the trail's climb */
.ridge-img { background: url(/images/sections/stone-steps.webp) center / cover no-repeat; position: absolute; top: 0; left: 0; width: 100%; height: 72svh; background-position: 80% 50%;
  -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); }
.ridge-shade { position: absolute; inset: 0 0 auto 0; height: 72svh; background: linear-gradient(to bottom, rgba(20,20,20,.6), rgba(20,20,20,.1) 45%, transparent); }
.ridge-spacer { height: 30svh; }
@media (min-width: 768px) {
  .ridge-img { height: auto; aspect-ratio: 16 / 9; max-height: 100%; background-position: 50% 50%; }
  .ridge-shade { height: auto; aspect-ratio: 16 / 9; background: linear-gradient(to right, rgba(20,20,20,.7), rgba(20,20,20,.15) 45%, transparent 70%); }
  .ridge-spacer { height: clamp(6rem, 18vw, 22rem); }
}
</style>
