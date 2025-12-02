<template>
  <section ref="transformSection" class="py-20 md:py-32 bg-grhiit-black overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Two-column split -->
      <div class="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
        <!-- Week 1 - Left (muted) -->
        <div
          ref="week1Block"
          class="relative p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-grhiit-gray-800 opacity-0"
        >
          <div class="font-mono text-sm uppercase tracking-widest text-grhiit-white/40 mb-4">
            Week 1
          </div>
          <div class="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl text-grhiit-white/30 tracking-tighter-brutal leading-none">
            01
          </div>
          <p class="mt-6 text-xl md:text-2xl font-body text-grhiit-white/50">
            You survive 16 minutes.
          </p>
        </div>

        <!-- Week 8 - Right (emphasized) -->
        <div
          ref="week8Block"
          class="relative p-8 md:p-12 lg:p-16 opacity-0"
        >
          <!-- Red glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-grhiit-red/5 via-transparent to-transparent pointer-events-none"></div>

          <div class="relative">
            <div class="font-mono text-sm uppercase tracking-widest text-grhiit-red mb-4">
              Week 8
            </div>
            <div class="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl text-grhiit-red tracking-tighter-brutal leading-none">
              08
            </div>
            <p class="mt-6 text-xl md:text-2xl font-body text-grhiit-white">
              You sustain 30 minutes at intensity you couldn't have imagined.
            </p>
          </div>
        </div>
      </div>

      <!-- Final statement -->
      <div ref="finalStatement" class="mt-16 md:mt-24 text-center max-w-3xl mx-auto opacity-0">
        <p class="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-grhiit-white leading-tight">
          That's not fitness.
          <span class="block mt-2 text-grhiit-red">That's rewiring who you are.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const transformSection = ref<HTMLElement | null>(null)
const week1Block = ref<HTMLElement | null>(null)
const week8Block = ref<HTMLElement | null>(null)
const finalStatement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !transformSection.value) return

  // Week 1 slides in from left
  $gsap.set(week1Block.value, { x: -60, opacity: 0 })
  $gsap.to(week1Block.value, {
    scrollTrigger: {
      trigger: transformSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Week 8 slides in from right
  $gsap.set(week8Block.value, { x: 60, opacity: 0 })
  $gsap.to(week8Block.value, {
    scrollTrigger: {
      trigger: transformSection.value,
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out',
  })

  // Final statement fades up
  $gsap.set(finalStatement.value, { y: 40, opacity: 0 })
  $gsap.to(finalStatement.value, {
    scrollTrigger: {
      trigger: finalStatement.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
  })
})
</script>
