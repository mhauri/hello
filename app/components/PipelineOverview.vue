<template>
  <div class="mb-8 bg-card border border-border rounded-lg p-12">
    <div class="flex items-start justify-between mb-4">
      <div>
        <main>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance text-foreground mb-2">I help engineering teams move faster — without breaking things.</h1>
          <p class="pb-2">Marcel Hauri, Developer Experience Engineer</p>
        </main>
        <p class="text-sm text-muted-foreground pt-5 pb-2">
          Pipeline for commit <span
            class="text-foreground font-mono bg-zinc-700 p-1 text-xs">{{ buildNumber }}</span> in <span
            class="text-foreground font-mono">main</span> branch •
          <span class="text-muted-foreground ml-1">3 stages</span> •
          <span class="text-muted-foreground ml-1">5 jobs</span>
        </p>
      </div>
    </div>

    <div class="flex gap-2">
      <a
          href="https://github.com/mhauri/hello"
          class="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
          rel="noopener noreferrer"
          target="_blank"
      >
        <Icon name="line-md:github" class="h-4 w-4"/>
        View Source
      </a>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const buildNumber = ref('#...')

onMounted(() => {
  const today = new Date()
  buildNumber.value = `#${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`
})
</script>