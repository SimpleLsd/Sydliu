<template>
  <MainLayout class="main">
    <div class="head">
      <div class="left">
        <div class="date">{{ formattedDate }}</div>
        <div class="title">{{ article?.title }}</div>
        <div class="tags">
          <div class="tag" v-for="(tag, index) in tagNames.slice(0, 3)" :key="index">
            {{ tag }}
          </div>
        </div>
      </div>
      <div class="cover"><img :src="article?.coverUrl" /></div>
    </div>
    <div class="logo"><img src="@/assets/svg/nav_logo.svg" class="top_logo" /></div>

    <div v-for="(group, index) in groupedSections" :key="index" class="section">
      <ArticleSection :section="group" />
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import type { Article, Section, ListSection } from '@/interfaces/article'

import MainLayout from '@/layout/MainLayout.vue'
import NewFooter from '@/components/common/NewFooter.vue'

const ArticleSection = defineAsyncComponent(() => import('@/components/article/ArticleSection.vue'))

const route = useRoute()

const article = ref<Article | null>(null)
const groupedSections = ref<Section[]>([])

const tagNames = ref<string[]>([])

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

const fetchTagName = async (tagId: string) => {
  try {
    const response = await fetch(`https://server.sydliu.me:8088/api/get_tag_name/${tagId}`)
    const data = await response.text()
    return data
  } catch (error) {
    console.error(error)
    return tagId
  }
}

const getTagNames = async () => {
  if (!article.value || !Array.isArray(article.value.articleTags)) {
    console.error('Article tags are not available or invalid')
    return
  }

  try {
    tagNames.value = await Promise.all(article.value.articleTags.map(fetchTagName))
  } catch (error) {
    console.error('Error fetching tag names:', error)
  }
}

onMounted(async () => {
  await fetchArticle()
  await getTagNames()
  // console.log(tagNames.value)
})
</script>

<style scoped>
.main > * {
  gap: 32px;
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
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.section {
  width: 100%;
  /* padding: 0 50px; */
  padding: 0;
}
</style>
