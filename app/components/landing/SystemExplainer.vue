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
        class="max-w-4xl mx-auto text-center mb-16 md:mb-24 opacity-0"
      >
        <h2
          class="font-display font-extrabold italic text-3xl md:text-4xl lg:text-5xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal"
        >
          GRHIIT is a discipline protocol
          <span class="block mt-2 text-grhiit-white/50"
            >disguised as a workout.</span
          >
        </h2>
      </div>

      <!-- Feature grid -->
      <div class="max-w-5xl mx-auto">
        <p
          ref="introText"
          class="text-lg md:text-xl font-body text-grhiit-white/70 mb-12 max-w-2xl opacity-0"
        >
          Here's what it looks like in real life:
        </p>

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

        <!-- Engine statement -->
        <div
          ref="engineBlock"
          class="mt-16 md:mt-24 pt-12 border-t border-grhiit-white/10 opacity-0"
        >
          <div class="max-w-3xl">
            <p class="text-lg md:text-xl font-body text-grhiit-white/60 mb-6">
              You're not chasing calories burned.
            </p>
            <p
              class="text-xl md:text-2xl font-body text-grhiit-white leading-relaxed mb-8"
            >
              You're building a
              <span class="text-grhiit-red font-semibold">Squat Engine</span>
              and a
              <span class="text-grhiit-red font-semibold">Burpee Engine</span> —
              and, even more importantly, a mind that refuses to fold when
              things get uncomfortable.
            </p>
          </div>
        </div>

        <!-- App promise -->
        <div
          ref="appBlock"
          class="mt-12 md:mt-16 bg-grhiit-black-warm p-8 md:p-10 border border-grhiit-gray-800 opacity-0"
        >
          <p class="text-lg md:text-xl font-body text-grhiit-white/70 mb-6">
            The app will guide you through each interval, cue your breathing,
            and coach you through the exact moments you normally quit.
          </p>
          <p
            class="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-grhiit-white"
          >
            You just have one job:
            <span class="text-grhiit-red">show up and follow through.</span>
          </p>
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
const engineBlock = ref<HTMLElement | null>(null);
const appBlock = ref<HTMLElement | null>(null);

const features = [
  {
    title: "Bodyweight only",
    description:
      "Squat and burpee variations. <br> Mountain climbers. Push-ups. <br> Movements you can do anywhere.",
  },
  {
    title: "Short sessions",
    description:
      "Around 15 minutes — short enough to fit into a crowded day, long enough to test you.",
  },
  {
    title: "Timed intervals",
    description:
      "You work when the clock says work. <br> You rest when the clock says rest. <br> No pausing. No bargaining.",
  },
  {
    title: "Forward-only progression",
    description:
      'Once you complete a session, it\'s done. <br> No repeating. No "redo." <br> You move forward.',
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

  // Engine block
  $gsap.set(engineBlock.value, { y: 30, opacity: 0 });
  $gsap.to(engineBlock.value, {
    scrollTrigger: {
      trigger: engineBlock.value,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
  });

  // App block
  $gsap.set(appBlock.value, { y: 30, opacity: 0, scale: 0.98 });
  $gsap.to(appBlock.value, {
    scrollTrigger: {
      trigger: appBlock.value,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out",
  });
});
</script>
