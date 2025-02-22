<template>
  <a v-if="!bookmarkData?.isGitHub" :href="bookmarkData?.url" target="_blank" class="url_block">
    <div v-if="bookmarkData?.title" class="title">{{ bookmarkData?.title }}</div>
    <div v-else class="title">点击前往</div>
    <div v-if="bookmarkData?.description">{{ bookmarkData?.description }}</div>
    <div class="link_group">
      <img v-if="bookmarkData?.favicon" :src="bookmarkData?.favicon" alt="favicon" />
      <IconLink v-else class="favicon"></IconLink>
      <div>{{ props.url }}</div>
    </div>
  </a>
  <a v-else :href="bookmarkData?.url" target="_blank" class="url_block">
    <div class="title">{{ bookmarkData?.title }}</div>
    <div>{{ bookmarkData?.description }}</div>
    <div class="link_group">
      <div v-if="bookmarkData?.favicon">
        <img :src="bookmarkData?.favicon" alt="" />
      </div>
      <div>{{ props.url }}</div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import IconLink from '@/components/icons/IconLink.vue'

const props = defineProps<{
  url: string
}>()

const bookmarkData = ref<{
  title: string
  description: string
  favicon: string
  url: string
  avatar: string // 用户头像
  username: string // 用户名
  updatedAt: string // 更新时间
  isGitHub: boolean
} | null>(null)

const fetchBookmarkDetails = async (url: string) => {
  try {
    const encodedUrl = encodeURIComponent(url)
    const { data } = await axios.get(`https://server.sydliu.me:8088/api/proxy`, {
      params: { url: encodedUrl }
    })
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')

    // 判断是否是 GitHub 链接
    const isGitHub = /github\.com/.test(url)

    let favicon =
      doc.querySelector('link[rel="icon"]')?.getAttribute('href') ||
      doc.querySelector('link[rel="shortcut icon"]')?.getAttribute('href')

    if (favicon && !favicon.startsWith('http')) {
      const baseUrl = new URL(url).origin
      favicon = new URL(favicon, baseUrl).href
    } else if (!favicon) {
      favicon = `${new URL(url).origin}/favicon.ico`
    }

    // 提取网站标题
    const title =
      doc.querySelector('title')?.textContent ||
      doc.querySelector('meta[property="og:site_name"]')?.getAttribute('content') ||
      ''

    // 提取描述文字
    const description =
      doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
      doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      ''

    const bookmark = {
      title,
      description,
      favicon,
      url,
      avatar: '',
      username: '',
      updatedAt: '',
      isGitHub: false
    }

    if (isGitHub) {
      // 提取 GitHub 用户头像
      const avatar =
        doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
        doc.querySelector('img.avatar-user')?.getAttribute('src') ||
        ''

      // 提取 GitHub 用户名
      const username =
        doc.querySelector('meta[name="author"]')?.getAttribute('content') ||
        doc.querySelector('h1 strong a')?.textContent?.trim() ||
        doc.querySelector('span[itemprop="additionalName"]')?.textContent?.trim() ||
        ''

      // 提取更新时间
      const updatedAt =
        doc.querySelector('relative-time')?.getAttribute('datetime') ||
        doc.querySelector('time-ago')?.getAttribute('datetime') ||
        ''

      // 保存到 bookmark 对象
      bookmark.avatar = avatar
      bookmark.username = username
      bookmark.updatedAt = updatedAt
      bookmark.isGitHub = true
    }

    bookmarkData.value = bookmark
  } catch (error) {
    console.error('Error fetching bookmark details:', error)
  }
}

// 在 `props.section.typeData.link.url` 存在时请求数据
onMounted(() => {
  fetchBookmarkDetails(props.url)
})
</script>

<style scoped>
.url_block {
  display: flex;
  flex-flow: column;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  /* background-color: var(--color-gray-box); */
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  cursor: pointer;
}
.url_block:hover {
  /* background-color: var(--color-bg-light-hover); */
  background-color: var(--color-gray-box);
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.link_group {
  display: flex;
  gap: 8px;
  align-items: center;
}
.link_group img {
  width: 16px;
  height: 16px;
}
.favicon {
  width: 20px;
  height: 20px;
}
/* img {
  width: 20px;
  height: auto;
} */
</style>
