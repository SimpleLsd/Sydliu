<template>
  <MainLayout>
    <SectionTitle title="关于我" description="工作记录和一些其他东西" />
    <div class="section border">
      <div class="title_group">
        <div class="title">生产力工具</div>
        <div class="description">学吧，学不完的</div>
      </div>
      <div class="tools_group">
        <div class="tool_group">
          <div class="small_title">完熟：</div>
          <div class="tools">
            <div class="tool border">
              <img src="@/assets/img/Figma.png" alt="" />
              <ToolProgress :progress="0.9" />
            </div>
          </div>
        </div>
        <div class="tool_group">
          <div class="small_title">精进：</div>
          <div class="tools">
            <div class="tool border">
              <img src="@/assets/img/Photoshop.png" alt="" />
              <ToolProgress :progress="0.8" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/Illustrator.png" alt="" />
              <ToolProgress :progress="0.85" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/After Effects.png" alt="" />
              <ToolProgress :progress="0.7" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/Premiere.png" alt="" />
              <ToolProgress :progress="0.5" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/Cinema 4D.png" alt="" />
              <ToolProgress :progress="0.5" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/M365.png" alt="" />
              <ToolProgress :progress="0.5" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/PTC Creo.png" alt="" />
              <ToolProgress :progress="0.8" />
            </div>
          </div>
        </div>
        <div class="tool_group">
          <div class="small_title">初探：</div>
          <div class="tools">
            <div class="tool border">
              <img src="@/assets/img/Fusion 360.png" alt="" />
              <ToolProgress :progress="0.3" />
            </div>
            <div class="tool border">
              <img src="@/assets/img/Blender.png" alt="" />
              <ToolProgress :progress="0.1" />
            </div>
          </div>
        </div>
      </div>
      <div class="tool_articles">
        <div class="small_title">相关产出</div>
        <ToolArticle :article-num="8"></ToolArticle>
        <ToolArticle :article-num="12"></ToolArticle>
      </div>
    </div>
    <div class="section border r20 p20">
      <div class="title_group">
        <div class="title">生涯</div>
        <div class="description">快让它更丰富一点</div>
      </div>
      <div class="career">
        <div class="title_group">
          <div class="title">2024-2025 UI设计师 + 独立开发</div>
          <div class="description">居家</div>
        </div>
        <ul>
          <li>- 个人网站：独立设计并开发个人网站，搭建服务器，优化前后端体验</li>
          <li>- 技术积累：学习并实践前端开发（Vue.js、GSAP）和后端部署 （Koa2、Nginx）</li>
          <li>- 关注并研究AI工具，探索其在生产力上能作出的贡献</li>
        </ul>
      </div>
      <div class="career">
        <div class="title_group">
          <div class="title">2020 - 2024 UI设计师</div>
          <div class="description">广州闪趣网络科技有限公司</div>
        </div>
        <ul>
          <li>- 负责[指趣游戏盒]安卓与web端产品的 UI 设计，优化界面视觉</li>
          <li>- 部分负责[指趣游戏盒]的SDK部分的UI设计</li>
          <li>- 维护和优化组件系统，提高设计效率和一致性</li>
          <li>- 设计活动页面、banner设计等营销推广素材，提高用户转化率</li>
          <li>- 开发Figma标注插件，提高工作效率</li>
          <li>- 与前端开发团队紧密合作，确保设计的落地实现</li>
        </ul>
      </div>
    </div>
    <NewFooter />
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layout/MainLayout.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ToolProgress from '@/components/ToolProgress.vue'
import ToolArticle from '@/components/TinyArticle.vue'
import NewFooter from '@/components/common/NewFooter.vue'
</script>

<style>
.section {
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
}
.title_group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
.tools_group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 16px;
}
.tool_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.small_title {
  font-size: 14px;
  font-weight: 500;
  color: #666;
}
.tools {
  display: flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: wrap;
}
.tool {
  padding-top: 10px;
  width: 64px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 4px;
}
.tool_articles {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.career {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.career .title_group {
  display: flex;
  flex-direction: column;
  gap: 0px;
}
.career .title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
}
.career .description {
  font-size: 16px;
  font-weight: 400;
  color: #000;
}

.career ul {
  list-style: none;
  padding-left: 0;
}
.career ul li {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}
</style>
