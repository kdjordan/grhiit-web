<template>
  <div
    ref="bentoCard"
    class="principle-bento group relative overflow-hidden rounded-lg p-8 h-64 flex flex-col justify-end cursor-pointer transition-all duration-500 hover:scale-105"
    :class="gradientClass"
  >
    <!-- Animated gradient overlay -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="hoverGradientClass"></div>

    <!-- Noise texture overlay for depth -->
    <div class="absolute inset-0 opacity-10 mix-blend-overlay bg-noise"></div>

    <!-- Content -->
    <div class="relative z-10">
      <h3 class="text-4xl md:text-5xl font-primary font-bold text-white mb-3 uppercase tracking-tight">
        {{ title }}
      </h3>
      <p class="text-white/80 text-lg font-secondary">
        {{ subtitle }}
      </p>
    </div>

    <!-- Decorative corner accent -->
    <div class="absolute top-0 right-0 w-32 h-32 opacity-20">
      <div class="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-lg rotate-12"></div>
      <div class="absolute top-8 right-8 w-12 h-12 border-2 border-white/20 rounded-lg -rotate-6"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  variant: 'intensity' | 'discipline' | 'consistency' | 'grit'
}

const props = defineProps<Props>()
const bentoCard = ref<HTMLElement | null>(null)

const gradients = {
  intensity: {
    base: 'bg-gradient-to-br from-slate-800 via-gray-900 to-black',
    hover: 'bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900'
  },
  discipline: {
    base: 'bg-gradient-to-br from-slate-800 via-gray-900 to-black',
    hover: 'bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900'
  },
  consistency: {
    base: 'bg-gradient-to-br from-slate-800 via-gray-900 to-black',
    hover: 'bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900'
  },
  grit: {
    base: 'bg-gradient-to-br from-slate-800 via-gray-900 to-black',
    hover: 'bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900'
  }
}

const gradientClass = computed(() => gradients[props.variant].base)
const hoverGradientClass = computed(() => gradients[props.variant].hover)
</script>

<style scoped>
.principle-bento {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

.principle-bento:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}

/* Noise texture for added depth */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Animation-ready */
.principle-bento {
  will-change: transform;
}
</style>
