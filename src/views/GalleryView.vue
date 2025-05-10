<template>
  <MainLayout>
    <SectionTitle title="画廊" description="画画太难了" />
    <div class="gallery_grid">
      <div v-for="(img, index) in imgs" :key="'img-' + index" class="drawing border">
        <img :src="img.url" alt="" @click="navigateToDrawing(img.num)" />
      </div>
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import imgs from '@/data/imgs_temp.json'
import NewFooter from '@/components/common/NewFooter.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import MainLayout from '@/layout/MainLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDrawing = (num: number) => {
  router.push(`/drawing/${num}`)
}
</script>

<style scoped>
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
.gallery_grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  grid-auto-rows: auto;
}
.drawing {
  align-self: start;
  border-radius: 16px;
  overflow: hidden;
}
.drawing img {
  cursor: pointer;
  width: 100%;
  height: auto;
  display: block;
}
</style>
