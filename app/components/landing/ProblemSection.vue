<template>
  <section ref="problemSection" class="py-24 md:py-40 bg-grhiit-black-warm relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
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
      <!-- Split Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

        <!-- Left Column: Content (3/5 width on desktop) -->
        <div class="lg:col-span-3 max-w-3xl">

          <!-- HEADLINE: Strikethrough reveal -->
          <div ref="headlineBlock" class="mb-16 md:mb-20">
            <h2 class="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
              <!-- Line 1: "That's not a [FITNESS] problem." -->
              <span ref="line1" class="block opacity-0">
                That's not a
                <span class="relative inline-block mx-2">
                  <span ref="fitnessWord" class="relative z-10">fitness</span>
                  <!-- Animated strikethrough -->
                  <span
                    ref="strikethrough"
                    class="absolute left-0 top-1/2 h-[4px] md:h-[6px] bg-grhiit-red w-0 -translate-y-1/2 z-20"
                  ></span>
                </span>
                problem.
              </span>

              <!-- Line 2: "That's a COMMITMENT problem." - slams in -->
              <span
                ref="line2"
                class="block mt-4 md:mt-6 text-grhiit-red opacity-0"
              >
                That's a <span class="text-grhiit-white">commitment</span> problem.
              </span>
            </h2>
          </div>

          <!-- PATTERN: Visual degradation timeline -->
          <div ref="patternBlock" class="mb-16 md:mb-20 opacity-0">
            <p class="text-sm font-mono uppercase tracking-widest text-grhiit-white/40 mb-8">
              You've seen the pattern
            </p>

            <div class="space-y-0">
              <!-- Day 1 - Motivated -->
              <div
                ref="pattern1"
                class="relative flex items-start gap-4 md:gap-6 py-4 border-l-2 border-grhiit-white/20 pl-6 md:pl-8 opacity-0"
              >
                <div class="absolute left-0 top-4 w-3 h-3 -translate-x-[7px] rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]"></div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-green-500/80">Day 1</span>
                  <p class="text-lg md:text-xl font-body text-grhiit-white/80 mt-1">You start when you're motivated.</p>
                </div>
              </div>

              <!-- Week 2 - Fading -->
              <div
                ref="pattern2"
                class="relative flex items-start gap-4 md:gap-6 py-4 border-l-2 border-grhiit-white/10 pl-6 md:pl-8 opacity-0"
              >
                <div class="absolute left-0 top-4 w-3 h-3 -translate-x-[7px] rounded-full bg-yellow-500/60"></div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-yellow-500/60">Week 2</span>
                  <p class="text-lg md:text-xl font-body text-grhiit-white/60 mt-1">You go hard for a week or two.</p>
                </div>
              </div>

              <!-- Week 3+ - Failed -->
              <div
                ref="pattern3"
                class="relative flex items-start gap-4 md:gap-6 py-4 border-l-2 border-grhiit-red/30 pl-6 md:pl-8 opacity-0"
              >
                <div class="absolute left-0 top-4 w-3 h-3 -translate-x-[7px] rounded-full bg-grhiit-red/80 shadow-[0_0_12px_rgba(232,17,15,0.4)]"></div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-grhiit-red/80">Week 3+</span>
                  <p class="text-lg md:text-xl font-body text-grhiit-white/40 mt-1">Then life gets busy… and the promise quietly disappears.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- THE WAIT: Dramatic typography -->
          <div ref="waitBlock" class="mb-16 md:mb-20 opacity-0">
            <div class="bg-grhiit-black/50 border-l-4 border-grhiit-red p-6 md:p-8">
              <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-3">
                You tell yourself you'll "start again Monday."
              </p>
              <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-6">
                You wait for the perfect routine, the perfect gym, the perfect time.
              </p>
              <p class="text-2xl md:text-3xl font-display uppercase tracking-wide text-grhiit-white/30 skew-forward">
                It never arrives.
              </p>
            </div>
          </div>

          <!-- SOLUTION: Bold statement -->
          <div ref="solutionBlock" class="opacity-0">
            <div class="flex items-start gap-4 mb-8">
              <span class="font-display text-5xl md:text-6xl text-grhiit-red leading-none">*</span>
              <p class="text-xl md:text-2xl font-body text-grhiit-white leading-relaxed">
                <span class="text-grhiit-red font-semibold">GRHIIT</span> is built to remove that negotiation.
                You don't need more motivation. You need a <span class="text-grhiit-red font-semibold">structure</span> that forces you to keep the promises you make to yourself.
              </p>
            </div>

            <!-- Final punch -->
            <div class="mt-10 pt-8 border-t border-grhiit-white/10">
              <p class="text-sm font-mono uppercase tracking-widest text-grhiit-white/40 mb-3">
                The intensity doesn't come from hype.
              </p>
              <p class="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-wide text-grhiit-white skew-forward">
                It comes from the rules of the system.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Giant QUIT Typography -->
        <div class="lg:col-span-2 flex items-center justify-center lg:sticky lg:top-32 order-first lg:order-last">
          <div ref="giantText" class="relative opacity-0">
            <span class="font-display text-giant lg:text-giant-xl uppercase tracking-tight skew-forward block">
              QUIT
            </span>
            <div class="absolute inset-0 blur-3xl bg-grhiit-red/10 -z-10 scale-150"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const problemSection = ref<HTMLElement | null>(null)
