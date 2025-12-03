<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 md:py-32 bg-grhiit-black-warm relative overflow-hidden">
      <!-- Subtle noise texture -->
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>

      <!-- Red accent bar -->
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-2 h-32 md:h-48 bg-grhiit-red"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="max-w-4xl">
          <h1 class="font-display font-extrabold italic text-5xl md:text-6xl lg:text-7xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal">
            About <span class="text-outline-red text-outline-thick">GRHIIT</span>
          </h1>
          <p class="mt-6 text-xl md:text-2xl font-body text-grhiit-white/70 max-w-2xl leading-relaxed">
            A system for building mental discipline through physical intensity — a practice, not a workout.
          </p>
        </div>
      </div>
    </section>

    <!-- The Method Section -->
    <section class="py-20 md:py-28 bg-grhiit-black">
      <div class="container mx-auto px-4 md:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Method intro -->
          <div class="border-l-[3px] border-grhiit-red pl-6 md:pl-8 mb-16">
            <h2 class="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-grhiit-white mb-4">
              The Method
            </h2>
            <p class="text-lg md:text-xl font-body text-grhiit-white/70 leading-relaxed mb-4">
              GRHIIT (Grit High-Intensity Interval Training) is a science-based approach to bodyweight fitness that builds both physical capacity and mental resilience.
            </p>
            <p class="text-lg font-body text-grhiit-white/60 leading-relaxed">
              No equipment. No excuses. Just disciplined execution and progressive overload through time-based intervals.
            </p>
          </div>

          <!-- Two columns -->
          <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <!-- The Science -->
            <div class="bg-grhiit-gray-900 p-8 md:p-10 border-l-[3px] border-grhiit-red">
              <h3 class="font-display font-bold text-xl uppercase tracking-tight text-grhiit-white mb-4">
                The Science
              </h3>
              <p class="font-body text-grhiit-white/70 leading-relaxed mb-4">
                Built on proven HIIT protocols with structured work-to-rest ratios designed for maximum adaptation.
              </p>
              <div class="flex flex-wrap gap-3 mt-6">
                <span class="font-mono text-sm bg-grhiit-black px-3 py-1 text-grhiit-red">20:10</span>
                <span class="font-mono text-sm bg-grhiit-black px-3 py-1 text-grhiit-red">6:3</span>
                <span class="font-mono text-sm bg-grhiit-black px-3 py-1 text-grhiit-red">60:20</span>
              </div>
            </div>

            <!-- The Mindset -->
            <div class="bg-grhiit-gray-900 p-8 md:p-10 border-l-[3px] border-grhiit-red">
              <h3 class="font-display font-bold text-xl uppercase tracking-tight text-grhiit-white mb-4">
                The Mindset
              </h3>
              <p class="font-body text-grhiit-white/70 leading-relaxed mb-4">
                Discipline over motivation. Consistency over perfection. Building grit as much as building strength.
              </p>
              <p class="font-body text-grhiit-white/50 leading-relaxed">
                The intensity comes from the structure, not your mood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="py-20 md:py-28 bg-[#1F1C1A] relative overflow-hidden">
      <!-- Noise texture -->
      <div class="absolute inset-0 opacity-[0.015] pointer-events-none noise-overlay"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="max-w-5xl mx-auto">
          <h2 class="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight text-grhiit-white mb-12 text-center">
            Core <span class="text-grhiit-red">Principles</span>
          </h2>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="principle in principles" :key="principle.title" class="text-center">
              <div class="font-mono text-4xl md:text-5xl font-bold text-grhiit-red mb-4">
                {{ principle.number }}
              </div>
              <h3 class="font-display font-bold text-lg uppercase tracking-tight text-grhiit-white mb-2">
                {{ principle.title }}
              </h3>
              <p class="font-body text-sm text-grhiit-white/60">
                {{ principle.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-28 bg-grhiit-black relative">
      <!-- Red border top -->
      <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-grhiit-red/50 to-transparent"></div>

      <div class="container mx-auto px-4 md:px-8 text-center">
        <h2 class="font-display font-extrabold italic text-3xl md:text-4xl lg:text-5xl uppercase text-grhiit-white tracking-tight-brutal mb-6">
          All it takes is all you've got.
        </h2>
        <p class="font-body text-lg text-grhiit-white/60 mb-10 max-w-xl mx-auto">
          Ready to build discipline through movement?
        </p>
        <button
          @click="$emit('openWaitlist')"
          class="px-10 py-4 bg-grhiit-red text-grhiit-white font-display font-bold italic uppercase tracking-widest text-lg hover:bg-grhiit-red-dark transition-all duration-300 hover:shadow-glow-red hover:scale-[1.02]"
        >
          Join the Movement
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()

const principles = [
  {
    number: '01',
    title: 'Intensity',
    description: 'Intensity over duration. Short, focused bursts that demand everything.',
  },
  {
    number: '02',
    title: 'Discipline',
    description: 'Discipline over motivation. Show up when you don\'t feel like it.',
  },
  {
    number: '03',
    title: 'Consistency',
    description: 'Consistency over perfection. Progress compounds through repetition.',
  },
  {
    number: '04',
    title: 'Safety',
    description: 'Safety over ego. Form first, intensity follows.',
  },
]
</script>
