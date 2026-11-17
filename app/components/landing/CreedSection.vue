<template>
  <section class="relative bg-obsidian overflow-hidden py-28 md:py-40 border-t border-iron">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div class="creed-grid">
        <div class="creed-intro">
          <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">The creed</p>
          <h2 class="mt-4 font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-8xl">
            The path<br />of most<br />resistance.
          </h2>
          <p class="mt-8 font-body text-lg md:text-xl text-bone/75 max-w-lg">
            We choose the hardest thing we can. On purpose.
          </p>
        </div>

        <figure class="creed-app">
          <div class="phone">
            <div class="phone-screen">
              <img src="/images/screens/execute.webp" alt="Execute screen: work interval in progress" width="1170" height="2532" />
              <span class="island" aria-hidden="true"></span>
            </div>
          </div>
          <figcaption class="mt-6 text-center">
            <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/40">03 · Execute</p>
            <p class="mt-2 font-body text-bone/80">Endure.</p>
            <p class="mt-4 font-mono text-[10px] uppercase tracking-widest text-bone/25">Preview screens. Final app may differ.</p>
          </figcaption>
        </figure>

        <div class="creed-rest">
          <ul class="no-list font-display uppercase tracking-wide leading-none">
            <li v-for="(line, i) in refusals" :key="line" :style="{ marginLeft: offset(i) }">{{ line }}</li>
          </ul>

          <blockquote class="mt-16 md:mt-24 max-w-xl">
            <p class="font-body text-lg md:text-xl text-bone/70 leading-relaxed">
              If you would not have a man flinch when the crisis comes, train him before it comes.
            </p>
            <footer class="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/35">Seneca, Moral Letters 18</footer>
          </blockquote>

          <p class="mt-20 md:mt-28 font-display uppercase tracking-wide text-5xl md:text-7xl text-bone leading-none">
            Do the work.
          </p>
          <p class="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-ember">Rooted in Stoicism.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const refusals = ['No machines.', 'No subscription.', 'No audience.', 'No AI coach.', 'No mirror.']
const offset = (i: number) => `${Math.min(i, 4) * 0.6}em`
</script>

<style scoped>
.creed-grid {
  display: grid;
  gap: 3rem 0;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-areas:
    "intro"
    "app"
    "rest";
}
.creed-intro { grid-area: intro; }
.creed-app { grid-area: app; justify-self: center; width: 100%; max-width: 20rem; }
.creed-rest { grid-area: rest; }
@media (min-width: 768px) {
  .creed-grid {
    grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 22rem);
    grid-template-areas:
      "intro app"
      "rest  app";
    column-gap: 3.5rem;
    row-gap: 4rem;
  }
  .creed-app {
    position: sticky;
    top: 7rem;
    padding-top: 0.25rem;
    align-self: start;
  }
}
.no-list { font-size: clamp(1.75rem, 4.5vw, 3.75rem); }
.no-list li { color: rgba(243, 241, 234, 0.45); padding: 0.18em 0; }
.no-list li:last-child { color: rgba(243, 241, 234, 0.7); }
@media (max-width: 639px) {
  .no-list li { margin-left: 0 !important; }
}
.phone {
  aspect-ratio: 9 / 19.5;
  padding: 3.5%;
  border-radius: 14% / 6.5%;
  background: linear-gradient(145deg, #2a2a2a, #121212);
  border: 1px solid #333;
  box-shadow:
    0 40px 80px -24px rgba(0,0,0,.95),
    0 0 0 1px rgba(179,58,27,.18),
    inset 0 0 0 1px rgba(255,255,255,.04);
  max-width: 300px;
  margin-inline: auto;
}
.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 11% / 5.2%;
  overflow: hidden;
  background: #0B0B0B;
}
.phone-screen img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.island {
  position: absolute;
  top: 1.6%;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 3.4%;
  background: #000;
  border-radius: 999px;
}
</style>
