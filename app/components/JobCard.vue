<script setup lang="ts">
import { Check, Clock, ExternalLink } from "lucide-vue-next"
import { computed } from "vue"

type Status = "passed" | "running" | "pending"

const props = defineProps<{
  name: string
  status: Status
  description?: string
  tags?: string[]
  duration?: string
  href?: string
}>()

const statusConfig = {
  passed: {
    color: "text-success",
    bgColor: "bg-success/5",
    borderColor: "border-success/20",
    icon: Check,
  },
  running: {
    color: "text-warning",
    bgColor: "bg-warning/5",
    borderColor: "border-warning/20",
    icon: Clock,
  },
  pending: {
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
    borderColor: "border-muted/40",
    icon: Clock,
  },
} as const

const config = computed(() => statusConfig[props.status])
</script>

<template>
  <div
      class="bg-black group relative border rounded-md p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      :class="[config.borderColor, config.bgColor]"
  >
    <!-- Progress bar for running -->
    <div
        v-if="props.status === 'running'"
        class="absolute top-0 left-0 right-0 h-0.5 bg-muted overflow-hidden rounded-t-md"
    >
      <div
          class="h-full w-1/4 bg-gradient-to-r from-transparent via-warning to-transparent animate-progress"
      />
    </div>

    <div class="flex items-start justify-between gap-3 mb-2">
      <div class="flex items-start gap-3 min-w-0 flex-1">
        <component :is="config.icon" class="h-4 w-4 mt-0.5 flex-shrink-0" :class="config.color" />
        <div class="min-w-0 flex-1">
          <span class="font-semibold text-foreground text-sm mb-1 font-mono">
            {{ props.name }}
          </span>
          <p
              v-if="props.description"
              class="text-sm text-muted-foreground leading-relaxed"
          >
            {{ props.description }}
          </p>
        </div>
      </div>

      <a
          v-if="props.href"
          :href="props.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          :title="props.name.split(':').pop()"
      >
        <ExternalLink class="h-4 w-4 text-muted-foreground hover:text-primary" />
      </a>
    </div>

    <div v-if="props.tags && props.tags.length" class="flex flex-wrap gap-1.5 mb-2">
      <span
          v-for="tag in props.tags"
          :key="tag"
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground"
      >
        {{ tag }}
      </span>
    </div>

    <div
        v-if="props.duration"
        class="text-xs text-muted-foreground font-mono mt-2 invisible sm:visible"
    >
      {{ props.duration }}
    </div>
  </div>
</template>
