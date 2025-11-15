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
const isMounted = ref(false)
let intervalId = null

// format elapsed time as "Xm Ys"
const formattedTime = computed(() => {
  const minutes = Math.floor(elapsed.value / 60)
  const seconds = elapsed.value % 60
  return `${minutes}m ${seconds}s`
})

onMounted(() => {
  isMounted.value = true
  intervalId = setInterval(() => {
    elapsed.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <span v-if="isMounted">{{ formattedTime }}</span>
  <span v-else>{{ formattedTime }}</span>
</template>
