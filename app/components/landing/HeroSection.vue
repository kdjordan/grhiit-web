<template>
  <section
    ref="heroSection"
    class="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-grhiit-black pt-24 pb-16 md:pt-32 md:pb-24"
  >
    <!-- Animated background pulse -->
    <div class="absolute inset-0 bg-gradient-radial from-grhiit-red/5 via-transparent to-transparent opacity-0" ref="bgPulse"></div>

    <!-- Noise texture overlay -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay"></div>

    <!-- Vertical accent line -->
    <div ref="accentLine" class="absolute left-8 md:left-16 top-0 w-[2px] h-0 bg-grhiit-red"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Main headline - Two lines stacked -->
        <div ref="headline" class="perspective-1000">
          <h1 class="font-display uppercase text-grhiit-white leading-brutal tracking-wide skew-forward">
            <!-- Line 1: YOU'RE NOT TRAINING. -->
            <span class="block overflow-hidden">
              <span
                v-for="(word, index) in line1Words"
                :key="'l1-' + index"
                ref="line1Refs"
                class="inline-block mr-[0.2em] last:mr-0 opacity-0"
                :class="{
                  'text-outline-red text-outline-thick': word === 'TRAINING.'
                }"
              >
                {{ word }}
              </span>
            </span>
            <!-- Line 2: YOU'RE JUST WORKING OUT. -->
            <span class="block overflow-hidden mt-2 md:mt-4">
              <span
                v-for="(word, index) in line2Words"
                :key="'l2-' + index"
                ref="line2Refs"
                class="inline-block mr-[0.2em] last:mr-0 opacity-0 text-grhiit-white/60"
              >
                {{ word }}
              </span>
            </span>
          </h1>
        </div>

        <!-- Separator line -->
        <div ref="separator" class="mt-10 md:mt-14 w-0 h-[1px] bg-gradient-to-r from-grhiit-red via-grhiit-red/50 to-transparent"></div>

        <!-- Follow-through problem statement -->
        <p
          ref="problemStatement"
          class="mt-8 md:mt-10 text-xl md:text-2xl font-body text-grhiit-white/80 max-w-2xl opacity-0"
        >
          Most people don't have a fitness problem.<br class="hidden md:block" />
          They have a <span class="text-grhiit-red font-semibold">follow-through</span> problem.
        </p>

        <!-- Value prop bullets -->
        <div ref="bullets" class="mt-8 flex flex-wrap gap-x-8 gap-y-2 opacity-0">
          <span class="font-mono text-sm text-grhiit-white/50 uppercase tracking-widest">Short, brutal intervals</span>
          <span class="font-mono text-sm text-grhiit-white/50 uppercase tracking-widest">No equipment</span>
          <span class="font-mono text-sm text-grhiit-white/50 uppercase tracking-widest">No hiding</span>
        </div>

        <!-- Transformation statement -->
        <p
          ref="transformation"
          class="mt-8 text-lg md:text-xl font-body text-grhiit-white/60 max-w-xl opacity-0"
        >
          When you commit to this, you're not just changing your body.<br />
          <span class="text-grhiit-white font-medium">You're rewriting who you are.</span>
        </p>

        <!-- CTA Buttons -->
        <div ref="ctas" class="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 opacity-0">
          <button
            @click="$emit('openWaitlist')"
            class="group relative px-10 py-5 bg-grhiit-red text-grhiit-white font-display uppercase tracking-wider text-lg overflow-hidden hover:shadow-glow-red-lg transition-all duration-300"
          >
            <span class="relative z-10">Join the First 1,000</span>
            <div class="absolute inset-0 bg-grhiit-red-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <a
            href="#what-is-grhiit"
            class="px-10 py-5 border-2 border-grhiit-white/20 text-grhiit-white font-display uppercase tracking-wider text-lg hover:border-grhiit-red hover:text-grhiit-red transition-all duration-300 text-center"
          >
            What Is This?
          </a>
        </div>

        <!-- Founding member note -->
        <p ref="founderNote" class="mt-6 text-sm font-body text-grhiit-white/40 max-w-md opacity-0">
          Become a founding member and get early access, launch-day discounts, and the GRHIIT starter pack.
        </p>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div ref="scrollIndicator" class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
      <div class="flex flex-col items-center gap-2 text-grhiit-white/30">
        <div class="w-[1px] h-8 bg-gradient-to-b from-transparent via-grhiit-white/30 to-grhiit-white/30"></div>
        <svg
          class="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()

