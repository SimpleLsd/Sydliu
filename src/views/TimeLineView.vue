<template>
  <MainLayout>
    <SectionTitle
      title="时间轴"
      description="记录自己做出的努力，每一阶段都会专注于主题并产出内容"
    />
    <div class="section border r20">
      <div class="progress_group p20">
        <div class="section_head">
          <div class="title_group">
            <div class="title">MAY 2025：锻炼手绘能力</div>
            <div class="description">验收标准：完成8张作品</div>
          </div>
          <div class="progress">
            <CircleProgress :progress="0.4" />
            进度
          </div>
        </div>
      </div>
      <div class="p20 g12 flex_col">
        <div class="section_content g8">
          <div class="text">作品展示：6/8</div>
          <div class="drawings">
            <div class="drawing r8 anime2" v-for="item in imgs" :key="item.title">
              <img :src="item.url" alt="" />
            </div>
            <div class="empty drawing border r8">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="empty drawing border r8">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <div class="flex_col g8">
          <div class="text">额外产出：</div>
          <TinyArticle :article-num="10" />
        </div>
      </div>
    </div>
    <div class="section border r20">
      <div class="progress_group p20">
        <div class="section_head">
          <div class="title_group">
            <div class="title">APRIL 2025：完善网站</div>
            <div class="description">验收标准：一级页面展露功能全部可用</div>
          </div>
          <div class="progress">
            <CircleProgress :progress="1" />
            进度
          </div>
        </div>
      </div>
      <div class="p20 g8 flex_col">
        <div class="section_content g8">
          <div class="text">里程碑进度：</div>
          <div class="milestones">
            <div class="milestone border r8">
              <img src="@/assets/img/Tier0.png" alt="" />
              增加首页文章加载时的动效
            </div>
            <div class="milestone border r8">
              <img src="@/assets/img/Tier1.png" alt="" />
              修改网站文字引用
            </div>
            <div class="milestone border r8">
              <img src="@/assets/img/Tier1.png" alt="" />
              完善文章页内的链接样式
            </div>
          </div>
        </div>
        <div class="flex_col g8">
          <div class="text">相关产出</div>
          <SmallArticle :article-num="10" />
          <SmallArticle :article-num="11" />
        </div>
      </div>
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import MainLayout from '@/layout/MainLayout.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import TinyArticle from '@/components/TinyArticle.vue'
import SmallArticle from '@/components/SmallArticle.vue'
import NewFooter from '@/components/common/NewFooter.vue'
import CircleProgress from '@/components/CircleProgress.vue'

import imgs from '@/data/imgs_temp.json'
</script>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
}
.section .progress_group {
  border-bottom: 1px solid #f0f0f0;
}
.section_head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title_group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.title {
  font-size: 18px;
  font-weight: 500;
  color: #000;
}
.description {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}
.section_content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.text {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}
.drawings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  grid-auto-rows: auto;
  gap: 6px;
}
.drawing {
  width: 88px;
  overflow: hidden;
  align-self: start;
  overflow: hidden;
}
.drawing:hover {
  opacity: 0.8;
}
.drawing img {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}
.empty {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.empty .circle {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #d9d9d9;
}
.milestones {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.milestone {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
}
.progress {
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  gap: 4px;
  color: #666;
}
</style>
