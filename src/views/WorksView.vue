<template>
  <div class="main_scroll">
    <div class="left_nav"></div>
    <div class="content">
      <div class="works">
        <div class="title_group">
          <div class="en">Works</div>
          <div class="cn">工作内容</div>
        </div>
        <div class="sections_grid">
          <a
            class="works_preview sections_colored link"
            href="https://www.figma.com/design/C5vgjVM0CQ40XSkBHBl12j/"
            target="_blank"
          >
            <div class="info_group">
              <img src="@/assets/figma_logo.svg" alt="" class="figma_logo" />
              <div class="preview_title_group">
                <div class="title font_title">总览</div>
                <div class="subtitle font_subtitle">附带作品集内索引和源设计链接</div>
              </div>
              <img src="@/assets/link.svg" alt="" class="link_icon" />
            </div>
            <img :src="worksData.works_preview_img" alt="" class="preview_img" />
          </a>

          <!-- 主要区 -->
          <a
            v-for="work in worksData.figma_urls_primary"
            :key="work.title"
            :href="work.url"
            class="works_secondary sections_colored link"
            target="_blank"
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
          <div class="cn">个人产出</div>
        </div>
        <div class="sections_grid">
          <a href="" class="auto_number sections_colored link">
            <div class="title_grop">
              <div class="logos">
                <img src="@/assets/figma_logo_square.svg" alt="" />
                <div class="x">×</div>
                <img src="@/assets/auto_number_logo.svg" alt="" />
              </div>
              <div class="title">3000+</div>
            </div>
            <img
              src="https://server.sydliu.me:8088/statics/sydliu_me_statics/works/personal_AutoNumber_preview.png"
              alt=""
              class="auto_number_img"
            />
          </a>
          <a href="" class="github sections_colored link">
            <div class="title_group">
              <img src="@/assets/github_logo.svg" alt="" class="github_logo" />
              <div class="title">SimpleLsd</div>
              <div class="info_group">
                <div class="info">6 Repositories</div>
                <img src="@/assets/link.svg" alt="" class="link" />
              </div>
            </div>
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

      <!--  -->
      <div class="pictures">
        <div class="title_group">
          <div class="en">Pictures</div>
          <div class="cn">图集</div>
        </div>
      </div>
      <WorksWaterfall :imgs="imgs"> </WorksWaterfall>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorksWaterfall from '@/components/common/WorksWaterfall.vue'
import worksData from '../../public/works.json'

const imgs = worksData.works_imgs
</script>

<style scoped>
.main_scroll {
  width: 100%;
  color: var(--color-main);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(10vw, 150px) 1fr;
  grid-auto-columns: 1fr;
}
.left_nav {
  width: 100%;
  height: 100vh;
}
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
.content {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 32px;
}
.link {
  text-decoration: none;
  color: inherit;
}
.works {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
/*  */
.font_title {
  font-weight: 600 !important;
  line-height: 1.3 !important;
  color: #222426;
}
/*  */
.font_subtitle {
  font-weight: 300;
  color: #616366;
}
.sections_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 150px) 100px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
.works_preview {
  position: relative;
  grid-area: 1 / 1 / 3 / 3;
  padding: 20px;
  overflow: hidden;
}
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
.works_preview .preview_img {
  position: absolute;
  width: 332px;
  height: 560px;
  rotate: -12deg;
  right: calc(20% - 200px);
  top: 50%;
  transform: translateY(-50%);
  filter: drop-shadow(0 24px 16px rgba(0, 0, 0, 0.1));
}
.sections_colored {
  background-color: #f0f1f6;
  border-radius: 12px;
  /* box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2) inset; */
}
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
.works_secondary .secondary_img {
  position: absolute;
  width: 80px;
  height: 168px;
  rotate: -12deg;
  right: calc(20% - 64px);
  top: 80%;
  transform: translateY(-50%);
  filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.2));
}
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
.works_section_below .link_icon {
  width: 16px;
  height: 16px;
  opacity: 0.5;
}
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
.auto_number {
  position: relative;
  padding: 24px;
  overflow: hidden;
}
.auto_number .title_grop {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: left;
  justify-content: center;
  height: 100%;
}
.auto_number .title_grop .logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.auto_number .title_grop .logos .x {
  font-weight: 500;
  font-size: 12px;
  color: #0066ff;
}
.auto_number .title {
  font-size: 36px;
  color: #0066ff;
  font-weight: 600;
}
.auto_number .auto_number_img {
  position: absolute;
  width: 260px;
  right: calc(10% - 48px);
  top: 80%;
  transform: translateY(-52%);
  filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.2));
}
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
.repositories {
  display: grid;
  width: 332px;
  height: 216px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  position: absolute;
  right: calc(5% - 54px);
  top: 50%;
  transform: translateY(-50%);
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
.pictures {
  width: 100%;
  display: flex;
  flex-flow: row;
  gap: 16px;
}
</style>
