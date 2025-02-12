<template>
  <main class="main_scroll">
    <!-- <TheWelcome /> -->
    <div class="left_nav"></div>
    <div class="content">
      <UpdateInfo />
      <div class="divider"></div>
      <div class="section">
        <div class="section_title">置顶</div>
        <div class="items">
          <HomeArticle
            v-for="(article, index) in topArticles"
            :key="'top-' + index"
            :title="article.title"
            :coverUrl="article.coverUrl"
            :articleDate="article.articleDate"
            :tags="article.articleTags"
            :articleNum="article.articleNum"
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="section">
        <div class="section_title">文章</div>
        <div class="items">
          <HomeArticle
            v-for="(article, index) in homeArticles"
            :key="'top-' + index"
            :title="article.title"
            :coverUrl="article.coverUrl"
            :articleDate="article.articleDate"
            :tags="article.articleTags"
            :articleNum="article.articleNum"
          />
        </div>
      </div>
      <div class="divider"></div>
      <YouMayAsk />
      <GeneralFooter />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Article } from '@/interfaces/article'

import UpdateInfo from '../components/home/UpdateInfo.vue'
import HomeArticle from '../components/home/HomeArticle.vue'
import YouMayAsk from '../components/home/YouMayAsk.vue'
import GeneralFooter from '../components/common/GeneralFooter.vue'

const topArticles = ref<Article[]>([])
const homeArticles = ref<Article[]>([])

const isLoading = ref(true)
const errorMessage = ref('')

const API_AllArticles = 'https://server.sydliu.me:8088/api/articles'
const API_TopArticles = 'https://server.sydliu.me:8088/api/articles_top'

onMounted(async () => {
  try {
    const [data_allArticles, data_topArticles] = await Promise.all([
      fetch(API_AllArticles),
      fetch(API_TopArticles)
    ])

    if (!data_allArticles.ok || !data_topArticles.ok) {
      throw new Error(
        `Failed to fetch articles. All: ${data_allArticles.statusText}, Top: ${data_topArticles.statusText}`
      )
    }

    const [json_allArticles, json_topArticles] = await Promise.all([
      data_allArticles.json(),
      data_topArticles.json()
    ])

    topArticles.value = Array.isArray(json_topArticles) ? json_topArticles.slice(0, 2) : []
    homeArticles.value = Array.isArray(json_allArticles) ? json_allArticles.slice(0, 4) : []
  } catch (error) {
    errorMessage.value = 'Failed to load articles. Please try again later.'
    console.error('Error fetching articles:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.main_scroll {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(10vw, 150px) 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
}

@media (max-width: 767px) {
  .main_scroll {
    display: block;
    grid-template-columns: 1fr;
    grid-template-columns: minmax(10vw, 0) 1fr;
    width: 100%;
  }
}
.section {
  display: flex;
  flex-flow: column;
  gap: 14px;
}
.section_title {
  font-size: 24px;
  color: var(--color-main);
}
.content {
  display: flex;
  flex-flow: column;
  gap: 32px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #262626;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
</style>
