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
useHead({ titleTemplate: null })
useSeoMeta({
  title: "GRHIIT — Hard is misunderstood.",
  description: "Stop working out. Start training. Six weeks. Eighteen Sessions. Bodyweight only.",
  ogTitle: "GRHIIT — Hard is misunderstood.",
  ogDescription: "A practice of voluntary discomfort. One Cycle. One price. No subscription.",
  ogImage: "/og/og-default.jpg",
  twitterTitle: "GRHIIT — Hard is misunderstood.",
  twitterDescription: "A practice of voluntary discomfort. One Cycle. One price. No subscription.",
  twitterImage: "/og/og-default.jpg",
})
</script>
