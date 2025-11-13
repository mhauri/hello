<script setup lang="ts">
import { ref } from "vue"
import { ArrowUpRight } from "lucide-vue-next"

const props = defineProps<{
  title: string
  description: string
  tags: string[]
  href?: string
}>()

const isHovered = ref(false)
</script>

<template>
  <a
      :href="props.href || '#'"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative block"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div
        class="relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3
              class="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary"
          >
            {{ props.title }}
          </h3>
          <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
            {{ props.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="(tag, index) in props.tags"
                :key="index"
                class="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <ArrowUpRight
            class="h-5 w-5 text-muted-foreground transition-all duration-300"
            :class="isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''"
        />
      </div>

      <div
          class="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  </a>
</template>
