<template>
  <div class="article border" @click="navigateToArticle">
    <div class="cover">
      <img :src="article?.coverUrl" alt="" />
    </div>
    <div class="info-group">
      <div class="date_tags">
        <div class="date">{{ formattedDate }}</div>
        <div class="tags">
          <div class="tag" v-for="(tag, index) in tagNames.slice(0, 2)" :key="index">{{ tag }}</div>
        </div>
      </div>
      <div class="title">
        {{ article?.title }}
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
.border {
  border: 1px solid #f0f0f0;
}
.article {
  padding: 12px;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  cursor: pointer;
  transition: 200ms ease;
}
.article:hover {
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid #aaa;
}
.cover {
  width: 80px;
  height: 80px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
}
.info-group {
  flex: 1;
  display: flex;
  gap: 4px;
  flex-direction: column;
}
.date_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
}
.date {
  margin-top: 1px;
  font-size: 12px;
}
.tags {
  display: flex;
  gap: 8px;
}
.tag {
  font-size: 12px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  border-radius: 4px;
  font-size: 400;
}
.date {
  font-size: 12px;
}
.title {
  color: #000;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.05s;
  text-align: justify;
}
</style>
