<template>
  <div class="bg-obsidian min-h-screen">
    <LandingHeroSection @open-waitlist="openWaitlistModal" />
    <LandingCreedSection />
    <LandingDiffSection />
    <LandingAppScreens />
    <LandingMathSection />
    <LandingSummitSection />
    <LandingCountSection />
    <LandingLoadSection />
    <LandingIdentitySection />
    <LandingCtaSection @open-waitlist="openWaitlistModal" />
    <UiWaitlistModal
      :is-open="isWaitlistModalOpen"
      @close="closeWaitlistModal"
      @submit="handleWaitlistSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const isWaitlistModalOpen = ref(false)
const openWaitlistModal = () => { isWaitlistModalOpen.value = true }
const closeWaitlistModal = () => { isWaitlistModalOpen.value = false }
const handleWaitlistSubmit = (data: { email: string; name: string; success: boolean }) => {
  console.log('ConvertKit waitlist signup:', {
    email: data.email,
    name: data.name,
    success: data.success,
    timestamp: new Date().toISOString(),
  })
}

useHead({ titleTemplate: null })
useSeoMeta({
  title: "GRHIIT — The path of most resistance.",
  description: "A scripted bodyweight program for iPhone. Six weeks. Eighteen Sessions. Paid once. Nothing to cancel.",
  ogTitle: "GRHIIT — The path of most resistance.",
  ogDescription: "A scripted bodyweight program for iPhone. Six weeks. Eighteen Sessions. Paid once. Nothing to cancel.",
  ogImage: "https://grhiit.com/og/og-default.jpg",
  twitterTitle: "GRHIIT — The path of most resistance.",
  twitterDescription: "A scripted bodyweight program for iPhone. Six weeks. Eighteen Sessions. Paid once. Nothing to cancel.",
  twitterImage: "https://grhiit.com/og/og-default.jpg",
})
</script>
