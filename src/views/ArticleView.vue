<template>
  <div class="main_scroll">
    <div class="left_nav"></div>
    <div class="content">
      <div class="head">
        <div class="left">
          <div class="date">{{ formattedDate }}</div>
          <div class="title">{{ article?.title }}</div>
          <div class="tags">
            <div class="tag" v-for="(tag, index) in article?.articleTags" :key="index">
              {{ tag }}
            </div>
          </div>
        </div>
        <div class="cover"><img :src="article?.coverUrl" /></div>
      </div>
      <img src="@/assets/logo.svg" class="top_logo" />
      <div v-for="(group, index) in groupedSections" :key="index" class="section">
        <ArticleSection :section="group" />
      </div>
      <GeneralFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import type { Article, Section, ListSection } from '@/interfaces/article'
import GeneralFooter from '@/components/common/GeneralFooter.vue'
// import ArticleSection from '@/components/article/ArticleSection.vue'

const ArticleSection = defineAsyncComponent(() => import('@/components/article/ArticleSection.vue'))

const route = useRoute()

const article = ref<Article | null>(null)
const groupedSections = ref<Section[]>([])

const formattedDate = computed(() => {
  if (!article.value?.articleDate) return ''
  const date = new Date(article.value.articleDate)

  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${month} - ${day} - ${year}`
})

const groupSections = (sections: Section[]): Section[] => {
  const groups: Section[] = []
  let currentList: ListSection | null = null

  sections.forEach((section) => {
    if (section.type === 'bulleted_list_item' || section.type === 'numbered_list_item') {
      if (currentList) {
        currentList.items.push(section)
      } else {
        currentList = {
          type: 'list',
          listType: section.type,
          items: [section]
        }
        groups.push(currentList)
      }
    } else {
      currentList = null
      groups.push(section)
    }
  })
  // console.log(groups)

  return groups
}

const fetchArticle = async () => {
  const articleNum = route.params.articleNum
  try {
    const response = await fetch(`https://server.sydliu.me:8088/api/articles/${articleNum}`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    } else {
      const fetchedArticle = await response.json()
      article.value = fetchedArticle
      groupedSections.value = groupSections(fetchedArticle.sections)
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchArticle)
</script>

<style scoped>
.main_scroll {
  width: 100%;
  color: var(--color-text-primary);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(10vw, 150px) 1fr;
  grid-auto-columns: 1fr;
}
.left_nav {
  width: 100%;
  height: 100vh;
}
.content {
  /* width: 100%; */
  min-width: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 32px;
  padding: 0 32px 0 0;
}
.head {
  width: 100%;
  display: flex;
  flex-flow: row;
  gap: 24px;
}
.left {
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
}
.cover {
  width: 100%;
}
.cover img {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}
.date {
  font-size: 16px;
}
.title {
  font-size: 32px;
}
.tags {
  display: flex;
  gap: 12px;
}
.tag {
  font-size: 14px;
  padding: 4px 8px;
  border: 1px solid #606060;
  cursor: pointer;
  border-radius: 4px;
}
.top_logo {
  width: 40px;
}
.section {
  width: 100%;
}
</style>
