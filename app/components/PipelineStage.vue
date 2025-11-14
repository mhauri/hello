<script setup lang="ts">
import { Check, Clock, Play } from "lucide-vue-next"
import { computed } from "vue"

type Status = "passed" | "running" | "pending"

const props = defineProps<{
  title: string
  status: Status
  duration?: string
}>()

const statusConfig = {
  passed: {
    icon: Check,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/30",
  },
  running: {
    icon: Play,
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/30",
  },
  pending: {
    icon: Clock,
    color: "text-muted-foreground",
    bgColor: "bg-muted/50",
    borderColor: "border-muted",
  },
} as const

const config = computed(() => statusConfig[props.status])
const numericDuration = computed(() => Number(props.duration ?? 0))

</script>

<template>
  <div class="relative">
    <!-- Connection line to next stage -->
    <div class="absolute left-5 top-12 -bottom-6 w-0.5 bg-border hidden md:block">
      <svg
          v-if="props.status === 'running'"
          class="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
      >
        <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="oklch(0.68 0.19 35)"
            stroke-width="2"
            stroke-dasharray="4 4"
            class="animate-pipeline-flow"
        />
      </svg>
    </div>

    <div class="flex gap-4 mb-6">
      <!-- Stage indicator -->
      <div
          class="flex-shrink-0 h-10 w-10 rounded-full border-2 flex items-center justify-center relative z-10"
          :class="[config.bgColor, config.borderColor]"
      >
        <component :is="config.icon" class="h-5 w-5" :class="config.color" />
        <div
            v-if="props.status === 'running'"
            class="absolute inset-0 rounded-full animate-pulse-glow"
        />
      </div>

      <!-- Stage content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-3">
          <span class="text-lg font-semibold text-foreground">{{ props.title }}</span>
          <span class="text-xs text-muted-foreground font-mono">
            <TimerComponent v-if="numericDuration === 0" :start="32" />
            <template v-else>{{ props.duration }}</template>
          </span>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
