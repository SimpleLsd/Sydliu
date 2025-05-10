<template>
  <svg :width="radius * 2" :height="radius * 2">
    <!-- 背景圆环 -->
    <circle
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      stroke="#eee"
      :stroke-width="stroke"
      fill="transparent"
    />
    <!-- 进度圆环 -->
    <g :transform="`rotate(-90 ${radius} ${radius}) `">
      <circle
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
        stroke="#30D45C"
        :stroke-width="stroke"
        fill="transparent"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        style="transition: stroke-dashoffset 0.3s ease"
      />
    </g>
  </svg>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { defineProps, computed } from 'vue'

const props = defineProps<{
  progress: number
}>()

const radius = 22
const stroke = 6
const normalizedRadius = radius - stroke / 2
const circumference = 2 * Math.PI * normalizedRadius

const dashOffset = computed(() => {
  return circumference * (1 - Math.min(Math.max(props.progress, 0), 1))
})
</script>

<style scoped></style>
