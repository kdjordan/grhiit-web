<template>
  <section class="problem relative overflow-hidden bg-obsidian">
    <!-- Desktop: lit-trail image as a right panel; mobile: image band on top, text below -->
    <div class="img-wrap">
      <img src="/images/sections/ridge-path.webp" alt="A lit trail climbing a dark peak." loading="lazy" />
    </div>
    <div class="shade"></div>

    <div class="copy relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-28 md:pb-40">
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

/* Mobile: image is a visible band at the top; copy starts below it */
.img-wrap { position: relative; width: 100%; height: 56svh; }
.img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 50%; }
.shade { position: absolute; left: 0; right: 0; top: 0; height: 56svh; background: linear-gradient(to bottom, transparent 55%, #0B0B0B 100%); }
.copy { padding-top: 2rem; }

@media (min-width: 900px) {
  /* Right-hand panel, full section height; only its left edge fades under the copy */
  .img-wrap { position: absolute; top: 0; bottom: 0; right: 0; width: 55%; height: auto; }
  .img-wrap img { object-position: 58% 50%; }
  .shade { top: 0; bottom: 0; left: auto; right: 0; width: 55%; height: auto; background: linear-gradient(to right, #0B0B0B 0%, rgba(11,11,11,.4) 18%, rgba(11,11,11,0) 35%); }
  .copy { padding-top: 10rem; }
  .step-title { padding-left: 2.25em; }
  .step-contrast { padding-left: 7rem; }
  .ladder { margin-left: 2rem; max-width: 30rem; }
  .ladder .s1 { padding-left: 3rem; }
  .ladder .s2 { padding-left: 6rem; }
  .ladder .s3 { padding-left: 9rem; }
  .reset { padding-left: 0; margin-left: 24%; }
}
@media (max-width: 400px) {
  .ladder .s2 { padding-left: 2.25rem; }
  .ladder .s3 { padding-left: 3rem; }
}
</style>
