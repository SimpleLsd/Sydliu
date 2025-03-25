<template>
  <div class="nav_main">
    <div class="content">
      <div class="logo-group" @click="goToHome">
        <img src="@/assets/logo-group.svg" alt="" />
      </div>
      <div class="title_group">
        <div class="title">SYDLIU.ME</div>
      </div>
      <div class="divider"></div>
      <div class="primary_text">JUL 03 / 最后更新 JUL 03</div>
      <div class="theme-toggle">
        <label class="switch">
          <input type="checkbox" v-model="isDarkMode" @change="toggleTheme" />
          <span class="slider round"></span>
        </label>
        <span>切换主题</span>
      </div>
      <div class="primary_text">欢迎光临，这里有我的有趣研究和产出，祝你游览开心</div>
      <div class="divider"></div>
      <div class="secondary_text">标签集合（暂不可用）</div>
      <div class="tag_group">
        <div class="tag">玩点啥 -></div>
        <div class="tag">3d打印 -></div>
        <div class="tag">技能 -></div>
        <div class="tag">设计周刊 -></div>
        <div class="tag">开发笔记 -></div>
      </div>
      <div class="divider"></div>
      <div class="secondary_text">如果你对我感兴趣（暂不可用）</div>
      <div class="contact">ABOUT ME</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme'
import { useGoToHome } from '@/functions/useGoToHome'
const { goToHome } = useGoToHome()

const themeStore = useThemeStore()
const isDarkMode = themeStore.isDarkMode
const toggleTheme = themeStore.toggleTheme
</script>

<style scoped>
.content {
  position: sticky;
  top: 24px;
  z-index: 1;
  display: flex;
  flex-flow: column;
  width: 312px;
  padding: 24px;
  gap: 24px;
  color: var(--color-text-primary);
  border: 1px solid var(--color-nav-border);
  background-color: var(--color-nav-bg);
}
.title_group {
  display: none;
}
.logo-group {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logo-group img {
  height: 40px;
  transition: all 0.2s ease-out;
}
.logo-group:hover img {
  height: 44px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-nav-border);
}
.title {
  font-size: 36px;
  font-weight: 500;
}
.primary_text {
  font-size: 14px;
}
.secondary_text {
  font-size: 12px;
  color: var(--color-text-secondary);
}
.tag_group {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
}
.tag {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid var(--color-nav-border);
  opacity: 0.5;
  cursor: no-drop;
}
.contact {
  width: 100%;
  height: 48px;
  background-color: var(--color-main);
  color: var(--color-background);
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  opacity: 0.5;
  cursor: no-drop;
}
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 12px;
  width: 12px;
  border-radius: 50px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(14px);
}

@media (max-width: 767px) {
  .nav_main {
    display: none;
  }
}

@media (max-width: 1279px) {
  .content {
    /* display: none; */
    width: 240px;
  }
}
</style>
