<template>
  <section ref="timelineSection" class="py-24 md:py-40 bg-[#1F1C1A] relative overflow-hidden">
    <!-- Subtle noise texture -->
    <div class="absolute inset-0 opacity-[0.015] pointer-events-none noise-overlay"></div>

    <!-- Content wrapper -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Section header -->
        <div ref="header" class="max-w-4xl mx-auto mb-16 md:mb-24 opacity-0">
          <h2 class="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
            The <span class="text-grhiit-red">8-Week</span> Cycle
          </h2>
          <div class="mt-8 space-y-4">
            <p class="text-lg md:text-xl font-body text-grhiit-white/70">
              Same simple movements. Smarter structure. Higher demand on your focus, lungs, and resolve.
            </p>
            <p class="text-lg font-body text-grhiit-white/50">
              Over eight weeks:
            </p>
          </div>
        </div>

        <!-- Progression bullets -->
        <div ref="progressionList" class="max-w-3xl mx-auto mb-16 md:mb-20 opacity-0">
          <ul class="space-y-4 border-l-[3px] border-grhiit-red/30 pl-6 md:pl-8">
            <li
              v-for="(item, index) in progressionItems"
              :key="index"
              ref="progressionRefs"
              class="text-lg md:text-xl font-body text-grhiit-white/60 opacity-0"
            >
              {{ item }}
            </li>
          </ul>
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
                class="relative z-10 w-10 h-10 mx-auto rounded-full border-2 transition-all duration-500 flex items-center justify-center"
                :class="[
                  activePhase >= index
                    ? 'bg-grhiit-red border-grhiit-red shadow-glow-red'
                    : 'bg-grhiit-gray-900 border-grhiit-gray-600'
                ]"
              >
                <span class="font-mono text-xs font-bold text-grhiit-white">{{ phase.weekNum }}</span>
                <div
                  v-if="activePhase >= index"
                  class="absolute inset-0 rounded-full bg-grhiit-red animate-ping opacity-30"
                ></div>
              </div>

              <!-- Content below marker -->
              <div class="mt-8">
                <div class="font-display font-bold text-lg uppercase tracking-tight text-grhiit-white">
                  {{ phase.weeks }}
                </div>
                <div class="mt-2 font-mono text-2xl md:text-3xl font-bold text-grhiit-red">
                  {{ phase.ratio }}
                </div>
                <div class="mt-3 font-body text-sm text-grhiit-white/50">
                  {{ phase.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline - Mobile vertical -->
        <div class="lg:hidden relative max-w-sm mx-auto">
          <!-- Vertical line -->
          <div class="absolute top-0 bottom-0 left-5 w-[2px] bg-grhiit-gray-800">
            <div
              ref="progressLineMobile"
              class="w-full bg-grhiit-red origin-top"
              style="transform: scaleY(0); height: 100%;"
            ></div>
          </div>

          <!-- Phase items -->
          <div class="space-y-10">
            <div
              v-for="(phase, index) in phases"
              :key="phase.weeks"
              ref="phaseBlocksMobile"
              class="relative flex items-start gap-6 opacity-0"
            >
              <!-- Marker dot -->
              <div
                class="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all duration-500 flex items-center justify-center"
                :class="[
                  activePhase >= index
                    ? 'bg-grhiit-red border-grhiit-red shadow-glow-red'
                    : 'bg-grhiit-gray-900 border-grhiit-gray-600'
                ]"
              >
                <span class="font-mono text-xs font-bold text-grhiit-white">{{ phase.weekNum }}</span>
              </div>

              <!-- Content -->
              <div class="pt-1 flex-1">
                <div class="font-display font-bold text-lg uppercase tracking-tight text-grhiit-white">
                  {{ phase.weeks }}
                </div>
                <div class="mt-1 font-mono text-2xl font-bold text-grhiit-red">
                  {{ phase.ratio }}
                </div>
                <div class="mt-2 font-body text-sm text-grhiit-white/50">
                  {{ phase.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom statements -->
        <div ref="bottomBlock" class="mt-16 md:mt-24 max-w-3xl mx-auto opacity-0">
          <p class="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-grhiit-white mb-4">
            The sessions don't get easier.
          </p>
          <p class="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-tight text-grhiit-red">
            You get harder to break.
          </p>

          <div class="mt-10 pt-8 border-t border-grhiit-white/10 space-y-3">
            <p class="text-lg font-body text-grhiit-white/60">
              You'll feel it in your legs.
            </p>
            <p class="text-lg font-body text-grhiit-white/60">
              You'll hear it in your breathing.
            </p>
            <p class="text-xl font-body text-grhiit-white">
              You'll notice it most in the way you start to handle everything else in your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const timelineSection = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const progressionList = ref<HTMLElement | null>(null)
const progressionRefs = ref<HTMLElement[]>([])
const progressLine = ref<HTMLElement | null>(null)
const progressLineMobile = ref<HTMLElement | null>(null)
const phaseBlocks = ref<HTMLElement[]>([])
const phaseBlocksMobile = ref<HTMLElement[]>([])
const bottomBlock = ref<HTMLElement | null>(null)

const activePhase = ref(-1)

const progressionItems = [
  'Your rest windows tighten.',
  'Your work blocks feel longer.',
  'Your time "in the hurt" increases — slowly enough to be doable, ruthlessly enough to change you.',
]

interface Phase {
  weeks: string
  weekNum: string
  ratio: string
  description: string
}

const phases: Phase[] = [
  { weeks: 'Week 1-2', weekNum: '01', ratio: '6s:3s', description: 'Learning the movements, fighting the urge to stop' },
  { weeks: 'Week 3-4', weekNum: '02', ratio: '8s:3s', description: 'Recovering faster, building trust in yourself' },
  { weeks: 'Week 5-6', weekNum: '03', ratio: '10s:2s', description: 'Intensity rises, mental calluses form' },
  { weeks: 'Week 7-8', weekNum: '04', ratio: '12s:2s', description: 'Peak capacity, new identity locked in' },
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

  // Progression list
  $gsap.set(progressionList.value, { y: 20, opacity: 0 })
  $gsap.to(progressionList.value, {
    scrollTrigger: {
      trigger: progressionList.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  })

  // Progression items stagger
  $gsap.set(progressionRefs.value, { x: -20, opacity: 0 })
  $gsap.to(progressionRefs.value, {
    scrollTrigger: {
      trigger: progressionList.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.2,
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
        phases.forEach((_, index) => {
          setTimeout(() => {
            activePhase.value = index
          }, index * 400)
        })
      },
    })

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

  // Bottom block
  $gsap.set(bottomBlock.value, { y: 30, opacity: 0 })
  $gsap.to(bottomBlock.value, {
    scrollTrigger: {
      trigger: bottomBlock.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
  })
})
</script>
