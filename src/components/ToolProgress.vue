<template>
  <div class="main">
    <div class="bar" :style="{ width: animatedWidth }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props = defineProps<{
  progress: number
}>()
const animatedWidth = ref('0%')

onMounted(() => {
  setTimeout(() => {
    // 设置目标宽度
    const clamped = Math.min(1, Math.max(0, props.progress))
    animatedWidth.value = `${clamped * 100}%`
  }, 300)
})
</script>

<style scoped>
.main {
  width: 50px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.bar {
  width: 0;
  height: 100%;
  transition: width 0.3s ease;
  background-color: #30d45c;
}
</style>