const { $gsap } = useNuxtApp()

const heroSection = ref<HTMLElement | null>(null)
const bgPulse = ref<HTMLElement | null>(null)
const accentLine = ref<HTMLElement | null>(null)
const line1Refs = ref<HTMLElement[]>([])
const line2Refs = ref<HTMLElement[]>([])
const separator = ref<HTMLElement | null>(null)
const problemStatement = ref<HTMLElement | null>(null)
const bullets = ref<HTMLElement | null>(null)
const transformation = ref<HTMLElement | null>(null)
const ctas = ref<HTMLElement | null>(null)
const founderNote = ref<HTMLElement | null>(null)
const scrollIndicator = ref<HTMLElement | null>(null)

const line1Words = ["YOU'RE", "NOT", "TRAINING."]
const line2Words = ["YOU'RE", "JUST", "WORKING", "OUT."]

onMounted(() => {
  if (!$gsap) return

  // Set initial states immediately before timeline starts
  // Using autoAlpha (opacity + visibility) for reliable hiding
  $gsap.set(line1Refs.value, { y: 100, autoAlpha: 0, rotateX: -30 })
  $gsap.set(line2Refs.value, { x: -40, autoAlpha: 0 })
  $gsap.set(problemStatement.value, { y: 20, autoAlpha: 0 })
  $gsap.set(bullets.value, { y: 15, autoAlpha: 0 })
  $gsap.set(transformation.value, { y: 15, autoAlpha: 0 })
  $gsap.set(ctas.value, { y: 20, autoAlpha: 0, scale: 0.98 })
  $gsap.set(founderNote.value, { autoAlpha: 0 })
  $gsap.set(scrollIndicator.value, { autoAlpha: 0 })

  const tl = $gsap.timeline({ delay: 0.2 })

  // Accent line draws down
  tl.to(accentLine.value, {
    height: '40%',
    duration: 0.8,
    ease: 'power2.out',
  })

  // Line 1 words slam in
  tl.to(
    line1Refs.value,
    {
      y: 0,
      autoAlpha: 1,
      rotateX: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power4.out',
    },
    '-=0.4'
  )

  // Background pulse on "TRAINING."
  tl.to(bgPulse.value, {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out',
  }, '-=0.2')

  tl.to(bgPulse.value, {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })

  // Line 2 words slide in (slightly delayed, subdued)
  tl.to(
    line2Refs.value,
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power3.out',
    },
    '-=0.6'
  )

  // Separator line draws
  tl.to(separator.value, {
    width: '200px',
    duration: 0.6,
    ease: 'power2.inOut',
  }, '-=0.2')

  // Problem statement fades in
  tl.to(
    problemStatement.value,
    { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2'
  )

  // Bullets stagger in
  tl.to(
    bullets.value,
    { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
    '-=0.1'
  )

  // Transformation statement
  tl.to(
    transformation.value,
    { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.1'
  )

  // CTAs pop in
  tl.to(
    ctas.value,
    { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(1.2)' },
    '-=0.2'
  )

  // Founder note
  tl.to(founderNote.value, {
    autoAlpha: 1,
    duration: 0.4,
    ease: 'power2.out',
  }, '-=0.2')

  // Scroll indicator
  tl.to(scrollIndicator.value, {
    autoAlpha: 1,
    duration: 0.4,
    ease: 'power2.out',
  }, '-=0.1')

  // Parallax effect on scroll - use fromTo to ensure proper reversal
  $gsap.fromTo(
    [line1Refs.value, line2Refs.value],
    {
      y: 0,
      opacity: 1,
    },
    {
      scrollTrigger: {
        trigger: heroSection.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 80,
      opacity: 0.2,
      ease: 'none',
    }
  )
})
</script>

<style scoped>
h1 {
  font-size: clamp(2.2rem, 9vw, 7rem);
  line-height: 0.9;
}

@media (min-width: 768px) {
  h1 {
    font-size: clamp(3.5rem, 11vw, 9rem);
  }
}

.bg-gradient-radial {
  background: radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
}
</style>
