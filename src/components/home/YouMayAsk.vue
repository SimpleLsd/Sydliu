<template>
  <div class="you_may_ask">
    <div class="title">你可能想问：</div>
    <div class="questions">
      <QuestionAndAnswer
        question="你是谁？"
        answer="我是一个喜欢研究有趣的东西的人，现在我的职业是UI设计师。"
        id="1"
      />
      <QuestionAndAnswer
        question="你为什么要做这个网站？"
        answer="做一个个人网站是我的两大执念之一，通过这个网站我也可以更方便展示我的研究和作品。"
        id="2"
      />
      <QuestionAndAnswer
        question="我要如何联系到你？"
        answer="请给我发邮件，我的邮箱是：liusungti@gmail.com。"
        id="3"
      />
      <QuestionAndAnswer
        question="做这个网站花了多久"
        answer="半年。如果从零开始，你可能需要更久。注意：这并不是一件非常容易的事！"
        id="4"
      />
      <QuestionAndAnswer
        question="我需要学习哪些知识才能做出类似的网站？"
        answer="基础的Html，css和Javascript，可以通过WordPress工具快速上线自己的网站。如果你需要完全定义并掌控自己的网站，你可能还需要学习一些后端和服务器知识。当然AI也可以帮你完成这些工作。"
        id="5"
      />
      <QuestionAndAnswer
        question="我如何得知网站内容的更新？"
        answer="网站主页的第一个板块就是网站更新信息，请保持关注！"
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
@media (max-width: 767px) {
  .you_may_ask {
    gap: 20px;
  }
  .title {
    font-size: 28px;
  }
  .questions {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
