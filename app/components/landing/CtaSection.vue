<template>
  <section ref="ctaSection" class="py-24 md:py-40 bg-grhiit-black relative">
    <!-- Subtle red border top -->
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-grhiit-red/50 to-transparent"></div>

    <div class="container mx-auto px-4 text-center">
      <!-- Main headline - Italic display with outline accent on 1,000 -->
      <h2
        ref="headline"
        class="font-display font-extrabold italic text-4xl md:text-6xl lg:text-7xl uppercase text-grhiit-white tracking-tight-brutal leading-none opacity-0"
      >
        Join the First
        <span class="block mt-2 md:mt-4 text-outline-red text-outline-thick">1,000</span>
      </h2>

      <!-- Supporting copy -->
      <p
        ref="supportingCopy"
        class="mt-8 md:mt-10 text-lg md:text-xl font-body text-grhiit-white/70 max-w-xl mx-auto opacity-0"
      >
        Get early access, live session invites, and the 8 Weeks of GRHIIT starter PDF.
      </p>

      <!-- CTA Button -->
      <div ref="ctaButton" class="mt-10 md:mt-14 opacity-0">
        <button
          @click="$emit('openWaitlist')"
          class="group relative px-12 py-5 bg-grhiit-red text-grhiit-white font-display font-bold italic uppercase tracking-widest text-lg md:text-xl hover:bg-grhiit-red-dark transition-all duration-300 animate-pulse-glow hover:animate-none hover:shadow-glow-red-lg hover:scale-[1.02]"
        >
          <span class="relative z-10">Join Now</span>
        </button>
      </div>

      <!-- Tagline -->
      <p
        ref="tagline"
        class="mt-10 md:mt-14 font-body text-sm md:text-base text-grhiit-white/40 italic opacity-0"
      >
        All it takes is all you've got.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()

const { $gsap } = useNuxtApp()

const ctaSection = ref<HTMLElement | null>(null)
const headline = ref<HTMLElement | null>(null)
const supportingCopy = ref<HTMLElement | null>(null)
const ctaButton = ref<HTMLElement | null>(null)
const tagline = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !ctaSection.value) return

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ctaSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
  })

  // Headline
  $gsap.set(headline.value, { y: 40, opacity: 0 })
  tl.to(headline.value, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power3.out',
  })

  // Supporting copy
  $gsap.set(supportingCopy.value, { y: 30, opacity: 0 })
  tl.to(
    supportingCopy.value,
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    },
    '-=0.3'
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

  // Tagline
  $gsap.set(tagline.value, { opacity: 0 })
  tl.to(
    tagline.value,
    {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    },
    '-=0.1'
  )
})
</script>
