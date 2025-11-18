<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen max-h-[800px] flex items-center overflow-hidden px-2 pt-2">
      <!-- Background Image with rounded corners -->
      <div
        class="absolute inset-2 bg-cover bg-center bg-no-repeat rounded-lg"
        style="background-image: url('/images/hero-back.webp')"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-grhiit-black/90 via-grhiit-black/60 to-transparent rounded-lg"></div>
      </div>
      
      <!-- Content -->
      <div class="absolute bottom-12 left-8 right-8 z-10">
        <div class="max-w-lg">
      
      
          
          <!-- Identity-Focused Message -->
          <div class="mb-6">
            <h1 class="text-3xl md:text-4xl font-primary font-bold text-white leading-tight">
              ALL IT TAKES IS ALL YOU GOT
            </h1>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex gap-3">
            <UiGButton size="md" @click="openUiWaitlistModal">
              Join the First 1,000
            </UiGButton>
            <NuxtLink to="/program">
              <UiGButton variant="outline" size="md">
                What we Do
              </UiGButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Identity Statement -->
    <section class="py-32">
      <div class="container mx-auto px-4">
        <h2 class="text-6xl md:text-8xl lg:text-9xl font-primary font-bold text-center leading-none tracking-tight">
          GRHIIT IS A SYSTEM FOR BUILDING IDENTITY
        </h2>
      </div>
    </section>

      <!-- Core Principles - Bento Grid -->
    <section class="py-20 bg-grhiit-black">
      <div class="container mx-auto px-4">
        <div ref="bentoGrid" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiPrincipleBento
            title="8 Week cycles"
            subtitle="Progressive Overload"
            variant="intensity"
          />
          <UiPrincipleBento
            title="BodyWeight Only"
            subtitle="Learn to move your body"
            variant="discipline"
          />
          <UiPrincipleBento
            title="Play the Game"
            subtitle="It's you vs you"
            variant="consistency"
          />
          <UiPrincipleBento
            title="Meet your limit"
            subtitle="It's not about the numbers, it's about the effort"
            variant="grit"
          />
        </div>
      </div>
    </section> 

    <!-- Stats/Numbers -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-5xl font-primary font-bold text-grhiit-red mb-2">02</div>
            <div class="text-gray-400 uppercase">Rest</div>
          </div>
          <div>
            <div class="text-5xl font-primary font-bold text-grhiit-red mb-2">20</div>
            <div class="text-gray-400 uppercase">Mindset</div>
          </div>
          <div>
            <div class="text-5xl font-primary font-bold text-grhiit-red mb-2">10</div>
            <div class="text-gray-400 uppercase">Focus</div>
          </div>
          <div>
            <div class="text-5xl font-primary font-bold text-grhiit-red mb-2">8</div>
            <div class="text-gray-400 uppercase">Week Cycles</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-primary font-bold mb-6">
          JOIN THE FIRST <span class="text-grhiit-red">1,000</span>
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get early access, live session invites, and the 8 Weeks of GRHIIT starter PDF.
        </p>
        <div class="max-w-md mx-auto">
          <UiGButton size="lg" full-width @click="openUiWaitlistModal">
            Join Now
          </UiGButton>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          One day. One second. One rep at a time.
        </p>
      </div>
    </section>

    <!-- Waitlist Modal -->
    <UiWaitlistModal 
      :is-open="isUiWaitlistModalOpen" 
      @close="closeUiWaitlistModal"
      @submit="handleWaitlistSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const isUiWaitlistModalOpen = ref(false)
const bentoGrid = ref<HTMLElement | null>(null)

const openUiWaitlistModal = () => {
  isUiWaitlistModalOpen.value = true
}

const closeUiWaitlistModal = () => {
  isUiWaitlistModalOpen.value = false
}

const handleWaitlistSubmit = (data: { email: string; name: string; success: boolean }) => {
  // Log submission to console for tracking
  console.log('ConvertKit waitlist signup:', {
    email: data.email,
    name: data.name,
    success: data.success,
    timestamp: new Date().toISOString()
  })

  // You can add additional analytics tracking here if needed
  // For example: gtag('event', 'signup', { method: 'ConvertKit' })
}

// GSAP Animations
onMounted(() => {
  // Animate bento cards on scroll
  if (bentoGrid.value) {
    const cards = bentoGrid.value.querySelectorAll('.principle-bento')

    // Set initial state
    $gsap.set(cards, {
      y: 60,
      opacity: 0,
      scale: 0.9
    })

    // Animate to visible state on scroll
    $gsap.to(cards, {
      scrollTrigger: {
        trigger: bentoGrid.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
  }
})
</script>