<template>
  <section class="bg-obsidian py-24 md:py-32 border-t border-iron">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">iPhone app</p>
      <h2 class="mt-4 font-display uppercase text-bone leading-brutal tracking-wide text-5xl md:text-7xl">This is the app.</h2>

      <ul class="screens mt-14 md:mt-20">
        <li v-for="s in screens" :key="s.name" class="screen">
          <div class="phone">
            <div class="phone-screen">
              <img :src="`/images/screens/${s.name}.webp`" :alt="`${s.title} screen`" loading="lazy" />
              <span class="island" aria-hidden="true"></span>
            </div>
          </div>
          <p class="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/40">{{ s.num }} · {{ s.title }}</p>
          <p class="mt-2 font-body text-bone/80">{{ s.caption }}</p>
        </li>
      </ul>
      <p class="mt-10 font-mono text-[10px] uppercase tracking-widest text-bone/25">Preview screens. Final app may differ.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const screens = [
  { name: 'path', num: '01', title: 'Path', caption: 'One path. Forward only.' },
  { name: 'prepare', num: '02', title: 'Prepare', caption: "Know what's coming." },
  { name: 'execute', num: '03', title: 'Execute', caption: 'Endure.' },
  { name: 'reflect', num: '04', title: 'Reflect', caption: 'Record. Move on.' },
]
</script>

<style scoped>
.screens { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem 1.25rem; }
@media (min-width: 1024px) { .screens { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; } }
.phone {
  aspect-ratio: 9 / 19.5; padding: 3.5%; border-radius: 14% / 6.5%;
  background: linear-gradient(145deg, #2a2a2a, #121212); border: 1px solid #333;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,.9), inset 0 0 0 1px rgba(255,255,255,.04);
  max-width: 300px; margin-inline: auto;
}
.phone-screen { position: relative; width: 100%; height: 100%; border-radius: 11% / 5.2%; overflow: hidden; background: #0B0B0B; }
.phone-screen img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.island { position: absolute; top: 1.6%; left: 50%; transform: translateX(-50%); width: 30%; height: 3.4%; background: #000; border-radius: 999px; }
.screen p { text-align: center; }
</style>
