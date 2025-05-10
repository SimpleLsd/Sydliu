<template>
  <footer class="footer">
    <img src="@/assets/svg/nav_logo.svg" alt="Logo" class="logo" />
    <div class="title">S Y D L I U . M E</div>
    <div @click="scrollToTop" class="scroll-button">返回顶部</div>
    <div class="ICP">粤ICP备2024337604号-1</div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  const container = document.getElementById('main')
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 40px 0px;
}
.logo {
  width: 100px; /* Adjust as needed */
}
.title {
  color: #000;
  font-size: 24px;
}
.scroll-button {
  font-size: 16px;
  transition: 300ms ease-out;
  color: #666;
  border: none;
  cursor: pointer;
}
.scroll-button:hover {
  color: #000;
}
.ICP {
  font-size: 12px;
  color: var(--color-text-secondary);
}
</style>
