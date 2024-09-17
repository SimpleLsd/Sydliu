<template>
  <main class="main_scroll">
    <!-- <TheWelcome /> -->
    <div class="left_nav"></div>
    <div class="content">
      <UpdateInfo />
      <div class="divider"></div>
      <div class="section">
        <div class="section_title">置顶</div>
        <div class="items">
          <HomeArticle title="自制 Figma 插件 “Auto Number” 获得超过2000下载量" />
          <HomeArticle title="设计周刊 - 第12期" />
          <HomeArticle title="知识体系 - 自用服务器搭建：从硬件搭建到软件部署" />
          <HomeArticle title="入坑3D打印一年有感" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="section">
        <div class="section_title">文章</div>
        <div class="items">
          <HomeArticle title="自制 Figma 插件 “Auto Number” 获得超过2000下载量" />
          <HomeArticle title="设计周刊 - 第12期" />
          <HomeArticle title="知识体系 - 自用服务器搭建：从硬件搭建到软件部署" />
          <HomeArticle title="入坑3D打印一年有感" />
        </div>
      </div>
      <div class="divider"></div>
      <YouMayAsk />
      <GeneralFooter />
    </div>
  </main>
</template>

<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import UpdateInfo from '../components/home/UpdateInfo.vue'
import HomeArticle from '../components/home/HomeArticle.vue'
import YouMayAsk from '../components/home/YouMayAsk.vue'
import GeneralFooter from '../components/GeneralFooter.vue'
</script>

<style scoped>
.main_scroll {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(15vw, 200px) 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
}
.section {
  display: flex;
  flex-flow: column;
  gap: 14px;
}
.section_title {
  font-size: 24px;
  color: var(--color-main);
}
.content {
  display: flex;
  flex-flow: column;
  gap: 32px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #262626;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
</style>
