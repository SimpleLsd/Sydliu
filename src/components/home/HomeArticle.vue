<template>
  <div class="article">
    <div class="cover" @click="navigateToArticle">
      <img :src="coverUrl" alt="" />
    </div>
    <div class="date_tags">
      <div class="date">{{ formattedDate }}</div>
      <div class="tags">
        <div class="tag" v-for="(tag, index) in tagNames.slice(0, 3)" :key="index">{{ tag }}</div>
      </div>
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  title: string
  coverUrl: string
  articleDate: string
  tags: string[]
  articleNum: number
}>()

const tagNames = ref<string[]>([])

const formattedDate = computed(() => {
  const { articleDate } = props
  const date = new Date(articleDate)

  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${month} - ${day} - ${year}`
})

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
  tagNames.value = await Promise.all(props.tags.map(fetchTagName))
}

const navigateToArticle = () => {
  router.push(`/article/${props.articleNum}`)
}

onMounted(getTagNames)
</script>

<style scoped>
.article {
  color: var(--color-main);
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
.cover {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.cover img {
  width: 100%;
  display: block;
  position: relative;
}

.date_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags {
  display: flex;
  gap: 12px;
}

.tag {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #606060;
  cursor: pointer;
  border-radius: 4px;
}

.date {
  font-size: 12px;
}

.title {
  font-size: 24px;
  font-weight: 500;
}
</style>
