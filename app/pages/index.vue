<template>
  <div class="bg-grhiit-black min-h-screen">
    <!-- Hero Section -->
    <LandingHeroSection @open-waitlist="openWaitlistModal" />

    <!-- Problem-Agitate Section -->
    <LandingProblemSection />

    <!-- Stats Row -->
    <LandingStatsRow />

    <!-- 8-Week Timeline -->
    <LandingTimelineRoadmap />

    <!-- Transformation Section -->
    <LandingTransformSection />

    <!-- CTA Section -->
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
    "Progressive bodyweight intervals. Mental discipline through sustained intensity. 220+ reps. 16 minutes. Zero equipment. Join the first 1,000.",
  ogTitle: "GRHIIT - You're Not Training. You're Just Working Out.",
  ogDescription:
    "Progressive bodyweight intervals. Mental discipline through sustained intensity. Join the first 1,000.",
})
</script>
