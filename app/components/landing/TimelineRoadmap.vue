<template>
  <section ref="timelineSection" class="py-20 md:py-32 bg-grhiit-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div ref="header" class="text-center mb-16 md:mb-24 opacity-0">
        <h2 class="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-tight-brutal">
          The <span class="text-grhiit-red">8-Week</span> Cycle
        </h2>
        <p class="mt-4 text-lg font-body text-grhiit-white/60 max-w-xl mx-auto">
          Same movements. Less rest. More time under tension. The sessions don't get easier — they get longer.
        </p>
      </div>

      <!-- Timeline - Desktop horizontal -->
      <div class="hidden lg:block relative max-w-5xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute top-[60px] left-0 right-0 h-[2px] bg-grhiit-gray-800">
          <div
            ref="progressLine"
            class="h-full bg-grhiit-red origin-left"
            style="transform: scaleX(0);"
          ></div>
        </div>

        <!-- Phase markers -->
        <div class="grid grid-cols-4 gap-4">
          <div
            v-for="(phase, index) in phases"
            :key="phase.weeks"
            ref="phaseBlocks"
            class="relative text-center opacity-0"
          >
            <!-- Marker dot -->
            <div
              class="relative z-10 w-8 h-8 mx-auto rounded-full border-2 transition-all duration-500"
              :class="[
                activePhase >= index
                  ? 'bg-grhiit-red border-grhiit-red shadow-glow-red'
                  : 'bg-grhiit-gray-900 border-grhiit-gray-600'
              ]"
            >
              <div
                v-if="activePhase >= index"
                class="absolute inset-0 rounded-full bg-grhiit-red animate-ping opacity-30"
              ></div>
            </div>

            <!-- Content below marker -->
            <div class="mt-8">
              <div class="font-display font-bold text-xl uppercase tracking-tight text-grhiit-white">
                {{ phase.weeks }}
              </div>
              <div class="mt-2 font-mono text-2xl md:text-3xl font-semibold text-grhiit-red">
                {{ phase.ratio }}
              </div>
              <div class="mt-3 font-display text-sm uppercase tracking-widest text-grhiit-white/50">
                {{ phase.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline - Mobile vertical -->
      <div class="lg:hidden relative max-w-sm mx-auto">
        <!-- Vertical line -->
        <div class="absolute top-0 bottom-0 left-4 w-[2px] bg-grhiit-gray-800">
          <div
            ref="progressLineMobile"
            class="w-full bg-grhiit-red origin-top"
            style="transform: scaleY(0); height: 100%;"
          ></div>
        </div>

        <!-- Phase items -->
        <div class="space-y-12">
          <div
            v-for="(phase, index) in phases"
            :key="phase.weeks"
            ref="phaseBlocksMobile"
            class="relative flex items-start gap-6 opacity-0"
          >
            <!-- Marker dot -->
            <div
              class="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 transition-all duration-500"
              :class="[
                activePhase >= index
                  ? 'bg-grhiit-red border-grhiit-red shadow-glow-red'
                  : 'bg-grhiit-gray-900 border-grhiit-gray-600'
              ]"
            ></div>

            <!-- Content -->
            <div class="pt-1">
              <div class="font-display font-bold text-lg uppercase tracking-tight text-grhiit-white">
                {{ phase.weeks }}
              </div>
              <div class="mt-1 font-mono text-2xl font-semibold text-grhiit-red">
                {{ phase.ratio }}
              </div>
              <div class="mt-2 font-display text-xs uppercase tracking-widest text-grhiit-white/50">
                {{ phase.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom statement -->
      <div ref="bottomStatement" class="mt-16 md:mt-24 text-center opacity-0">
        <p class="text-xl md:text-2xl font-body text-grhiit-white/80 italic max-w-2xl mx-auto">
          "You get capable of more."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const timelineSection = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const progressLine = ref<HTMLElement | null>(null)
const progressLineMobile = ref<HTMLElement | null>(null)
const phaseBlocks = ref<HTMLElement[]>([])
const phaseBlocksMobile = ref<HTMLElement[]>([])
const bottomStatement = ref<HTMLElement | null>(null)

const activePhase = ref(-1)

interface Phase {
  weeks: string
  ratio: string
  name: string
}

const phases: Phase[] = [
  { weeks: 'Week 1-2', ratio: '6s:3s', name: 'Foundation' },
  { weeks: 'Week 3-4', ratio: '8s:3s', name: 'Build' },
  { weeks: 'Week 5-6', ratio: '10s:2s', name: 'Intensify' },
  { weeks: 'Week 7-8', ratio: '12s:2s', name: 'Peak' },
]

onMounted(() => {
  if (!$gsap || !timelineSection.value) return

  // Animate header
  $gsap.set(header.value, { y: 30, opacity: 0 })
  $gsap.to(header.value, {
    scrollTrigger: {
      trigger: timelineSection.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power3.out',
  })

  // Desktop timeline
  if (progressLine.value && phaseBlocks.value.length) {
    $gsap.set(phaseBlocks.value, { y: 30, opacity: 0 })

    $gsap.to(phaseBlocks.value, {
      scrollTrigger: {
        trigger: progressLine.value,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      onStart: () => {
        // Animate phases sequentially
        phases.forEach((_, index) => {
          setTimeout(() => {
            activePhase.value = index
          }, index * 400)
        })
      },
    })

    // Draw progress line
    $gsap.to(progressLine.value, {
      scrollTrigger: {
        trigger: progressLine.value,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      scaleX: 1,
      duration: 1.6,
      ease: 'power2.inOut',
    })
  }

  // Mobile timeline
  if (progressLineMobile.value && phaseBlocksMobile.value.length) {
    $gsap.set(phaseBlocksMobile.value, { x: -20, opacity: 0 })

    $gsap.to(phaseBlocksMobile.value, {
      scrollTrigger: {
        trigger: progressLineMobile.value,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power3.out',
    })

    // Draw vertical progress line
    $gsap.to(progressLineMobile.value, {
      scrollTrigger: {
        trigger: progressLineMobile.value,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      scaleY: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }

  // Bottom statement
  $gsap.set(bottomStatement.value, { y: 20, opacity: 0 })
  $gsap.to(bottomStatement.value, {
    scrollTrigger: {
      trigger: bottomStatement.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  })
})
</script>