const accentBar = ref<HTMLElement | null>(null)
const giantText = ref<HTMLElement | null>(null)

// Headline refs
const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
const fitnessWord = ref<HTMLElement | null>(null)
const strikethrough = ref<HTMLElement | null>(null)

// Pattern timeline refs
const patternBlock = ref<HTMLElement | null>(null)
const pattern1 = ref<HTMLElement | null>(null)
const pattern2 = ref<HTMLElement | null>(null)
const pattern3 = ref<HTMLElement | null>(null)

// Content refs
const waitBlock = ref<HTMLElement | null>(null)
const solutionBlock = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !problemSection.value) return

  // ========================================
  // HEADLINE SEQUENCE: Strikethrough reveal
  // ========================================

  const headlineTl = $gsap.timeline({
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
  })

  // Line 1 fades in
  $gsap.set(line1.value, { opacity: 0, x: -30 })
  headlineTl.to(line1.value, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    ease: 'power3.out',
  })

  // Strikethrough draws across "fitness"
  headlineTl.to(strikethrough.value, {
    width: '110%',
    duration: 0.4,
    ease: 'power2.inOut',
  }, '+=0.3')

  // "fitness" dims
  headlineTl.to(fitnessWord.value, {
    opacity: 0.3,
    duration: 0.3,
  }, '-=0.2')

  // Line 2 slams in
  $gsap.set(line2.value, { opacity: 0, y: 30, scale: 0.95 })
  headlineTl.to(line2.value, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: 'back.out(1.5)',
  }, '+=0.2')

  // ========================================
  // ACCENT BAR
  // ========================================
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

  // ========================================
  // PATTERN TIMELINE: Degradation sequence
  // ========================================
  $gsap.set(patternBlock.value, { opacity: 0 })
  $gsap.to(patternBlock.value, {
    scrollTrigger: {
      trigger: patternBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    duration: 0.4,
  })

  // Pattern items stagger with visual degradation
  const patterns = [pattern1.value, pattern2.value, pattern3.value]
  patterns.forEach((pattern, index) => {
    $gsap.set(pattern, { opacity: 0, x: -20 })
    $gsap.to(pattern, {
      scrollTrigger: {
        trigger: patternBlock.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.2 + (index * 0.3),
      ease: 'power2.out',
    })
  })

  // ========================================
  // WAIT BLOCK
  // ========================================
  $gsap.set(waitBlock.value, { opacity: 0, y: 20 })
  $gsap.to(waitBlock.value, {
    scrollTrigger: {
      trigger: waitBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
  })

  // ========================================
  // SOLUTION BLOCK
  // ========================================
  $gsap.set(solutionBlock.value, { opacity: 0, y: 30 })
  $gsap.to(solutionBlock.value, {
    scrollTrigger: {
      trigger: solutionBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
  })

  // ========================================
  // GIANT "QUIT" - DELAYED until solution visible
  // ========================================
  $gsap.set(giantText.value, { scale: 0.6, opacity: 0, rotateZ: -8 })
  $gsap.to(giantText.value, {
    scrollTrigger: {
      trigger: solutionBlock.value, // Triggers when solution is visible
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    scale: 1,
    opacity: 1,
    rotateZ: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)',
  })

  // Parallax effect on QUIT text
  $gsap.to(giantText.value, {
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    y: -80,
    ease: 'none',
  })
})
</script>
