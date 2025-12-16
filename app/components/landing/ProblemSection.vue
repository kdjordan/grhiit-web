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

          <!-- HEADLINE -->
          <div ref="headlineBlock" class="mb-12 md:mb-16">
            <h2 class="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward">
              <span ref="line1" class="block opacity-0">
                YOU'VE NEVER ACTUALLY
              </span>
              <span
                ref="line2"
                class="block mt-2 md:mt-4 text-outline-red text-outline-thick opacity-0"
              >
                HIT YOUR LIMIT.
              </span>
            </h2>
          </div>

          <!-- THE INSIGHT -->
          <div ref="insightBlock" class="mb-12 md:mb-16 opacity-0">
            <p class="text-2xl md:text-3xl font-body text-grhiit-white/90 mb-6">
              Not once.
            </p>
            <p class="text-xl md:text-2xl font-body text-grhiit-white/70 leading-relaxed">
              So your gauge is broken. You think you know what hard feels like.
              <span class="text-grhiit-red font-semibold">You don't.</span>
            </p>
          </div>

          <!-- THE CONSEQUENCE -->
          <div ref="consequenceBlock" class="mb-12 md:mb-16 opacity-0">
            <div class="bg-grhiit-black/50 border-l-4 border-grhiit-red p-6 md:p-8">
              <p class="text-lg md:text-xl font-body text-grhiit-white/60 mb-4">
                That's why you fold too early.
              </p>
              <p class="text-lg md:text-xl font-body text-grhiit-white/60 mb-4">
                Why you negotiate with yourself.
              </p>
              <p class="text-lg md:text-xl font-body text-grhiit-white/60">
                Why you keep starting over.
              </p>
            </div>
          </div>

          <!-- THE REFRAME -->
          <div ref="reframeBlock" class="opacity-0">
            <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-4">
              That's not a discipline problem.
            </p>
            <p class="text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-wide text-grhiit-white skew-forward">
              It's a <span class="text-grhiit-red">calibration</span> problem.
            </p>
          </div>
        </div>

        <!-- Right Column: Hero Image -->
        <div class="lg:col-span-2 flex items-center justify-center lg:sticky lg:top-32 order-first lg:order-last">
          <div ref="heroImage" class="relative opacity-0">
            <div class="relative overflow-hidden">
              <img
                src="~/assets/images/grhiit-1.png"
                alt="Determined athlete ready for training"
                class="w-full max-w-md lg:max-w-lg object-cover grayscale-[20%]"
              />
              <!-- Subtle red glow -->
              <div class="absolute inset-0 bg-gradient-to-t from-grhiit-red/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
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
const heroImage = ref<HTMLElement | null>(null)

// Headline refs
const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)

// Content refs
const insightBlock = ref<HTMLElement | null>(null)
const consequenceBlock = ref<HTMLElement | null>(null)
const reframeBlock = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !problemSection.value) return

  // ========================================
  // HEADLINE SEQUENCE
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
  // INSIGHT BLOCK
  // ========================================
  $gsap.set(insightBlock.value, { opacity: 0, y: 20 })
  $gsap.to(insightBlock.value, {
    scrollTrigger: {
      trigger: insightBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
  })

  // ========================================
  // CONSEQUENCE BLOCK
  // ========================================
  $gsap.set(consequenceBlock.value, { opacity: 0, y: 20 })
  $gsap.to(consequenceBlock.value, {
    scrollTrigger: {
      trigger: consequenceBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
  })

  // ========================================
  // REFRAME BLOCK
  // ========================================
  $gsap.set(reframeBlock.value, { opacity: 0, y: 30 })
  $gsap.to(reframeBlock.value, {
    scrollTrigger: {
      trigger: reframeBlock.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
  })

  // ========================================
  // HERO IMAGE
  // ========================================
  $gsap.set(heroImage.value, { opacity: 0, y: 50, scale: 0.95 })
  $gsap.to(heroImage.value, {
    scrollTrigger: {
      trigger: heroImage.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: 'power3.out',
  })
})
</script>
