<template>
  <div class="main_scroll">
    <div class="left_nav"></div>
    <div class="content">
      <!-- 工作内容 -->
      <div class="works">
        <div class="title_group">
          <div class="en">Works</div>
          <div class="cn">
            工作内容- <span class="works_pc">点击前往Figma页面</span
            ><span class="works_mobile">建议使用电脑并点击前往</span>
          </div>
        </div>
        <div class="sections_grid">
          <!-- 突出区 -->
          <a
            class="works_preview sections_colored link"
            href="https://www.figma.com/design/C5vgjVM0CQ40XSkBHBl12j/"
            target="_blank"
          >
            <div class="info_group">
              <img src="@/assets/figma_logo.svg" alt="" class="figma_logo" />
              <div class="preview_title_group">
                <div class="title font_title">总览</div>
                <div class="subtitle font_subtitle">前往Figma页面查看总览和索引</div>
              </div>
              <img src="@/assets/link.svg" alt="" class="link_icon" />
            </div>
            <img :src="worksData.works_preview_img" alt="" class="preview_img" />
          </a>

          <!-- 主要区 -->
          <a
            v-for="work in worksData.figma_urls_primary"
            :key="work.title"
            class="works_secondary sections_colored link"
            target="_blank"
            @click="navigateToDetail(work.route)"
            ><div class="info_group">
              <div class="title_group">
                <div class="title font_title">{{ work.title }}</div>
                <div class="num font_subtitle">{{ work.num }}</div>
              </div>
              <img src="@/assets/link.svg" alt="" class="link_icon" />
            </div>
            <img :src="work.img" alt="" class="secondary_img" />
          </a>

          <!-- 次要区 -->
          <a
            v-for="work in worksData.figma_urls_secondary"
            :key="work.title"
            :href="work.url"
            class="works_section_below sections_colored"
            target="_blank"
            ><div class="title_group">
              <div class="title font_title">{{ work.title }}</div>
              <div class="num font_subtitle">{{ work.num }}</div>
            </div>
            <img src="@/assets/link.svg" alt="" class="link_icon" />
          </a>
        </div>
      </div>

      <!-- 个人产出 -->
      <div class="personal">
        <div class="title_group">
          <div class="en">Personal</div>
          <div class="cn">个人产出 - 点击前往站内文章页面</div>
        </div>
        <!-- 父元素布局 -->
        <div class="sections_grid">
          <!-- 左侧 -->
          <a href="" class="auto_number sections_colored link">
            <div class="title_group">
              <div class="logos">
                <img src="@/assets/figma_logo_square.svg" alt="" />
                <div class="x">×</div>
                <img src="@/assets/auto_number_logo.svg" alt="" />
              </div>
              <div class="title">3000+</div>
            </div>
            <!-- 右侧图片 -->
            <img
              src="https://server.sydliu.me:8088/statics/sydliu_me_statics/works/personal_AutoNumber_preview.png"
              alt=""
              class="auto_number_img"
            />
          </a>
          <!-- 右侧 -->
          <a href="" class="github sections_colored link">
            <div class="title_group">
              <img src="@/assets/github_logo.svg" alt="" class="github_logo" />
              <div class="title">SimpleLsd</div>
              <div class="info_group">
                <div class="info">6 Repositories</div>
              </div>
            </div>
            <!-- 右侧仓库 -->
            <div class="repositories">
              <div class="repository">
                <div class="info">
                  <div class="title">mougaitong-b</div>
                  <div class="des">无鸡汤网站后端</div>
                  <div class="lang">
                    <div class="lang_color javascript"></div>
                    <div class="lang_name">JavaScript</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>
              <div class="repository">
                <div class="info">
                  <div class="title">mougaitong-f</div>
                  <div class="des">无鸡汤网站前端</div>
                  <div class="lang">
                    <div class="lang_color vue"></div>
                    <div class="lang_name">vue</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>

              <div class="repository">
                <div class="info">
                  <div class="title">Sydliu</div>
                  <div class="des">Sydliu个人站</div>
                  <div class="lang">
                    <div class="lang_color vue"></div>
                    <div class="lang_name">vue</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>

              <div class="repository">
                <div class="info">
                  <div class="title">sydliu_me_api_server</div>
                  <div class="des">个人站后端</div>
                  <div class="lang">
                    <div class="lang_color javascript"></div>
                    <div class="lang_name">Javascript</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>

              <div class="repository">
                <div class="info">
                  <div class="title">Auto-Number</div>
                  <div class="des">Figma自动标注插件</div>
                  <div class="lang">
                    <div class="lang_color html"></div>
                    <div class="lang_name">Html</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>

              <div class="repository">
                <div class="info">
                  <div class="title">WoG_Quiz_Cheat</div>
                  <div class="des">枪炮世界作弊器</div>
                  <div class="lang">
                    <div class="lang_color python"></div>
                    <div class="lang_name">Python</div>
                  </div>
                </div>
                <div class="tag">Public</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- 图集 -->
      <div class="pictures">
        <div class="title_group">
          <div class="en">Pictures</div>
          <div class="cn">图集</div>
        </div>
        <WorksWaterfall :imgs="imgs" class="waterfall"> </WorksWaterfall>
      </div>
      <GeneralFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import WorksWaterfall from '@/components/common/WorksWaterfall.vue'
