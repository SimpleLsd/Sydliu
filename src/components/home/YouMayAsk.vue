<template>
  <div class="you_may_ask">
    <div class="title">你可能想问：</div>
    <div class="questions">
      <QuestionAndAnswer question="你是谁？" answer="Vue 3 是一款流行的前端框架。" id="1" />
      <QuestionAndAnswer
        question="你为什么要做这个网站？"
        answer="Vue 3 是一款流行的前端框架。"
        id="2"
      />
      <QuestionAndAnswer
        question="我要如何联系到你？"
        answer="Vue 3 是一款流行的前端框架。"
        id="3"
      />
      <QuestionAndAnswer
        question="做这个网站花了多久"
        answer="Vue 3 是一款流行的前端框架。"
        id="4"
      />
      <QuestionAndAnswer
        question="我需要学习哪些知识才能做出类似的网站？"
        answer="Vue 3 是一款流行的前端框架。"
        id="5"
      />
      <QuestionAndAnswer
        question="我如何得知网站内容的更新？"
        answer="Vue 3 是一款流行的前端框架。"
        id="6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionAndAnswer from '@/components/home/QuestionAndAnswer.vue'
import { provide, ref } from 'vue'

const activeComponent = ref(null)

provide('activeComponent', activeComponent)
provide('setActiveComponent', (id: any) => {
  activeComponent.value = id
})
</script>

<style scoped>
.you_may_ask {
  display: flex;
  flex-flow: column;
  gap: 40px;
}
.title {
  font-size: 48px;
  color: var(--color-text-primary);
}
.questions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  align-items: start;
  gap: 16px;
}
</style>
