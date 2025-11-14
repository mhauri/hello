<script setup lang="ts">
import { Activity, GitBranch, Clock } from "lucide-vue-next"
</script>

<template>
  <div class="border-b border-border bg-card">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <div
                class="h-8 w-8 rounded-sm  flex items-center justify-center font-mono font-bold text-primary-foreground"
            >
              <img
                  src="/images/apple-touch-icon.png"
                  alt="Logo"
                  class="h-8 w-8"
              />
            </div>
            <div>
              <span class="text-sm font-semibold text-foreground">
                mhauri / hello
              </span>
              <div class="flex items-center gap-2 text-xs text-muted-foreground">
                <GitBranch class="h-3 w-3" />
                <span>main</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity class="h-4 w-4 gl-dot-warn-fg" />
            <span class="gl-dot-warn-fg font-medium">running</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock class="h-3 w-3" />
            <span><TimerComponent :start="93"/></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
