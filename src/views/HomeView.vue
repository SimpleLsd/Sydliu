<template>
  <div class="main_scroll">
    <div class="contents">
      <HomeHead2505 />
      <div class="texts">
        <div class="title">你好，这里是Syd的网站</div>
        <div class="description">
          我研究设计和其技术实现，立志成为全栈设计师，目前在广州生活，正在求职中。
        </div>
        <div class="works-link border">
          作品集
          <img src="@/assets/svg/arrow_right_16.svg" alt="" />
        </div>
      </div>
      <div class="section">
        <div class="title">置顶</div>
        <div class="items_grid article_top">
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
      <div class="section">
        <div class="title section-title">
          文章
          <div class="more border">
            View all
            <img src="@/assets/svg/arrow_right_16.svg" alt="" />
          </div>
        </div>
        <div class="items_grid">
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
      <div class="section">
        <div class="title section-title">
          画廊
          <div class="more border">
            View all
            <img src="@/assets/svg/arrow_right_16.svg" alt="" />
          </div>
        </div>
        <div class="items_grid">
          <div
            class="home-img"
            v-for="item in imgs"
            :key="item.title"
            @click="navigateToDrawing(item.num)"
          >
            <HomeDrawing :title="item.title" :coverUrl="item.url" :date="item.date" />
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Article } from '@/interfaces/article'
import { useRouter } from 'vue-router'

const router = useRouter()

import HomeHead2505 from '@/components/home/HomeHead2505.vue'
import HomeArticle from '../components/home/HomeArticle.vue'
import HomeDrawing from '../components/home/HomeDrawing.vue'
import NewFooter from '@/components/common/NewFooter.vue'

import imgs from '@/data/imgs_temp.json'

const topArticles = ref<Article[]>([])
const homeArticles = ref<Article[]>([])

const isLoading = ref(true)
const errorMessage = ref('')

const API_AllArticles = 'https://server.sydliu.me:8088/api/articles'
const API_TopArticles = 'https://server.sydliu.me:8088/api/articles_top'

const navigateToDrawing = (num: number) => {
  router.push(`/drawing/${num}`)
}

onMounted(async () => {
  // 获取置顶文章和全部文章
  // 保存在 topArticles 和 homeArticles 中
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

    topArticles.value = Array.isArray(json_topArticles) ? json_topArticles.slice(0, 3) : []
    homeArticles.value = Array.isArray(json_allArticles) ? json_allArticles.slice(0, 6) : []
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.contents {
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 32px;
}
.border {
  border: 1px solid #f0f0f0;
}
.drawing {
  width: 100%;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
}
.drawing img {
  width: 100%;
  height: 100%;
  display: block;
}
.texts {
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
.works-link {
  width: 96px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  transition: 200ms ease;
}
.works-link:hover {
  /* 未定颜色 */
  background-color: #f0f0f0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.items_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  width: 100%;
}
.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.more {
  width: 92px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  transition: 200ms ease;
}
.more:hover {
  /* 未定颜色 */
  /* background-color: #f0f0f0; */
  border: 1px solid #000;
}

@media (max-width: 896px) {
  .contents {
    width: 100%;
    padding: 0 48px;
  }
  .article_top :nth-child(3) {
    display: none;
  }
}
</style>
