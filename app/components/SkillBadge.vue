<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  skill: string
  delay?: number
}>()

const isHovered = ref(false)
</script>

<template>
  <div
      class="group relative inline-block"
      :style="{ animationDelay: `${props.delay || 0}ms` }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div
        class="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all duration-300"
        :class="{
        'scale-110 border-primary bg-primary/10 text-primary': isHovered
      }"
    >
      {{ props.skill }}
    </div>
  </div>
</template>
