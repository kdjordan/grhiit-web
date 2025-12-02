<template>
  <section ref="problemSection" class="py-24 md:py-40 bg-grhiit-black relative overflow-hidden">
    <!-- Vertical red accent bar -->
    <div
      ref="accentBar"
      class="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-2 h-0 bg-grhiit-red"
    ></div>

    <div class="container mx-auto px-4 md:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        <!-- Pull quote - left side -->
        <div ref="pullQuote" class="opacity-0">
          <blockquote class="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase leading-brutal-tight tracking-tight-brutal text-grhiit-white">
            That's not a fitness problem.
            <span class="block mt-2 text-grhiit-red">That's a commitment problem.</span>
          </blockquote>
        </div>

        <!-- Body text - right side -->
        <div ref="bodyText" class="space-y-6 opacity-0">
          <p class="text-lg md:text-xl font-body text-grhiit-white/70 leading-relaxed">
            You show up when you're motivated. When the gym is close. When conditions are right.
          </p>
          <p class="text-lg md:text-xl font-body text-grhiit-white/70 leading-relaxed">
            Then life happens.
          </p>
          <p class="text-lg md:text-xl font-body text-grhiit-white/70 leading-relaxed">
            The result: you're always starting over. Always negotiating with yourself. Always waiting for the right moment.
          </p>
          <p class="text-xl md:text-2xl font-body text-grhiit-white font-medium leading-relaxed">
            The intensity comes from the structure, not your motivation.
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
const pullQuote = ref<HTMLElement | null>(null)
const bodyText = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !problemSection.value) return

  // Animate accent bar
  $gsap.to(accentBar.value, {
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    height: '60%',
    duration: 0.8,
    ease: 'power3.out',
  })

  // Animate pull quote
  $gsap.set(pullQuote.value, { x: -40, opacity: 0 })
  $gsap.to(pullQuote.value, {
    scrollTrigger: {
      trigger: problemSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Animate body text paragraphs with stagger
  const paragraphs = bodyText.value?.querySelectorAll('p')
  if (paragraphs) {
    $gsap.set(paragraphs, { y: 30, opacity: 0 })
    $gsap.to(paragraphs, {
      scrollTrigger: {
        trigger: bodyText.value,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    })
  }

  // Set body container visible after paragraphs animate
  $gsap.to(bodyText.value, {
    scrollTrigger: {
      trigger: bodyText.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    duration: 0.1,
  })
})
</script>
