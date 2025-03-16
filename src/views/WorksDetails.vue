<template>
  <div class="main_scroll">
    <div class="left_nav"></div>
    <div class="content">
      <div
        class="section"
        v-for="(work, index) in worksPreviewData"
        :key="work.name"
        :ref="(el) => (sections[index] = el as HTMLElement | null)"
      >
        <WorksDetailSection
          :work="work"
          :goToNext="() => scrollToSection(index + 1)"
          :goToPrev="() => scrollToSection(index - 1)"
          :isFirst="index === 0"
          :isLast="index === worksPreviewData.length - 1"
        />
      </div>
      <GeneralFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import WorksDetailSection from '@/components/common/WorksDetailSection.vue'
import GeneralFooter from '@/components/common/GeneralFooter.vue'

import data from '../../public/works_detail.json'
import worksData from '../../public/works.json'

const route = useRoute()
const key = route.params.worksDetails as keyof typeof data
const worksPreviewData = computed(() => data[key] || null)

const sections = ref<(HTMLElement | null)[]>([])

// 滚动到下一个 section
const scrollToSection = (index: number) => {
  if (index < sections.value.length) {
    sections.value[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.main_scroll {
  width: 100%;
  color: var(--color-main);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(10vw, 150px) 1fr;
  grid-auto-columns: 1fr;
}
.content {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: 32px;
}
.section {
  width: 100%;
}

/* 导航栏 */
.left_nav {
  width: 100%;
  height: 100vh;
}
</style>
