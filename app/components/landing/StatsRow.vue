<template>
  <section ref="statsSection" class="py-20 md:py-32 bg-grhiit-black">
    <div class="container mx-auto px-4">
      <!-- Stats grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          ref="statBlocks"
          class="text-center opacity-0"
        >
          <div class="font-mono text-5xl md:text-6xl lg:text-7xl font-semibold text-grhiit-red tracking-tight">
            <span ref="statNumbers" :data-target="stat.value" :data-suffix="stat.suffix">
              {{ stat.isText ? stat.displayValue : '0' }}{{ stat.isText ? '' : stat.suffix }}
            </span>
          </div>
          <div class="mt-3 font-display text-lg md:text-xl uppercase tracking-widest text-grhiit-white/60">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Explanatory text -->
      <div ref="explainer" class="mt-16 md:mt-20 max-w-3xl mx-auto text-center opacity-0">
        <p class="text-lg md:text-xl font-body text-grhiit-white/70 leading-relaxed">
          GRHIIT is a system for building mental discipline through physical intensity — a practice, not a workout.
          Structured intervals: 6-20 second work, 3-10 second rest. Short enough to maintain form. Long enough to stay in the hurt.
        </p>
      </div>

      <!-- Red divider -->
      <div ref="divider" class="mt-16 md:mt-20 max-w-md mx-auto h-[2px] bg-grhiit-red/30 scale-x-0"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const statsSection = ref<HTMLElement | null>(null)
const statBlocks = ref<HTMLElement[]>([])
const statNumbers = ref<HTMLElement[]>([])
const explainer = ref<HTMLElement | null>(null)
const divider = ref<HTMLElement | null>(null)

interface Stat {
  value: number
  suffix: string
  label: string
  isText?: boolean
  displayValue?: string
}

const stats: Stat[] = [
  { value: 220, suffix: '+', label: 'Reps' },
  { value: 16, suffix: '', label: 'Minutes' },
  { value: 0, suffix: '', label: 'Equipment', isText: true, displayValue: 'ZERO' },
]

const animateCountUp = (element: HTMLElement, target: number, duration: number = 1.5) => {
  const obj = { value: 0 }
  $gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const suffix = element.getAttribute('data-suffix') || ''
      element.textContent = Math.floor(obj.value) + suffix
    },
  })
}

onMounted(() => {
  if (!$gsap || !statsSection.value) return

  // Animate stat blocks with stagger
  $gsap.to(statBlocks.value, {
    scrollTrigger: {
      trigger: statsSection.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
    onStart: () => {
      // Trigger count-up for numeric values
      statNumbers.value.forEach((el, index) => {
        if (!stats[index].isText) {
          animateCountUp(el, stats[index].value)
        }
      })
    },
  })

  // Set initial state
  $gsap.set(statBlocks.value, { y: 40, opacity: 0 })

  // Animate explainer
  $gsap.to(explainer.value, {
    scrollTrigger: {
      trigger: explainer.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
  $gsap.set(explainer.value, { y: 30, opacity: 0 })

  // Animate divider
  $gsap.to(divider.value, {
    scrollTrigger: {
      trigger: divider.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    scaleX: 1,
    duration: 0.8,
    ease: 'power2.out',
  })
})
</script>
