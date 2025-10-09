# GSAP Usage Guide

## Installation

GSAP is installed and configured in the GrHiit project using `@hypernym/nuxt-gsap`.

```bash
npm install gsap @hypernym/nuxt-gsap
```

## Configuration

Added to `nuxt.config.ts`:

```typescript
modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"]
```

The module uses zero-config setup, making GSAP immediately available globally.

## Usage Patterns

### Basic Animation

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()
const element = ref<HTMLElement | null>(null)

onMounted(() => {
  $gsap.to(element.value, {
    x: 100,
    rotation: 360,
    duration: 1,
    ease: 'power2.inOut'
  })
})
</script>
```

### Stagger Animations

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()

const animateItems = () => {
  $gsap.to('.items', {
    y: -50,
    rotation: 360,
    duration: 0.8,
    stagger: 0.1, // 0.1s delay between each
    ease: 'back.out(1.7)'
  })
}
</script>
```

### Timeline Sequences

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()

const playSequence = () => {
  const tl = $gsap.timeline()

  tl.to('.box1', { x: 100, duration: 0.5 })
    .to('.box2', { x: 100, rotation: 180, duration: 0.5 }, '-=0.2')
    .to('.box3', { x: 100, scale: 1.5, duration: 0.5 }, '-=0.2')
}
</script>
```

### ScrollTrigger (Advanced)

For scroll-based animations, enable ScrollTrigger plugin:

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  if ($gsap.ScrollTrigger) {
    $gsap.from('.animate-on-scroll', {
      scrollTrigger: {
        trigger: '.animate-on-scroll',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1
    })
  }
})
</script>
```

## Common Eases

- `power1.inOut` - Smooth acceleration and deceleration
- `power2.out` - Quick start, slow end
- `back.out(1.7)` - Overshoot effect (great for bounce)
- `elastic.out(1, 0.5)` - Elastic bounce
- `bounce.out` - Bouncing effect

## Best Practices

### 1. SSG/SSR Compatibility

Always wrap animations in `onMounted()` to ensure they run client-side only:

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  // Safe for SSG/SSR
  $gsap.to('.element', { x: 100 })
})
</script>
```

### 2. Template Refs

Use typed refs for TypeScript safety:

```vue
<template>
  <div ref="box" class="box">Animate me</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
const box = ref<HTMLElement | null>(null)

onMounted(() => {
  if (box.value) {
    $gsap.to(box.value, { x: 100 })
  }
})
</script>
```

### 3. Cleanup

GSAP automatically handles cleanup, but for complex timelines:

```vue
<script setup lang="ts">
const { $gsap } = useNuxtApp()
let timeline: GSAPTimeline | null = null

onMounted(() => {
  timeline = $gsap.timeline()
  // ... animations
})

onUnmounted(() => {
  timeline?.kill()
})
</script>
```

### 4. Performance

- Use `will-change` CSS property for elements that will animate
- Prefer `x`, `y` over `left`, `top` (uses transforms, hardware accelerated)
- Use `autoAlpha` instead of `opacity` for better performance

```vue
<style scoped>
.animated-element {
  will-change: transform;
}
</style>
```

## Demo Component

See `app/components/animations/GsapDemo.vue` for working examples.

## Demo Page

Visit `/animations-demo` to see interactive examples.

## Resources

- [GSAP Docs](https://gsap.com/docs/v3/)
- [Nuxt GSAP Module](https://github.com/hypernym-studio/nuxt-gsap)
- [GSAP Easing Visualizer](https://gsap.com/docs/v3/Eases)

## Fitness App Use Cases

### Hero Animations
- Fade in hero text on page load
- Animated stat counters
- Scroll-reveal sections

### Interactive Elements
- Button hover effects
- Card flip animations
- Progress bar animations

### Page Transitions
- Smooth route transitions
- Modal entrance/exit animations
- Menu slide-in/out

### Workout Timers
- Countdown animations
- Progress circles
- Exercise transition effects

---

**Last Updated**: January 2025
**Status**: ✅ Fully operational with zero-config setup
