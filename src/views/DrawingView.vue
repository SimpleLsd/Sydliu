<template>
  <MainLayout>
    <div class="img" @click="onenInNewTab(imgs[imgNum].url)">
      <img :src="imgs[imgNum].url" alt="" />
    </div>
    <div class="info">
      <div class="row">
        <div class="title">{{ imgs[imgNum].title }}</div>
        <div class="date">{{ imgs[imgNum].date }}</div>
      </div>
      <div class="description">{{ imgs[imgNum].description }}</div>
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layout/MainLayout.vue'
import NewFooter from '@/components/common/NewFooter.vue'

import { ref } from 'vue'
import imgs from '@/data/imgs_temp.json'

const imgNum = ref(0)

import { useRoute } from 'vue-router'
const route = useRoute()
imgNum.value = Number(route.params.galleryNum)
const onenInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank')
  if (newWindow) {
    newWindow.opener = null // 防止新窗口与当前窗口之间的引用
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  text-align: center; /* 让小图居中 */
}
.img img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  border-radius: 4px;
  cursor: zoom-in;
}
.info {
  margin-top: 16px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* border: 1px solid #f0f0f0; */
  background-color: #fafafa;
  border-radius: 16px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
}
.date {
  font-size: 16px;
  color: #666;
}
.description {
  font-size: 16px;
  font-weight: 400;
  color: #666;
}
</style>
