<template>
  <section ref="transformSection" class="py-24 md:py-40 overflow-hidden relative bg-grhiit-black">
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(rgba(232,17,15,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,17,15,0.1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section header -->
      <div ref="headerBlock" class="max-w-4xl mx-auto mb-16 md:mb-24 opacity-0">
        <h2 class="font-display font-extrabold italic text-3xl md:text-4xl lg:text-5xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal">
          The Transformation
        </h2>
      </div>

      <!-- Three-stage progression -->
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 md:gap-0">
          <!-- Week 1 -->
          <div
            ref="stage1"
            class="relative p-6 md:p-8 md:border-r border-grhiit-gray-800 opacity-0"
          >
            <div class="font-mono text-xs uppercase tracking-widest text-grhiit-white/40 mb-3">
              Week 1
            </div>
            <div class="font-display font-extrabold text-5xl md:text-6xl text-grhiit-white/20 tracking-tighter-brutal leading-none mb-6">
              01
            </div>
            <p class="text-lg font-body text-grhiit-white/60 leading-relaxed">
              You're just trying to survive the timer. You're learning the movements, fighting the urge to stop, realizing how loud your excuses really are.
            </p>
          </div>

          <!-- Weeks 3-5 -->
          <div
            ref="stage2"
            class="relative p-6 md:p-8 md:border-r border-grhiit-gray-800 opacity-0"
          >
            <!-- Subtle transition glow -->
            <div class="absolute inset-0 bg-gradient-to-b from-grhiit-red/5 via-transparent to-transparent pointer-events-none"></div>

            <div class="relative">
              <div class="font-mono text-xs uppercase tracking-widest text-grhiit-white/50 mb-3">
                Weeks 3-5
              </div>
              <div class="font-display font-extrabold text-5xl md:text-6xl text-grhiit-white/40 tracking-tighter-brutal leading-none mb-6">
                03
              </div>
              <p class="text-lg font-body text-grhiit-white/70 leading-relaxed">
                You recover faster. You hear the cue, and instead of bargaining, you move. You start trusting yourself again.
              </p>
            </div>
          </div>

          <!-- Week 8 -->
          <div
            ref="stage3"
            class="relative p-6 md:p-8 opacity-0"
          >
            <!-- Red glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-grhiit-red/15 via-grhiit-red/5 to-transparent pointer-events-none"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-grhiit-red/10 pointer-events-none"></div>

            <div class="relative">
              <div class="font-mono text-xs uppercase tracking-widest text-grhiit-red mb-3">
                Week 8
              </div>
              <div class="font-display font-extrabold text-5xl md:text-6xl text-grhiit-red tracking-tighter-brutal leading-none mb-6">
                08
              </div>
              <p class="text-lg font-body text-grhiit-white leading-relaxed">
                You're sustaining intensity you couldn't have imagined on Day 1. You don't wait to feel motivated — you move because that's who you are now.
              </p>
            </div>
          </div>
        </div>

        <!-- Final statement -->
        <div ref="finalStatement" class="mt-16 md:mt-24 pt-12 border-t border-grhiit-white/10 text-center opacity-0">
          <p class="text-lg md:text-xl font-body text-grhiit-white/50 mb-4">
            That's not "getting in shape."
          </p>
          <p class="font-display font-extrabold italic text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-grhiit-white leading-tight">
            That's building a new
            <span class="text-grhiit-red">default identity.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const transformSection = ref<HTMLElement | null>(null)
const headerBlock = ref<HTMLElement | null>(null)
const stage1 = ref<HTMLElement | null>(null)
const stage2 = ref<HTMLElement | null>(null)
const stage3 = ref<HTMLElement | null>(null)
const finalStatement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$gsap || !transformSection.value) return

  // Header
  $gsap.set(headerBlock.value, { y: 30, opacity: 0 })
  $gsap.to(headerBlock.value, {
    scrollTrigger: {
      trigger: transformSection.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power3.out',
  })

  // Stage 1 - Week 1
  $gsap.set(stage1.value, { y: 40, opacity: 0 })
  $gsap.to(stage1.value, {
    scrollTrigger: {
      trigger: stage1.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power3.out',
  })

  // Stage 2 - Weeks 3-5
  $gsap.set(stage2.value, { y: 40, opacity: 0 })
  $gsap.to(stage2.value, {
    scrollTrigger: {
      trigger: stage2.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: 0.15,
    ease: 'power3.out',
  })

  // Stage 3 - Week 8
  $gsap.set(stage3.value, { y: 40, opacity: 0 })
  $gsap.to(stage3.value, {
    scrollTrigger: {
      trigger: stage3.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: 0.3,
    ease: 'power3.out',
  })

  // Final statement fades up
  $gsap.set(finalStatement.value, { y: 40, opacity: 0 })
  $gsap.to(finalStatement.value, {
    scrollTrigger: {
      trigger: finalStatement.value,
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
