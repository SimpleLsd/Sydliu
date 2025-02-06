import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 读取存储的主题
const savedTheme = localStorage.getItem('theme')

if (savedTheme) {
  document.documentElement.classList.add(savedTheme)
} else {
  // 检测系统主题
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const systemTheme = prefersDark ? 'dark' : 'light'

  // 应用系统主题
  document.documentElement.classList.add(systemTheme)
  localStorage.setItem('theme', systemTheme)
}

// 监听系统主题变化，并自动应用
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (!localStorage.getItem('theme')) {
    // 仅在用户未手动选择主题时应用系统设置
    const newTheme = event.matches ? 'dark' : 'light'
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(newTheme)
  }
})

// 切换主题方法
const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains('dark')
  const newTheme = isDark ? 'light' : 'dark'

  // 移除旧主题，添加新主题
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(newTheme)

  // 存储用户选择的主题
  localStorage.setItem('theme', newTheme)
}

// 将切换主题方法挂载到全局
app.config.globalProperties.$toggleTheme = toggleTheme

app.use(createPinia())
app.use(router)
app.mount('#app')
