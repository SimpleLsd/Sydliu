<template>
  <MainLayout>
    <!-- <SectionTitle title="工作产出详情" description="" /> -->

    <div
      class="works_section"
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
    <div class="routes_section">
      <div class="title">快速切换</div>
      <div class="routes_container">
        <div
          v-for="work in worksData.figma_urls_primary"
          class="route"
          :key="work.num"
          @click="navigateToDetail(work.route)"
          :class="{ current: route.path === `/works/${work.route}` }"
        >
          <div class="title">
            {{ work.title }}
            <span v-if="route.path === `/works/${work.route}`">(当前)</span>
          </div>
          <div class="num">
            {{ work.num }}
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

import MainLayout from '@/layout/MainLayout.vue'
// import SectionTitle from '@/components/common/SectionTitle.vue'
import WorksDetailSection from '@/components/common/WorksDetailSection.vue'
import NewFooter from '@/components/common/NewFooter.vue'

import data from '@/works_detail.json'
import worksData from '@/works.json'

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
const navigateToDetail = (route: any) => {
  router.push(`${route}`)
}
</script>

<style scoped>
.routes_section {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: 16px;
}
.title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}
.routes_container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  /* height: 100px; */
}
.route {
  border-radius: 12px;
  background-color: var(--color-button-tint);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 16px 24px;
}
.route .title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
}
.route .num {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-text-secondary);
}
.route:hover {
  background-color: var(--color-button-tint-hover);
}
.current {
  background-color: var(--color-gray-box);
  cursor: default;
}
.current:hover {
  background-color: var(--color-gray-box);
}

@media (max-width: 768px) {
  /* 基本布局 */
  .main_scroll {
    grid-template-columns: 0 1fr;
  }
  .left_nav {
    width: 0;
  }
  .content {
    padding-right: 0px !important;
    gap: 24px;
  }
  /* 底部导航 */
  .routes_container {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 60px 60px; */
    gap: 12px;
    /* height: 60px; */
  }
  .route {
    border-radius: 12px;
    padding: 12px 16px;
  }
  .route .title {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
  .route .num {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-text-secondary);
  }
}
</style>