import GeneralFooter from '../components/common/GeneralFooter.vue'
const router = useRouter()

import worksData from '../../public/works.json'

const imgs = worksData.works_imgs

const navigateToDetail = (route: any) => {
  router.push(`works/${route}`)
}
</script>

<style scoped>
/* 主要区 */
.main_scroll {
  width: 100%;
  color: var(--color-main);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(10vw, 150px) 1fr;
  grid-auto-columns: 1fr;
}
.content {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 32px;
}
/* 导航栏 */
.left_nav {
  width: 100%;
  height: 100vh;
}
/* 板块标题 */
.title_group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.title_group .en {
  font-size: 36px;
  font-weight: 500;
  margin-right: 12px;
}
.title_group .cn {
  font-size: 24px;
  font-weight: 300;
}
/* 链接优化 */
.link {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}
/* 全局颜色 */
.sections_colored {
  background-color: #f0f1f6;
  border-radius: 12px;
  /* box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2) inset; */
}
/* ----------------- */
/*     工作内容区     */
/* ----------------- */
.works {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
/* 突出工作区字体 */
.font_title {
  font-weight: 600 !important;
  line-height: 1.3 !important;
  color: #222426;
}
.font_subtitle {
  font-weight: 300;
  color: #616366;
}
/* 工作区副标题显示逻辑 */
.works_pc {
  display: inline-block;
  font-weight: inherit;
}
.works_mobile {
  display: none;
  font-weight: inherit;
}
/* ----------------- */
/* 工作区网格布局定义 */
.sections_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 150px) 100px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
/* ----------------- */
/* 突出工作区子网格定义 */
.works_preview {
  position: relative;
  grid-area: 1 / 1 / 3 / 3;
  padding: 20px;
  overflow: hidden;
}
/* 突出工作区细则 */
.works_preview .info_group {
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.works_preview .info_group .figma_logo {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05));
}
.works_preview .info_group .preview_title_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 20px;
}
.works_preview .info_group .title {
  font-size: 32px;
}
.works_preview .info_group .subtitle {
  font-size: 14px;
}
.works_preview .info_group .link_icon {
  width: 24px;
  height: 24px;
}
/* --图片规则在动画区 */
/* ----------------- */
/* 次要工作区细则 */
.works_secondary {
  position: relative;
  padding: 16px;
  overflow: hidden;
}
.works_secondary .info_group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 80px;
}
.works_secondary .info_group .title_group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.works_secondary .info_group .title {
  font-size: 20px;
  font-weight: 500;
}
.works_secondary .info_group .num {
  font-size: 14px;
}
.works_secondary .info_group .link_icon {
  width: 16px;
  height: 16px;
}
/* --图片规则在动画区 */

