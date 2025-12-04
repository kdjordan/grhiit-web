<template>
  <section ref="ctaSection" class="py-24 md:py-40 bg-grhiit-black-warm relative overflow-hidden">
    <!-- Red glow from top -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-grhiit-red/10 blur-[120px] pointer-events-none"></div>

    <!-- Subtle red border top -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-grhiit-red to-transparent"></div>

    <!-- Noise texture -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Pre-launch badge -->
        <div ref="badge" class="inline-flex items-center gap-2 px-4 py-2 bg-grhiit-red/10 border border-grhiit-red/30 mb-8 opacity-0">
          <span class="w-2 h-2 bg-grhiit-red rounded-full animate-pulse"></span>
          <span class="font-mono text-xs uppercase tracking-widest text-grhiit-red">Pre-Launch</span>
        </div>

        <!-- Main headline -->
        <h2
          ref="headline"
          class="font-display font-extrabold italic text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal opacity-0"
        >
          Join the First
          <span class="block mt-2 md:mt-4 text-outline-red text-outline-thick">1,000</span>
        </h2>

        <!-- Context -->
        <p
          ref="contextCopy"
          class="mt-8 text-lg md:text-xl font-body text-grhiit-white/60 opacity-0"
        >
          GRHIIT is in pre-launch. We're building Cycle 1 and bringing in the first 1,000 people who want to be there from the beginning.
        </p>

        <!-- Benefits list -->
        <div ref="benefitsList" class="mt-10 space-y-4 text-left max-w-md mx-auto opacity-0">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="flex items-start gap-4"
          >
            <div class="flex-shrink-0 w-6 h-6 mt-0.5 border border-grhiit-red flex items-center justify-center">
              <svg class="w-3 h-3 text-grhiit-red" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <span class="font-body text-grhiit-white/80">{{ benefit }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div ref="ctaButton" class="mt-12 md:mt-14 opacity-0">
          <button
            @click="$emit('openWaitlist')"
            class="group relative px-12 py-5 bg-grhiit-red text-grhiit-white font-display font-bold italic uppercase tracking-widest text-lg md:text-xl overflow-hidden hover:shadow-glow-red-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <span class="relative z-10">Join the Waitlist</span>
            <div class="absolute inset-0 bg-grhiit-red-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <!-- Closing hook -->
        <div ref="closingHook" class="mt-14 md:mt-16 pt-10 border-t border-grhiit-white/10 opacity-0">
          <p class="text-lg font-body text-grhiit-white/50 mb-4">
            When you picture the toughest version of yourself 8 weeks from now…
          </p>
          <p class="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-grhiit-white">
            Are they the kind of person who
            <span class="text-grhiit-red">waited?</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()

const { $gsap } = useNuxtApp()

const ctaSection = ref<HTMLElement | null>(null)
const badge = ref<HTMLElement | null>(null)
const headline = ref<HTMLElement | null>(null)
const contextCopy = ref<HTMLElement | null>(null)
const benefitsList = ref<HTMLElement | null>(null)
const ctaButton = ref<HTMLElement | null>(null)
const closingHook = ref<HTMLElement | null>(null)

const benefits = [
  'Claim founding member status',
  'Get early access when Cycle 1 drops',
  'Receive launch-day discounts',
  'Get the GRHIIT Starter PDF so you can begin your transformation before the app launches',
]

onMounted(() => {
  if (!$gsap || !ctaSection.value) return

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ctaSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
  })

  // Badge
  $gsap.set(badge.value, { y: 20, opacity: 0 })
  tl.to(badge.value, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  })

  // Headline
  $gsap.set(headline.value, { y: 40, opacity: 0 })
  tl.to(
    headline.value,
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
    },
    '-=0.2'
  )

  // Context copy
  $gsap.set(contextCopy.value, { y: 30, opacity: 0 })
  tl.to(
    contextCopy.value,
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    },
    '-=0.3'
  )

  // Benefits list
  $gsap.set(benefitsList.value, { y: 30, opacity: 0 })
  tl.to(
    benefitsList.value,
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    },
    '-=0.2'
  )

  // CTA button
  $gsap.set(ctaButton.value, { y: 20, opacity: 0, scale: 0.95 })
  tl.to(
    ctaButton.value,
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.5)',
    },
    '-=0.2'
  )

  // Closing hook
  $gsap.set(closingHook.value, { y: 20, opacity: 0 })
  tl.to(
    closingHook.value,
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    },
    '-=0.1'
  )
})
</script>
