<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  className?: string
}>()

const divRef = ref<HTMLDivElement | null>(null)
const isFocused = ref(false)
const position = ref({ x: 0, y: 0 })
const opacity = ref(0)

function handleMouseMove(e: MouseEvent) {
  if (!divRef.value || isFocused.value) return
  const rect = divRef.value.getBoundingClientRect()
  position.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
}

function handleFocus() {
  isFocused.value = true
  opacity.value = 1
}

function handleBlur() {
  isFocused.value = false
  opacity.value = 0
}

function handleMouseEnter() {
  opacity.value = 1
}

function handleMouseLeave() {
  opacity.value = 0
}
</script>

<template>
  <div
      ref="divRef"
      tabindex="0"
      @mousemove="handleMouseMove"
      @focus="handleFocus"
      @blur="handleBlur"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      class="relative overflow-hidden rounded-lg border border-border bg-card"
      :class="props.className"
  >
    <div
        class="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        :style="{
        opacity: opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
      }"
    />
    <slot />
  </div>
</template>
