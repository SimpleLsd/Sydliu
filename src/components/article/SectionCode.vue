<template>
  <div class="main">
    <div class="head">
      <div class="language">{{ props.section.typeData.language }}</div>
      <div class="copy unselectable" @click="copyCode">复制代码</div>
    </div>
    <pre v-for="(richText, index) in props.section.typeData.rich_text" :key="index">
  <code :class="`language-${getLanguage}`">{{ richText.text?.content || ''}}</code>
</pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, computed } from 'vue'
import type { CodeSection } from '@/interfaces/article'

import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps<{
  section: CodeSection
}>()

const copyCode = () => {
  const code = props.section.typeData.rich_text.map((richText) => richText.text?.content).join('\n')
  navigator.clipboard.writeText(code)
}

const getLanguage = computed(() => {
  let language = ''
  if (props.section.typeData.language === 'plain text') {
    language = 'shell'
  } else {
    language = props.section.typeData.language
  }
  return language
})

onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    const element = block as HTMLElement

    // 如果该元素已经高亮过，跳过
    if (element.dataset.highlighted) return

    // 使用 highlightElement 进行高亮
    hljs.highlightElement(element)
    element.dataset.highlighted = 'true' // 标记为已高亮
  })
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--color-code-bg);
  color: var(--color-text-secondary);
}
.copy {
  color: inherit;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
}
pre,
code {
  padding-top: 0 !important;
  background-color: var(--color-code-bg);
}
</style>
