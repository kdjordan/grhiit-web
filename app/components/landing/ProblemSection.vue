<template>
  <section class="problem relative overflow-hidden bg-obsidian">
    <!-- Desktop: image panel on the right; mobile: full-bleed behind, heavily shaded -->
    <div class="img-wrap">
      <img src="/images/sections/hands-ground.webp" alt="Hands pressed on dark ground." loading="lazy" />
    </div>
    <div class="shade"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
      <h2 class="font-display uppercase text-bone leading-brutal tracking-wide title">
        <span class="block">Comfort</span>
        <span class="block step-title">is lies.</span>
      </h2>

      <div class="contrast mt-14 font-display uppercase tracking-wide leading-tight">
        <p class="text-bone/45">A workout checks a box.</p>
        <p class="text-bone step-contrast">Training has a target.</p>
      </div>

      <div class="ladder mt-16 font-body text-lg md:text-xl">
        <p class="text-bone/70">You think you know hard.</p>
        <p class="text-bone s1">You don't.</p>
        <p class="text-bone/60 s2">So you stop early.</p>
        <p class="text-bone/60 s3">You bargain.</p>
        <p class="text-bone/60 s2">You start again on Monday.</p>
      </div>

      <div class="reset mt-20 md:mt-24">
        <div class="h-px w-16 bg-ember"></div>
        <p class="mt-6 font-display uppercase tracking-wide text-bone text-3xl md:text-5xl leading-none">Reset the gauge.</p>
        <p class="mt-3 font-body text-bone/50 text-lg">The rest follows.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title { font-size: clamp(3.25rem, 9vw, 8.5rem); }
.step-title { padding-left: 1.25em; }
.contrast { font-size: clamp(1.5rem, 3vw, 2.5rem); }
.step-contrast { padding-left: 2.5rem; }
.ladder p { line-height: 1.9; }
.ladder .s1 { padding-left: 1.5rem; }
.ladder .s2 { padding-left: 3rem; }
.ladder .s3 { padding-left: 4.5rem; }
.reset { padding-left: 1.5rem; }

/* Mobile: full-bleed image, strong shade so copy reads; hands kept to the lower right */
.img-wrap { position: absolute; inset: 0; }
.img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 70%; opacity: .55; }
.shade { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,11,11,.85), rgba(11,11,11,.6) 60%, rgba(11,11,11,.4)); }

@media (min-width: 1024px) {
  /* Image becomes a right-hand panel; title runs over its left edge for depth */
  .img-wrap { left: auto; width: 46%; }
  .img-wrap img { opacity: 1; object-position: 50% 55%; }
  .shade { left: auto; width: 46%; background: linear-gradient(to right, #0B0B0B 0%, rgba(11,11,11,.55) 22%, rgba(11,11,11,0) 45%); }
  .step-title { padding-left: 2.25em; }
  .step-contrast { padding-left: 7rem; }
  .ladder { margin-left: 2rem; max-width: 30rem; }
  .ladder .s1 { padding-left: 3rem; }
  .ladder .s2 { padding-left: 6rem; }
  .ladder .s3 { padding-left: 9rem; }
  .reset { padding-left: 0; margin-left: 32%; }
}
@media (max-width: 400px) {
  .ladder .s2 { padding-left: 2.25rem; }
  .ladder .s3 { padding-left: 3rem; }
}
</style>