/* 底部工作区细则 */
.works_section_below {
  position: relative;
  padding: 16px;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.works_section_below .title_group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.works_section_below .title_group .title {
  font-size: 20px;
}
.works_section_below .title_group .num {
  font-size: 14px;
}

/* ----------------- */
/*     个人产出区     */
/* ----------------- */
.personal {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
.personal .sections_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 200px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
/* 个人产出-左侧 */
.auto_number {
  position: relative;
  padding: 24px;
  overflow: hidden;
}
.auto_number .title_group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: left;
  justify-content: center;
  height: 100%;
}
.auto_number .title_group .logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.auto_number .title_group .logos .x {
  font-weight: 500;
  font-size: 12px;
  color: #0066ff;
}
.auto_number .title {
  font-size: 36px;
  color: #0066ff;
  font-weight: 600;
}

/* 个人产出-右侧 */
.github {
  position: relative;
  padding: 20px;
  overflow: hidden;
}
.github .title_group {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 4px;
  height: 100%;
}
.github .title_group .github_logo {
  width: 48px;
  height: 48px;
}
.github .title_group .title {
  font-size: 24px;
  font-weight: 400;
  color: #222426;
}
.github .title_group .info_group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.github .title_group .info_group .info {
  font-size: 14px;
  font-weight: 300;
  color: #919499;
}
.github .title_group .info_group .link {
  width: 16px;
  height: 16px;
  opacity: 0.4;
}

.repository {
  position: relative;
  padding: 7px 10px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 16px 16px 5px rgba(0, 0, 0, 0.05);
}
.repository .info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.repository .info .title {
  font-size: 10px;
  font-weight: 500;
  color: #222426;
}
.repository .info .des {
  font-size: 8px;
  font-weight: 300;
  color: #616366;
}
.repository .info .lang {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}
.repository .info .lang .lang_color {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 0.5px solid #00000010;
}
.repository .info .lang .lang_name {
  font-size: 8px;
  font-weight: 300;
  color: #616366;
}
.vue {
  background-color: #41b883;
}
.javascript {
  background-color: #f0db4f;
}
.html {
  background-color: #e34c26;
}
.python {
  background-color: #306998;
}
.repository .tag {
  font-size: 8px;
  font-weight: 300;
  color: #59636e;
  border: 1px solid #d1d9e0;
  padding: 2px 6px;
  border-radius: 20px;
}
/* ----------------- */
/*       图库区      */
/* ---------------- */
.pictures {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}

/* ------------------ */
/*      悬浮动画      */
/* ----------------- */

/* 图片原始定义区 */
.works_preview .preview_img {
  position: absolute;
  width: 332px;
  height: 560px;
  rotate: -12deg;
  right: calc(20% - 200px);
  top: 50%;
  transform: scale(1) translateY(-50%);
  transition: transform 0.3s ease;

  filter: drop-shadow(0 24px 16px rgba(0, 0, 0, 0.1));
}
.works_secondary .secondary_img {
  position: absolute;
  width: 80px;
  height: 168px;
  rotate: -12deg;
  right: calc(20% - 64px);
  top: 80%;
  transform: scale(1) translateY(-50%);
  transition: transform 0.3s ease;
  filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.2));
}
.works_section_below .link_icon {
  width: 16px;
  height: 16px;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.auto_number .auto_number_img {
  position: absolute;
  width: 260px;
  right: calc(10% - 48px);
  top: 80%;
  transform: scale(1) translateY(-52%);
  transition: transform 0.3s ease;
  /* filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0)); */
}
.repositories {
  display: grid;
  width: 332px;
  height: 216px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  position: absolute;
  right: calc(5% - 100px);
  top: 50%;
  transform: scale(1) translateY(-50%);
  transition: transform 0.3s ease;
}
/* 悬浮动画定义区 */
.works_preview:hover .preview_img {
  transform: scale(1.1) translateY(-50%);
}
.works_secondary:hover .secondary_img {
  transform: scale(1.1) translateY(-50%);
}
.works_section_below:hover .link_icon {
  opacity: 1;
}
.auto_number:hover .auto_number_img {
  transform: scale(1.1) translateY(-50%);
}
.github:hover .repositories {
  transform: scale(1.1) translateY(-50%);
}

/* ----------------- */
/*      媒体识别      */
/* ----------------- */
@media (max-width: 768px) {
  /* 基本布局 */
  .main_scroll {
    grid-template-columns: 0 1fr;
  }
  .left_nav {
    width: 0;
  }
  .content {
    padding-right: 0px !important;
  }

  /* 板块标题 */
  .title_group .en {
    font-size: 28px;
    font-weight: 600;
    margin-right: 8px;
  }
  .title_group .cn {
    font-size: 16px;
    font-weight: 400;
  }
  /* 副标题显示逻辑 */
  .works_pc {
    display: none;
  }
  .works_mobile {
    display: inline-block;
  }
  /* --------- */
  /* 主要工作区 */
  /* --------- */
  .sections_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 120px) repeat(2, 120px) repeat(2, 80px);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
  .works_preview .info_group .title {
    font-size: 28px;
  }
  .works_preview .info_group .subtitle {
    font-size: 14px;
  }
  .works_preview .info_group .link_icon {
    width: 16px;
    height: 16px;
  }
  .works_preview .preview_img {
    position: absolute;
    width: calc(332px * 0.9);
    height: calc(560px * 0.9);
    rotate: -12deg;
    right: calc(20% - 220px);
    top: 50%;
    transform: scale(1) translateY(-50%);
  }

  /* --------- */
  /* 次要工作区 */
  /* --------- */
  .works_secondary .info_group {
    width: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .works_secondary .info_group .title_group {
    gap: 0px;
  }
  .works_secondary .info_group .title {
    font-size: 16px;
  }
  .works_secondary .info_group .num {
    font-size: 12px;
  }
  .works_secondary .info_group .link_icon {
    width: 12px;
    height: 12px;
  }
  .works_secondary .secondary_img {
    position: absolute;
    width: calc(80px * 0.9);
    height: calc(168px * 0.9);
    rotate: -12deg;
    right: calc(20% - 64px);
    top: 80%;
    transform: scale(1) translateY(-50%);
  }

  /* --------- */
  /* 底部工作区 */
  /* --------- */
  .works_section_below .title_group .title {
    font-size: 16px;
  }
  .works_section_below .title_group .num {
    font-size: 12px;
  }
  .works_section_below .link_icon {
    width: 12px;
    height: 12px;
  }
  /* --------- */
  /* 个人产出区 */
  /* --------- */
  .personal .sections_grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 160px);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
  .auto_number {
    padding: 16px;
  }
  .auto_number .title_group {
    gap: 4px;
  }
  .auto_number .title_group .logos {
    gap: 4px;
  }
  .auto_number .title {
    font-size: 24px;
  }
  .auto_number .auto_number_img {
    position: absolute;
    width: calc(260px * 0.9);
    right: calc(10% - 40px);
    top: 80%;
  }
  .github {
    padding: 16px;
  }
  .github .title_group {
    gap: 4px;
  }
  .github .title_group .info_group {
    gap: 4px;
  }
  .github .title_group .github_logo {
    width: 40px;
    height: 40px;
  }
  .github .title_group .title {
    font-size: 20px;
  }
  .github .title_group .info_group .info {
    font-size: 12px;
  }
  .github .title_group .info_group .link {
    width: 12px;
    height: 12px;
  }
  .repositories {
    position: absolute;
    right: calc(5% - 120px);
    top: 50%;
    transform: scale(0.9) translateY(-50%);
  }
  /* --------- */
}
</style>
