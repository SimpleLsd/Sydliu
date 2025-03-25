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
    <div class="title" @click="navigateToArticle">
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
  color: var(--color-text-primary);
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
.cover {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover img {
  width: 100%;
  transition: all 0.3s ease-out;
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
  border: 1px solid var(--color-border);
  cursor: pointer;
  border-radius: 4px;
}
.date {
  font-size: 12px;
}
.title {
  opacity: 0.9;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.05s;
}
.cover:hover img {
  width: 103%;
}
.article:has(.cover:hover) .title {
  opacity: 1;
}
.title:hover {
  opacity: 1;
}
.article:has(.title:hover) .cover img {
  width: 103%;
}
@media (max-width: 767px) {
  .article {
    gap: 8px;
  }
  .date {
    font-size: 12px !important;
    opacity: 0.8;
  }
  .tags {
    display: flex;
    gap: 4px;
  }
  .tag:nth-child(n + 2) {
    display: none;
  }
  .tag {
    font-size: 12px;
    padding: 3px 6px;
    border: 1px solid var(--color-border);
    cursor: pointer;
    border-radius: 4px;
  }
  .date {
    font-size: 12px;
  }
  .title {
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
