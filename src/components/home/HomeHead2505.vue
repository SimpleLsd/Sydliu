<template>
  <div class="main">
    <div class="article_group h1 container" @click="router.push('/articles')">
      <img src="@/assets/img/articles.png" class="img" alt="" />
      <img src="@/assets/img/articles_bg.png" class="img_bg b1" alt="" />
    </div>
    <div class="drawing_group h2 container" @click="router.push('gallery')">
      <img src="@/assets/img/drawings.png" class="img" alt="" />
      <img src="@/assets/img/drawings_bg.png" class="img_bg b2" alt="" />
    </div>
    <div class="work_group h3 container" @click="router.push('/works')">
      <img src="@/assets/img/works.png" class="img p3" alt="" />
      <img src="@/assets/img/works_bg.png" class="img_bg b3" alt="" />
    </div>
    <img src="@/assets/img/bg.png" class="bg" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.main {
  width: 100%;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  position: relative;
}
.main * {
  transition: all 0.2s ease;
}
.bg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.article_group {
  z-index: 2;
  position: absolute;
  left: 85px;
  top: 218px;
  width: 169px;
  height: 135px;
}
.drawing_group {
  z-index: 2;
  position: absolute;
  left: 232px;
  top: 181px;
  width: 287px;
  height: 157px;
}
.work_group {
  z-index: 2;
  position: absolute;
  left: 518px;
  top: 184px;
  width: 206px;
  height: 160px;
}
.img {
  position: absolute;
  top: 4px;
  left: 5px;
  z-index: 3;
}
.img_bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  transform: scale(0.8);
}
.container {
  cursor: pointer;
}
.h1:hover .b1 {
  transform: scale(1);
}
.h1:hover ~ .bg {
  opacity: 0.8;
}
.h2:hover .b2 {
  transform: scale(1);
}
.h2:hover ~ .bg {
  opacity: 0.8;
}
.h3:hover .b3 {
  transform: scale(1);
}
.h3:hover ~ .bg {
  opacity: 0.8;
}
.p3 {
  left: 4px;
  top: 7px;
}

@media (max-width: 896px) {
  .main {
    display: none;
  }
}
</style>
