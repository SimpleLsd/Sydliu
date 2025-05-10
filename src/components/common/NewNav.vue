<template>
  <div ref="sidebar" class="main" :class="{ expanded: isExpanded }" @mousemove="handleMouseMove">
    <div class="top r8" @click="router.push('/')">
      <img src="@/assets/svg/nav_logo.svg" alt="" />
      <p>SYDLIU</p>
    </div>
    <div class="nav-group">
      <div
        class="link"
        :class="{ active: route.path === '/articles' }"
        @click="router.push('/articles')"
      >
        <img src="@/assets/svg/nav_articles.svg" alt="" />
        <p>文章</p>
      </div>
      <div class="link" :class="{ active: route.path === '/works' }" @click="router.push('/works')">
        <img src="@/assets/svg/nav_works.svg" alt="" />
        <p>作品集</p>
      </div>
      <div
        class="link"
        :class="{ active: route.path === '/gallery' }"
        @click="router.push('gallery')"
      >
        <img src="@/assets/svg/nav_gallery.svg" alt="" />
        <p>画廊</p>
      </div>
      <div
        class="link"
        :class="{ active: route.path === '//timeline' }"
        @click="router.push('timeline')"
      >
        <img src="@/assets/svg/nav_timeline.svg" alt="" />
        <p>时间轴</p>
      </div>
      <div class="link" :class="{ active: route.path === '/about' }" @click="router.push('/about')">
        <img src="@/assets/svg/nav_about.svg" alt="" />
        <p>关于</p>
      </div>
    </div>
    <div class="contact">
      <div class="contact_expand">
        <div class="bottom_group">
          <img src="@/assets/svg/nav_link.svg" alt="" />
          <p>联系我</p>
        </div>
        <div class="middle_group">
          <div class="wechat c_icon_container">
            <img src="@/assets/svg/nav_wechat.svg" class="wechat_normal c_icon" alt="" />
            <img src="@/assets/svg/nav_wechat_hover.svg" class="wechat_hover c_icon" alt="" />
          </div>
          <div class="qq c_icon_container">
            <img src="@/assets/svg/nav_qq.svg" class="qq_normal c_icon" alt="" />
            <img src="@/assets/svg/nav_qq_hover.svg" class="qq_hover c_icon" alt="" />
          </div>
          <div class="mail c_icon_container">
            <img src="@/assets/svg/nav_mail.svg" class="mail_normal c_icon" alt="" />
            <img src="@/assets/svg/nav_mail_hover.svg" class="mail_hover c_icon" alt="" />
          </div>
        </div>
        <div class="top_group"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const router = useRouter()
const route = useRoute()

const sidebar = ref<HTMLElement | null>(null)
const isExpanded = ref(false)

function handleMouseMove(e: MouseEvent) {
  if (!sidebar.value) return
  const rect = sidebar.value.getBoundingClientRect()
  const x = e.clientX - rect.left

  // 鼠标进入左侧 72px 区域时触发展开
  if (!isExpanded.value && x <= 72) {
    isExpanded.value = true
  }
}

// 全局监听鼠标，判断是否移出 160px 范围
function globalMouseMove(e: MouseEvent) {
  if (!sidebar.value) return
  const rect = sidebar.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const inside180 = x >= 0 && x <= 160

  if (isExpanded.value && !inside180) {
    isExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', globalMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', globalMouseMove)
})
</script>

<style scoped>
.main {
  width: 72px;
  height: 100%;
  background-color: #fcfcfc;
  border-right: 1px solid #f0f0f0;
  padding: 16px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: 300ms ease-in-out;
  overflow: hidden;
}
.main.expanded {
  width: 160px;
}
.main.expanded p {
  opacity: 1;
}
.nav-group {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.link {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: 200ms ease;
}
.link p {
  white-space: nowrap;
  width: 100px;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  overflow: hidden;
  opacity: 0;
  transition: 200ms ease;
  /* display: none; */
}
.link.active {
  background-color: #f0f0f0;
}
.link:hover {
  /* 未定颜色 */
  background-color: #f0f0f0;
}
/* <div class="top" @click="router.push('/')">
  <img src="@/assets/svg/nav_logo.svg" alt="" />
</div> */
.top {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4px;
  transition: 200ms ease;
}
.top p {
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  opacity: 1;
}
.main.expanded .top {
  padding-left: 4px;
  cursor: pointer;
}
.main.expanded .top p {
  opacity: 1;
}
.main.expanded .top:hover {
  background-color: #f0f0f0;
}
.top img {
  width: 40px;
  height: 40px;
  transition: 200ms ease;
}
.main.expanded .top img {
  width: 32px;
  height: 32px;
}
.contact {
  width: 100%;
  height: 40px;
  position: relative;
}
.contact_expand {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: 200ms ease;
  overflow: hidden;
}
.contact_expand .bottom_group {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  display: flex;
  justify-content: left;
  padding-left: 8px;
  flex-wrap: nowrap;
  align-items: center;
}
.contact_expand .middle_group {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
}
.contact_expand .middle_group .c_icon_container {
  position: relative;
  gap: -20px;
  width: 20px;
  height: 20px;
  transition: all 200ms ease;
}
.contact_expand .middle_group .c_icon_container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
.contact_expand:hover {
  background-color: #f0f0f0;
  height: 80px;
}
.contact_expand p {
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transition: 200ms ease;
}
.c_icon {
  transition: all 100ms ease;
}
.wechat_normal,
.qq_normal,
.mail_normal {
  opacity: 1;
}
.wechat_hover,
.qq_hover,
.mail_hover {
  opacity: 0;
}
.wechat:hover .wechat_normal,
.qq:hover .qq_normal,
.mail:hover .mail_normal {
  opacity: 0;
}

.wechat:hover .wechat_hover,
.qq:hover .qq_hover,
.mail:hover .mail_hover {
  opacity: 1;
}

.contact_expand:has(.wechat:hover),
.contact_expand:has(.qq:hover),
.contact_expand:has(.mail:hover) {
  height: 200px;
}
</style>
