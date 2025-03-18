<template>
  <footer class="footer">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <div class="title">S Y D L I U . M E</div>
    <div @click="scrollToTop" class="scroll-button">返回顶部 ⬆</div>
    <div class="ICP">粤ICP备2024337604号-1</div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo {
  width: 100px; /* Adjust as needed */
}

.title {
  color: var(--color-main);
  font-size: 24px;
}

.scroll-button {
  font-size: 16px;
  transition: 300ms ease-out;
  color: var(--color-text-secondary);
  border: none;
  cursor: pointer;
}

.scroll-button:hover {
  color: var(--color-text-primary);
}
@media (max-width: 767px) {
  .footer {
    padding: 10px;
  }
  .logo {
    width: 60px;
  }
  .title {
    font-size: 20px;
  }
  .scroll-button {
    font-size: 14px;
  }
}
.ICP {
  font-size: 12px;
  color: var(--color-text-secondary);
}
</style>
