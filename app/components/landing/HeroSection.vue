<template>
  <section
    ref="heroSection"
    class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-grhiit-black"
  >
    <!-- Noise texture overlay -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Main headline - Italic display with outline accent -->
        <h1 ref="headline" class="font-display font-extrabold italic uppercase text-grhiit-white leading-brutal tracking-tight-brutal">
          <span
            v-for="(word, index) in headlineWords"
            :key="index"
            ref="words"
            class="inline-block mr-[0.2em] last:mr-0"
            :class="{
              'text-outline-red text-outline-thick': word === 'TRAINING.'
            }"
          >
            {{ word }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p
          ref="subhead"
          class="mt-8 md:mt-12 text-lg md:text-xl lg:text-2xl font-body text-grhiit-white/70 max-w-2xl opacity-0"
        >
          Progressive bodyweight intervals. Mental discipline through sustained intensity.
        </p>

        <!-- CTA Buttons -->
        <div ref="ctas" class="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 opacity-0">
          <button
            @click="$emit('openWaitlist')"
            class="px-8 py-4 bg-grhiit-red text-grhiit-white font-display font-bold italic uppercase tracking-wide text-lg hover:bg-grhiit-red-dark hover:shadow-glow-red transition-all duration-300"
          >
            Join the First 1,000
          </button>
          <NuxtLink
            to="/program"
            class="px-8 py-4 border-2 border-grhiit-white/30 text-grhiit-white font-display font-bold italic uppercase tracking-wide text-lg hover:border-grhiit-white hover:bg-grhiit-white/5 transition-all duration-300 text-center"
          >
            What Is This
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div ref="scrollIndicator" class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
      <div class="flex flex-col items-center gap-2 text-grhiit-white/40">
        <span class="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <svg
          class="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
const headline = ref<HTMLElement | null>(null)
const words = ref<HTMLElement[]>([])
const subhead = ref<HTMLElement | null>(null)
const ctas = ref<HTMLElement | null>(null)
const scrollIndicator = ref<HTMLElement | null>(null)

const headlineWords = ["YOU'RE", "NOT", "TRAINING.", "YOU'RE", "JUST", "WORKING", "OUT."]

onMounted(() => {
  if (!$gsap || !headline.value) return

  const tl = $gsap.timeline({ delay: 0.3 })

  // Animate each word from bottom with stagger
  tl.fromTo(
    words.value,
    {
      y: 80,
      opacity: 0,
      rotateX: -20,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    }
  )

  // Fade in subhead
  tl.to(
    subhead.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2"
  )

  // Fade in CTAs
  tl.to(
    ctas.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  )

  // Fade in scroll indicator
  tl.to(
    scrollIndicator.value,
    {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2"
  )

  // Parallax effect on scroll
  $gsap.to(headline.value, {
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
    y: 100,
    opacity: 0.3,
    ease: "none",
  })
})
</script>

<style scoped>
h1 {
  font-size: clamp(2.5rem, 10vw, 8rem);
  line-height: 0.9;
}

@media (min-width: 768px) {
  h1 {
    font-size: clamp(4rem, 12vw, 10rem);
  }
}
</style>
