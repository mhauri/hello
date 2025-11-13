<script setup lang="ts">
import { Check, X, Loader2, AlertTriangle } from "lucide-vue-next"
import { computed } from "vue"

type Kind = "success" | "failed" | "running" | "warning"

const props = defineProps<{ type: Kind; label: string; compact?: boolean }>()
const compact = computed(() => props.compact ?? true)

/** Map to the exact GitLab color utilities above */
const map = {
  success: {
    icon: Check,
    pillBg: "gl-pill-success-bg",
    pillBr: "gl-pill-success-br",
    pillTx: "gl-pill-success-tx",
    dotBg:  "gl-dot-success-bg",
    dotFg:  "gl-dot-success-fg",
    spin:   false,
  },
  running: {
    icon: Loader2,
    pillBg: "gl-pill-warn-bg",
    pillBr: "gl-pill-warn-br",
    pillTx: "gl-pill-warn-tx",
    dotBg:  "gl-dot-warn-bg",
    dotFg:  "gl-dot-warn-fg",
    spin:   true,
  },
  warning: {
    icon: AlertTriangle,
    pillBg: "gl-pill-warn-bg",
    pillBr: "gl-pill-warn-br",
    pillTx: "gl-pill-warn-tx",
    dotBg:  "gl-dot-warn-bg",
    dotFg:  "gl-dot-warn-fg",
    spin:   false,
  },
  failed: {
    icon: X,
    pillBg: "gl-pill-fail-bg",
    pillBr: "gl-pill-fail-br",
    pillTx: "gl-pill-fail-tx",
    dotBg:  "gl-dot-fail-bg",
    dotFg:  "gl-dot-fail-fg",
    spin:   false,
  },
} as const

const cfg = computed(() => map[props.type])
</script>

<template>
  <span
      class="inline-flex items-center rounded-full border select-none"
      :class="[
      cfg.pillBg, cfg.pillBr, cfg.pillTx,
      compact ? 'pl-1 pr-2 py-1 text-sm' : 'pl-1 pr-3 py-0.5 text-xs'
    ]"
      role="status"
  >
    <!-- Left dark disc with icon -->
    <span
        class="grid place-items-center rounded-full mr-2"
        :class="[cfg.dotBg, cfg.dotFg, compact ? 'h-5 w-5' : 'h-6 w-6']"
        aria-hidden="true"
    >
      <component
          :is="cfg.icon"
          :class="[compact ? 'h-3.5 w-3.5' : 'h-4 w-4', cfg.spin ? 'animate-spin' : '']"
      />
    </span>
    <span class="font-medium">{{ props.label }}</span>
  </span>
</template>
