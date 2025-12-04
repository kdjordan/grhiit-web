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
  title: "GRHIIT - You're Not Training. You're Just Working Out.",
  description:
    "GRHIIT is a bodyweight-only training system built to turn you into the kind of person who does hard things on purpose. Short, brutal intervals. No equipment. No hiding. Join the first 1,000.",
  ogTitle: "GRHIIT - You're Not Training. You're Just Working Out.",
  ogDescription:
    "A bodyweight-only training system. Short, brutal intervals. No equipment. No hiding. Join the first 1,000 founding members.",
})
</script>
