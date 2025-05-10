<template>
  <MainLayout>
    <SectionTitle title="文章" description="就是文章，你指望这行字能有什么出其不意的表达吗？" />
    <div class="tags_tab border">
      <div class="tag border active">全部</div>
      <div class="tag border">设计</div>
      <div class="tag border">研究</div>
      此处的api还没有写好，功能暂时不可用
    </div>
    <div class="items_grid">
      <ArticlesArticle
        v-for="(article, index) in homeArticles"
        :key="'top-' + index"
        :title="article.title"
        :coverUrl="article.coverUrl"
        :articleDate="article.articleDate"
        :tags="article.articleTags"
        :articleNum="article.articleNum"
      />
    </div>

    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Article } from '@/interfaces/article'

import MainLayout from '@/layout/MainLayout.vue'

import NewFooter from '@/components/common/NewFooter.vue'
import ArticlesArticle from '@/components/ArticlesArticle.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const homeArticles = ref<Article[]>([])

const isLoading = ref(true)
const errorMessage = ref('')

const API_AllArticles = 'https://server.sydliu.me:8088/api/articles'

onMounted(async () => {
  // 获取置顶文章和全部文章
  // 保存在 topArticles 和 homeArticles 中
  try {
    const [data_allArticles] = await Promise.all([fetch(API_AllArticles)])

    if (!data_allArticles.ok) {
      throw new Error(`Failed to fetch articles. All: ${data_allArticles.statusText}`)
    }

    const [json_allArticles] = await Promise.all([data_allArticles.json()])

    homeArticles.value = Array.isArray(json_allArticles) ? json_allArticles : []
  } catch (error) {
    errorMessage.value = 'Failed to load articles. Please try again later.'
    console.error('Error fetching articles:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.border {
  border: 1px solid #f0f0f0;
}
.title_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
}
.description {
  font-size: 16px;
  font-weight: 400;
  color: #666;
}
.tags_tab {
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  border-radius: 12px;
  font-size: 14px;
  color: #999;
}
.tag {
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
}
.tag.active {
  background-color: #000;
  color: #fff;
}
.tag:hover {
  background-color: #f0f0f0;
}
.items_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 10px;
  width: 100%;
}
</style>
