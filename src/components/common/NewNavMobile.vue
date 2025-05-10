<template>
  <div class="main bg_blur">
    <div class="top">
      <div class="main_content">
        <div class="title" :class="{ active: route.path === '/' }" @click="router.push('/')">
          <img src="@/assets/svg/nav_logo.svg" alt="" />
          Syd Liu
        </div>
        <div class="button" @click="toggleExpand">
          <div class="bar_1"></div>
          <div class="bar_2"></div>
        </div>
      </div>
    </div>
    <div class="expand">
      <div class="expand_content">
        <div class="link_item" :class="{ active: route.path === '/' }" @click="navToRoute('/')">
          <p>主页</p>
        </div>
        <div
          class="link_item"
          :class="{ active: route.path === '/articles' }"
          @click="navToRoute('/articles')"
        >
          <p>文章</p>
        </div>
        <div
          class="link_item"
          :class="{ active: route.path === '/works' }"
          @click="navToRoute('/works')"
        >
          <p>作品集</p>
        </div>
        <div
          class="link_item"
          :class="{ active: route.path === '/gallery' }"
          @click="navToRoute('/gallery')"
        >
          <p>画廊</p>
        </div>
        <div
          class="link_item"
          :class="{ active: route.path === '/timeline' }"
          @click="navToRoute('/timeline')"
        >
          <p>时间轴</p>
        </div>
        <div
          class="link_item"
          :class="{ active: route.path === '/about' }"
          @click="navToRoute('/about')"
        >
          <p>关于</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const isExpand = ref(false)
const toggleExpand = () => {
  isExpand.value = !isExpand.value
  const button = document.querySelector('.button')
  const expand = document.querySelector('.expand')
  if (isExpand.value) {
    button?.classList.add('active')
    expand?.classList.add('active')
  } else {
    button?.classList.remove('active')
    expand?.classList.remove('active')
  }
}

const navToRoute = (path: string) => {
  if (route.path !== path) {
    router.push(path)
    toggleExpand()
  }
}
</script>

<style scoped>
.bg_blur {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* Safari 兼容 */
  background-color: rgba(249, 249, 249, 0.6); /* 半透明遮罩 */
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.top {
  width: 100%;
  height: 64px;
}
.main_content {
  margin: 0 auto;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
.title {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
}
.title img {
  margin-left: -4px;
  width: 28px;
  height: 28px;
}
.button {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.button .bar_1 {
  position: absolute;
  top: 6px;
  border-radius: 1px;
  width: 24px;
  height: 2px;
  background-color: #161616;
  transition: all 0.4s ease;
}
.button .bar_2 {
  position: absolute;
  bottom: 6px;
  border-radius: 1px;
  width: 24px;
  height: 2px;
  background-color: #161616;
  transition: all 0.4s ease;
}
.button.active .bar_1 {
  transform: rotate(45deg);
  top: 11px;
}
.button.active .bar_2 {
  transform: rotate(-45deg);
  bottom: 11px;
}
.expand {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0;
  transition: all 0.4s ease;
  z-index: 10;
  overflow: hidden;
}
.expand.active {
  height: 100vh;
}
.expand_content {
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0;
}
.link_item {
  opacity: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 8px;
  transition: 200ms ease;
}
.link_item p {
  cursor: pointer;
  white-space: nowrap;
  width: 100px;
  font-size: 32px;
  font-weight: 500;
  overflow: hidden;
}
.link_item.active p {
  color: #6d6d6d;
  cursor: default;
}
.title {
  cursor: pointer;
}
.title.active {
  cursor: default;
}
.expand.active .link_item {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.3s ease forwards;
}
.expand.active .link_item:nth-child(1) {
  animation-delay: 0.05s;
}
.expand.active .link_item:nth-child(2) {
  animation-delay: 0.1s;
}
.expand.active .link_item:nth-child(3) {
  animation-delay: 0.15s;
}
.expand.active .link_item:nth-child(4) {
  animation-delay: 0.2s;
}
.expand.active .link_item:nth-child(5) {
  animation-delay: 0.25s;
}
.expand.active .link_item:nth-child(6) {
  animation-delay: 0.3s;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 896px) {
  .main_content {
    width: 100%;
    padding: 0 40px;
  }
  .expand_content {
    width: 100%;
    padding: 16px 40px;
  }
}
</style>
