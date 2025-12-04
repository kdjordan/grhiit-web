<template>
  <section ref="problemSection" class="py-24 md:py-40 bg-grhiit-black-warm relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <!-- Diagonal lines pattern -->
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(232, 17, 15, 0.03) 40px, rgba(232, 17, 15, 0.03) 41px);"></div>
    </div>

    <!-- Warm vignette overlay -->
    <div class="absolute inset-0 vignette-warm pointer-events-none"></div>

    <!-- Subtle noise texture -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>

    <!-- Vertical red accent bar -->
    <div
      ref="accentBar"
      class="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-2 h-0 bg-grhiit-red z-10"
    ></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Main statement -->
        <div ref="mainStatement" class="opacity-0">
          <h2 class="font-display font-extrabold italic text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal">
            That's not a fitness problem.
            <span class="block mt-2 text-grhiit-red">That's a commitment problem.</span>
          </h2>
        </div>

        <!-- Pattern recognition -->
        <div ref="patternBlock" class="mt-12 md:mt-16 opacity-0">
          <p class="text-lg md:text-xl font-body text-grhiit-white/70 mb-8">
            You've seen the pattern:
          </p>

          <div class="space-y-4 md:space-y-6 border-l-[3px] border-grhiit-red/30 pl-6 md:pl-8">
            <p
              v-for="(line, index) in patternLines"
              :key="index"
              ref="patternRefs"
              class="text-lg md:text-xl font-body text-grhiit-white/60 opacity-0"
            >
              {{ line }}
            </p>
          </div>
        </div>

        <!-- Waiting statement -->
        <div ref="waitingBlock" class="mt-10 md:mt-14 opacity-0">
          <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-4">
            You tell yourself you'll "start again Monday."
          </p>
          <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-4">
            You wait for the perfect routine, the perfect gym, the perfect time.
          </p>
          <p class="text-xl md:text-2xl font-body text-grhiit-white/40 italic">
            It never really arrives.
          </p>
        </div>

        <!-- Solution statement -->
        <div ref="solutionBlock" class="mt-14 md:mt-20 pt-10 border-t border-grhiit-white/10 opacity-0">
          <p class="text-xl md:text-2xl font-body text-grhiit-white/80 mb-6">
            <span class="text-grhiit-red font-semibold">GRHIIT</span> is built to remove that negotiation.
          </p>
          <p class="text-lg md:text-xl font-body text-grhiit-white/60 mb-6">
            You don't need more motivation.
          </p>
          <p class="text-xl md:text-2xl font-body text-grhiit-white leading-relaxed">
            You need a <span class="text-grhiit-red font-semibold">structure</span> that forces you to keep the promises you make to yourself — even on the days you don't feel like it.
          </p>
        </div>

        <!-- Final punch -->
        <div ref="punchLine" class="mt-12 md:mt-16 opacity-0">
          <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-2">
            The intensity doesn't come from hype.
          </p>
          <p class="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-grhiit-white">
            It comes from the rules of the system.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const problemSection = ref<HTMLElement | null>(null)
const accentBar = ref<HTMLElement | null>(null)
const mainStatement = ref<HTMLElement | null>(null)
const patternBlock = ref<HTMLElement | null>(null)
const patternRefs = ref<HTMLElement[]>([])
const waitingBlock = ref<HTMLElement | null>(null)
const solutionBlock = ref<HTMLElement | null>(null)
const punchLine = ref<HTMLElement | null>(null)

const patternLines = [
  'You start when you\'re motivated.',
  'You go hard for a week or two.',
  'Then life gets busy… and the promise you made to yourself quietly disappears.',
]

onMounted(() => {
  if (!$gsap || !problemSection.value) return

  // Animate accent bar
  $gsap.to(accentBar.value, {
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    height: '50%',
    duration: 0.8,
    ease: 'power3.out',
  })

  // Main statement
  $gsap.set(mainStatement.value, { x: -40, opacity: 0 })
  $gsap.to(mainStatement.value, {
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Pattern block container
  $gsap.set(patternBlock.value, { y: 30, opacity: 0 })
  $gsap.to(patternBlock.value, {
    scrollTrigger: {
      trigger: patternBlock.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  })

  // Pattern lines stagger
  $gsap.set(patternRefs.value, { x: -20, opacity: 0 })
  $gsap.to(patternRefs.value, {
    scrollTrigger: {
      trigger: patternBlock.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 0.3,
  })

  // Waiting block
  $gsap.set(waitingBlock.value, { y: 20, opacity: 0 })
  $gsap.to(waitingBlock.value, {
    scrollTrigger: {
      trigger: waitingBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  })

  // Solution block
  $gsap.set(solutionBlock.value, { y: 30, opacity: 0 })
  $gsap.to(solutionBlock.value, {
    scrollTrigger: {
      trigger: solutionBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
  })

  // Punch line
  $gsap.set(punchLine.value, { y: 20, opacity: 0 })
  $gsap.to(punchLine.value, {
    scrollTrigger: {
      trigger: punchLine.value,
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
