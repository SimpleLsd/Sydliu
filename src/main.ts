import './assets/main.css'

import { createApp, ref, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 用于控制暗色模式和正常模式
const isDarkMode = ref(false)

// 切换主题的函数
const toggleTheme = () => {
  const theme = isDarkMode.value ? 'dark' : 'light'
  document.body.classList.toggle('dark-mode', isDarkMode.value)
  document.body.classList.toggle('light-mode', !isDarkMode.value)
  localStorage.setItem('theme', theme)
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

app.provide('$toggleTheme', toggleTheme)
app.provide('$isDarkMode', isDarkMode)

app.use(createPinia())
app.use(router)
app.mount('#app')
