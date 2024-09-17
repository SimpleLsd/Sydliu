<template>
  <div class="question-answer" @click="toggleActive">
    <div class="title_group">
      <div class="question">{{ question }}</div>
      <img class="arrow_icon" src="@/assets/down.svg" alt="" />
    </div>
    <p :class="{ active: isActive }">{{ answer }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject, computed } from 'vue'
import { type Ref } from 'vue'
const props = defineProps<{
  question: string
  answer: string
  id: string
}>()

const activeComponentID = inject<Ref<string | null>>('activeComponent')
const setActiveComponent = inject<(id: string | null) => void>('setActiveComponent')

if (!activeComponentID || !setActiveComponent) {
  throw new Error('activeComponentID or setActiveComponent is not provided')
}

const isActive = computed(() => activeComponentID.value === props.id)

const toggleActive = () => {
  if (isActive.value) {
    // 如果当前组件已经激活，点击时取消激活
    setActiveComponent(null)
  } else {
    // 否则激活当前组件
    setActiveComponent(props.id)
  }
}
</script>

<style scoped>
.question-answer {
  font-size: 14px;
  display: flex;
  justify-content: c;
  flex-direction: column;
  padding: 16px;
  color: var(--color-main);
  cursor: pointer;
  background-color: #1c1c1c;
}
.title_group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question {
  font-size: 14px;
  color: var(--color-main);
}
.arrew_icon {
  width: 12px;
  height: 12px;
}
p {
  padding-top: 24px;
  font-size: 12px;
}
/* p 标签的默认状态，设置 max-height 为 0 隐藏内容 */
p {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s ease-out;
  padding-top: 0;
  opacity: 0;
}

/* 当 active 类存在时，p 标签展开 */
p.active {
  max-height: 200px; /* 足够大的值以确保内容全部显示 */
  padding-top: 24px;
  opacity: 1;
}
</style>
