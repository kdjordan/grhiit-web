<template>
  <section id="begin" class="relative min-h-[90svh] flex items-center overflow-hidden bg-obsidian">
    <img src="/images/sections/canyon-begin.webp" alt="" class="absolute inset-0 w-full h-full object-cover object-[70%_85%]" loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian/40"></div>

    <div class="relative z-10 w-full max-w-3xl mx-auto px-6 text-center py-28">
      <p class="font-mono text-xs uppercase tracking-widest text-ember">Cycle I</p>
      <h2 class="mt-4 font-display uppercase text-bone leading-brutal tracking-wide text-7xl md:text-9xl">Begin.</h2>

      <div class="mt-10 font-body text-lg text-bone/80 space-y-1">
        <p>One Cycle. One price. Once.</p>
        <p>No subscription.</p>
        <p class="text-bone/60">The first 1,000 hear first.</p>
      </div>

      <button @click="$emit('openWaitlist')" class="mt-12 px-12 py-5 bg-ember text-bone font-display uppercase tracking-widest text-lg md:text-xl hover:bg-ember-dark transition-colors">
        Join the First 1,000
      </button>

      <p class="mt-12 font-body text-sm text-bone/40">Six weeks from now arrives either way.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'openWaitlist'): void }>()
</script>
