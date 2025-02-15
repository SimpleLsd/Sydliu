import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)
  isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  // console.log(isDarkMode.value)

  // 切换主题的函数
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    const theme = isDarkMode.value ? 'dark' : 'light'
    document.body.classList.toggle('dark-mode', isDarkMode.value)
    document.body.classList.toggle('light-mode', !isDarkMode.value)
    localStorage.setItem('theme', theme)
  }

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      // 如果没有保存的主题设置，检查系统的首选主题
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDarkMode.value = prefersDark
    }
    // 初始化时更新 body 的类
    document.body.classList.toggle('dark-mode', isDarkMode.value)
    document.body.classList.toggle('light-mode', !isDarkMode.value)
  }

  initTheme()

  return { isDarkMode, toggleTheme }
})
