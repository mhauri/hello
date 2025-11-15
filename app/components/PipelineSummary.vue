<template>
  <div class="bg-neutral-900 mt-8 border border-neutral-700 rounded-lg p-6">
    <span class="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-success animate-pulse"/>
      Pipeline Summary
    </span>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <p class="text-muted-foreground mb-1">Total Duration</p>
        <p class="text-foreground font-mono font-semibold">
          <TimerComponent :start="95"/>
        </p>
      </div>
      <div class="text-left md:text-right">
        <p class="text-muted-foreground mb-1">Jobs Completed</p>
        <p class="text-foreground font-mono font-semibold">5 / 7</p>
      </div>
    </div>
  </div>
</template>