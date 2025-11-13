<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  href: string
  icon: any // use type from lucide-vue-next, but "any" works fine for dynamic <component>
  label: string
}>()

const isHovered = ref(false)
</script>

<template>
  <a
      :href="props.href"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative inline-flex items-center gap-2"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :aria-label="props.label"
  >
    <div
        class="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10"
    >
      <component
          :is="props.icon"
          class="h-5 w-5 transition-all duration-300"
          :class="isHovered ? 'scale-110 text-primary' : 'text-muted-foreground'"
      />
    </div>
    <span
        class="text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      {{ props.label }}
    </span>
  </a>
</template>
