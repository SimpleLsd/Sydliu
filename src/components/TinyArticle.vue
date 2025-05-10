<template>
  <div class="main border r8" @click="navigateToArticle">
    <div class="title">
      {{ article?.title }}
    </div>
    <div class="info">
      <div class="date">{{ formattedDate }}</div>
      <div class="tag border r4" v-for="(tag, index) in tagNames.slice(0, 2)" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { Article } from '@/interfaces/article'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  articleNum: number
}>()

const article = ref<Article | null>(null)
const tagNames = ref<string[]>([])

const formattedDate = computed(() => {
  if (!article.value?.articleDate) return ''
  const date = new Date(article.value.articleDate)

  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${month} - ${day} - ${year}`
})

const fetchArticle = async () => {
  const articleNum = props.articleNum
  try {
    const response = await fetch(`https://server.sydliu.me:8088/api/articles/${articleNum}`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    } else {
      const fetchedArticle = await response.json()
      article.value = fetchedArticle
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

const navigateToArticle = () => {
  router.push(`/article/${props.articleNum}`)
}

onMounted(async () => {
  await fetchArticle()
  await getTagNames()
})
</script>

<style scoped>
.main {
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 200ms ease;
}
.main:hover {
  border: 1px solid #aaa;
}
.title {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
.info {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  color: #666;
}
.info .date {
  font-size: 14px;
  font-weight: 400;
}
.info .tag {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  padding: 4px 8px;
  cursor: pointer;
}
.info .tag:hover {
  background-color: #f0f0f0;
}
</style>
