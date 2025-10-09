<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen max-h-[800px] flex items-center bg-grhiit-black overflow-hidden px-2 pt-2">
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
          <div class="mb-6 space-y-1">
            <p class="text-lg text-white font-secondary leading-relaxed uppercase">
              You are the decision.
            </p>
            <p class="text-lg text-white font-secondary leading-relaxed uppercase">
              Every interval installs identity.
            </p>
            <h1 class="text-3xl font-primary font-bold text-grhiit-red leading-tight">
              GRHIIT builds who you become.
            </h1>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex gap-3">
            <UiGButton size="md" @click="openUiWaitlistModal">
              Join the First 1,000
            </UiGButton>
            <NuxtLink to="/program">
              <UiGButton variant="outline" size="md">
                Explore Our Method
              </UiGButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Principles - Bento Grid -->
    <!-- <section class="py-20 bg-grhiit-black">
      <div class="container mx-auto px-4">
        <div ref="bentoGrid" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiPrincipleBento
            title="Intensity"
            subtitle="Over duration"
            variant="intensity"
          />
          <UiPrincipleBento
            title="Discipline"
            subtitle="Over motivation"
            variant="discipline"
          />
          <UiPrincipleBento
            title="Consistency"
            subtitle="Over perfection"
            variant="consistency"
          />
          <UiPrincipleBento
            title="Grit"
            subtitle="Focused determination"
            variant="grit"
          />
        </div>
      </div>
    </section> -->

    <!-- What It Is -->
    <section class="py-20 bg-grhiit-black">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-primary font-bold mb-8">
              DO HARD THINGS<br>
              <span class="text-grhiit-red">ON PURPOSE</span>
            </h2>
            <div class="space-y-4 text-gray-300">
              <p class="text-lg">
                <strong class="text-white">Time-based.</strong> 20:10 / 6:3 / 60:20 intervals with progressive overload.
              </p>
              <p class="text-lg">
                <strong class="text-white">Bodyweight-only.</strong> No equipment. No excuses. Train anywhere.
              </p>
              <p class="text-lg">
                <strong class="text-white">Mental toughness.</strong> Build discipline and grit through focused effort.
              </p>
              <p class="text-lg">
                <strong class="text-white">Progressive system.</strong> 8-week cycles with measurable progress.
              </p>
            </div>
          </div>
          <div class="bg-grhiit-gray p-8 border-l-4 border-grhiit-red">
            <h3 class="text-2xl font-bold mb-4 uppercase">The Promise</h3>
            <p class="text-gray-300 mb-6">
              Show up, do the work, and we'll give you:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                Clear timers and progressions
              </li>
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                Scalable intensity for any fitness level
              </li>
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                A system that builds grit as much as capacity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats/Numbers -->
    <section class="py-20 bg-grhiit-gray">
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
    <section class="py-20 bg-grhiit-black border-t border-grhiit-gray">
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

const handleWaitlistSubmit = (data: { email: string; name: string }) => {
  // TODO: Send to backend/email service
  console.log('Waitlist signup:', data)

  // Show success message or redirect
  alert(`Thanks ${data.name}! We'll be in touch soon.`)
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