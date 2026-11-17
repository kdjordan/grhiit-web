<template>
  <section class="relative overflow-hidden py-28 md:py-40">
    <img src="/images/sections/ridge-path.webp" alt="" class="absolute inset-0 w-full h-full object-cover object-[60%_50%]" loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/25"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-ember">A Session</p>
      <h2 class="mt-4 font-display uppercase leading-brutal tracking-wide text-5xl md:text-8xl">
        Past the<br />summit.
      </h2>

      <figure class="diagram mt-14 md:mt-20" aria-label="Session shape: build, summit, descend">
        <svg viewBox="0 0 640 200" class="w-full max-w-3xl" role="img">
          <path d="M8 180 C 80 176, 150 150, 220 110 C 280 76, 330 28, 400 22 C 455 18, 500 70, 560 150 L 632 180" fill="none" stroke="#B33A1B" stroke-width="3" />
          <circle cx="150" cy="140" r="5" fill="#F3F1EA" />
          <circle cx="400" cy="22" r="6" fill="#B33A1B" />
          <circle cx="560" cy="150" r="5" fill="#F3F1EA" />
        </svg>
        <figcaption class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-3xl font-display uppercase tracking-wide">
          <div>
            <p class="text-bone text-xl md:text-2xl">Build</p>
            <p class="mt-2 font-body normal-case tracking-normal text-sm text-bone/55">The climb starts easy.</p>
          </div>
          <div class="sm:text-center">
            <p class="text-ember text-xl md:text-2xl">Summit</p>
            <p class="mt-2 font-body normal-case tracking-normal text-sm text-bone/55">The hardest block.</p>
          </div>
          <div class="sm:text-right">
            <p class="text-bone text-xl md:text-2xl">Descend</p>
            <p class="mt-2 font-body normal-case tracking-normal text-sm text-bone/55">The first move returns.</p>
          </div>
        </figcaption>
      </figure>

      <div class="mt-16 max-w-xl font-body text-lg md:text-xl text-bone/80 space-y-2">
        <p>The easy move from the start comes back.</p>
        <p class="text-bone">Same precision. Now.</p>
      </div>
      <p class="mt-12 font-display uppercase tracking-wide text-3xl md:text-5xl leading-tight">
        Gassed.<br />Called up.<br /><span class="text-ember">Same rep.</span>
      </p>
      <blockquote class="mt-16 md:mt-20 max-w-xl">
        <p class="font-body text-lg md:text-xl text-bone/80 leading-relaxed">
          That which is a hindrance is made a furtherance to an act;<br />and that which is an obstacle on the road helps us on&nbsp;this&nbsp;road.
        </p>
        <footer class="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/40">Marcus Aurelius, Meditations 5.20</footer>
      </blockquote>
    </div>
  </section>
</template>
