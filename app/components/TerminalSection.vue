<script setup lang="ts">
import { Terminal } from "lucide-vue-next"

const props = defineProps<{
  title: string
  lines: string[]
}>()
</script>

<template>
  <div class="border border-border rounded-md overflow-hidden bg-card">
    <div class="flex items-center gap-2 px-4 py-2 border-b border-border bg-neutral-700">
      <Terminal class="h-4 w-4 text-muted-foreground" />
      <span class="text-sm font-mono text-foreground">{{ props.title }}</span>
    </div>
    <div class="p-4 font-mono text-sm space-y-1">
      <div
          v-for="(line, index) in props.lines"
          :key="index"
          class="text-muted-foreground"
      >
        <span class="text-success mr-2">$</span>
        {{ line }}
      </div>
    </div>
  </div>
</template>
