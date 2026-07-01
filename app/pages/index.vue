<template>
  <div class="bg-grhiit-black min-h-screen">
    <!-- Hero Section -->
    <LandingHeroSection @open-waitlist="openWaitlistModal" />

    <!-- Problem/Commitment Section -->
    <LandingProblemSection />

    <!-- What is GRHIIT / System Explainer -->
    <LandingSystemExplainer />

    <!-- 8-Week Timeline -->
    <LandingTimelineRoadmap />

    <!-- Transformation Section -->
    <LandingTransformSection />

    <!-- Final CTA Section -->
    <LandingCtaSection @open-waitlist="openWaitlistModal" />

    <!-- Waitlist Modal -->
    <UiWaitlistModal
      :is-open="isWaitlistModalOpen"
      @close="closeWaitlistModal"
      @submit="handleWaitlistSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const isWaitlistModalOpen = ref(false)

const openWaitlistModal = () => {
  isWaitlistModalOpen.value = true
}

const closeWaitlistModal = () => {
  isWaitlistModalOpen.value = false
}

const handleWaitlistSubmit = (data: { email: string; name: string; success: boolean }) => {
  console.log('ConvertKit waitlist signup:', {
    email: data.email,
    name: data.name,
    success: data.success,
    timestamp: new Date().toISOString(),
  })
}

// SEO
useSeoMeta({
  title: "GRHIIT - Hard Is Misunderstood.",
  description:
    "GRHIIT is an 8-week bodyweight practice for iOS built around sustained intensity, incomplete recovery, and forward-only progression. Start two sessions free. Unlock Cycle 1 for $24.99.",
  ogTitle: "GRHIIT - Hard Is Misunderstood.",
  ogDescription:
    "Not a workout app. An 8-week bodyweight practice that recalibrates what hard feels like. Fitness is the byproduct. Identity is the product.",
})
</script>
