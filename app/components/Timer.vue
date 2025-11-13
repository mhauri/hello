<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'

// accept a prop called "start" (default: 0 seconds)
const props = defineProps({
  start: {
    type: Number,
    default: 0
  }
})

const elapsed = ref(props.start)
let intervalId = null

// format elapsed time as "Xm Ys"
const formattedTime = computed(() => {
  const minutes = Math.floor(elapsed.value / 60)
  const seconds = elapsed.value % 60
  return `${minutes}m ${seconds}s`
})

onMounted(() => {
  intervalId = setInterval(() => {
    elapsed.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div>{{ formattedTime }}</div>
</template>
