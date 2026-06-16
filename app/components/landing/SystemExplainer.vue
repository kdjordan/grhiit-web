<template>
  <section
    id="what-is-grhiit"
    ref="explainerSection"
    class="py-24 md:py-40 bg-grhiit-black relative overflow-hidden"
  >
    <!-- Subtle grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.02] pointer-events-none"
      style="
        background-image:
          linear-gradient(rgba(250, 250, 250, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(250, 250, 250, 0.1) 1px, transparent 1px);
        background-size: 60px 60px;
      "
    ></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section header -->
      <div
        ref="headerBlock"
        class="max-w-4xl mx-auto mb-16 md:mb-24 opacity-0"
      >
        <h2
          class="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-grhiit-white tracking-wide leading-brutal skew-forward"
        >
          GRHIIT RESETS
          <span class="block mt-2 text-grhiit-red">WHAT HARD MEANS.</span>
        </h2>
      </div>

      <!-- Program summary -->
      <div class="max-w-5xl mx-auto">
        <div
          ref="introText"
          class="mb-12 md:mb-16 opacity-0"
        >
          <p class="text-2xl md:text-3xl font-body text-grhiit-white/80 mb-4">
            24 sessions. 3 per week. Four movements. Maximum effort.
          </p>
          <p class="text-lg md:text-xl font-body text-grhiit-white/60">
            Zero negotiation.
          </p>
        </div>

        <!-- Feature grid -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            ref="featureCards"
            class="group relative bg-grhiit-gray-900 p-6 md:p-8 border-l-[3px] border-grhiit-red hover:bg-grhiit-gray-800/50 transition-colors duration-300 opacity-0"
          >
            <!-- Feature number -->
            <div
              class="absolute -top-3 -left-3 w-8 h-8 bg-grhiit-red flex items-center justify-center font-mono text-sm font-bold text-grhiit-white"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <h3
              class="font-display font-bold text-xl uppercase tracking-tight text-grhiit-white mb-3 mt-2"
            >
              {{ feature.title }}
            </h3>
            <p
              class="font-body text-grhiit-white/60 leading-relaxed"
              v-html="feature.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const explainerSection = ref<HTMLElement | null>(null);
const headerBlock = ref<HTMLElement | null>(null);
const introText = ref<HTMLElement | null>(null);
const featureCards = ref<HTMLElement[]>([]);

const features = [
  {
    title: "Bodyweight Only",
    description:
      "8-Count Bodybuilders. Jump Squats. Burpees. Flutter Squats.<br><br>Your body is the weight. No equipment. No excuses.",
  },
  {
    title: "Tabata Blocks",
    description:
      "The crucible where transformation happens. 20 seconds max effort, 10 seconds recovery.<br><br>Week 1: Shorter bursts, more recovery windows.<br>Week 8: Four uninterrupted minutes of maximum output.",
  },
  {
    title: "Auxiliary Rotations",
    description:
      "Before and after the Tabata blocks. Precise intervals. Smoker sets.<br><br>You finish each session proving you had more left than you thought.",
  },
  {
    title: "Forward Progression",
    description:
      "No repeats. Each session unique. Once done, it's done.<br><br>Move forward or restart the cycle.",
  },
];

onMounted(() => {
  if (!$gsap || !explainerSection.value) return;

  // Header animation
  $gsap.set(headerBlock.value, { y: 40, opacity: 0 });
  $gsap.to(headerBlock.value, {
    scrollTrigger: {
      trigger: explainerSection.value,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  });

  // Intro text
  $gsap.set(introText.value, { y: 20, opacity: 0 });
  $gsap.to(introText.value, {
    scrollTrigger: {
      trigger: introText.value,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  // Feature cards stagger
  $gsap.set(featureCards.value, { y: 40, opacity: 0 });
  $gsap.to(featureCards.value, {
    scrollTrigger: {
      trigger: featureCards.value[0],
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  });
});
</script>
