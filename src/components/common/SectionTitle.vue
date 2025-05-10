<template>
  <div class="title_group">
    <div class="title">{{ props.title }}</div>
    <div class="description">{{ props.description }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.title_group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  font-size: 22px;
  font-weight: 500;
  color: #000;
}
.description {
  font-size: 16px;
  font-weight: 400;
  color: #666;
}
</style>
