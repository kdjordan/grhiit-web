<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false,
})

defineEmits<{
  click: [event: Event]
}>()

// Brutalist base classes - no rounded corners, sharp edges
const baseClasses =
  'font-display font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grhiit-red focus:ring-offset-2 focus:ring-offset-grhiit-black disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary:
    'bg-grhiit-red text-grhiit-white hover:bg-grhiit-red-dark hover:shadow-glow-red active:scale-[0.98]',
  secondary:
    'bg-grhiit-gray-800 text-grhiit-white hover:bg-grhiit-gray-600 active:scale-[0.98]',
  outline:
    'border-2 border-grhiit-white/30 text-grhiit-white hover:border-grhiit-white hover:bg-grhiit-white/5 active:scale-[0.98]',
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-10 py-4.5 text-base',
}

const buttonClasses = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
])
</script>
