<template>
  <div class="nav_main">
    <div class="content">
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
import { ref, watch } from 'vue'

// 用于控制暗色模式和正常模式
const isDarkMode = ref(false)

// 切换主题的函数
const toggleTheme = () => {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }
}

// 监听主题变化并初始化
watch(isDarkMode, toggleTheme)

// 检查 localStorage 中的主题设置
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  isDarkMode.value = savedTheme === 'dark'
} else {
  // 如果没有保存的主题设置，检查系统的首选主题
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDarkMode.value = prefersDark
}
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
  color: var(--color-main);
  border: 1px solid #262626;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #262626;
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
  color: #808080;
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
  border: 1px solid #606060;
  opacity: 0.5;
  cursor: no-drop;
}
.contact {
  width: 100%;
  height: 48px;
  background-color: #c0c4d5;
  color: #000;
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
</style>
