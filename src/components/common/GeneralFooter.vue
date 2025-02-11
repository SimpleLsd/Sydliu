<template>
  <footer class="footer">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <div class="title">S Y D L I U . M E</div>
    <div @click="scrollToTop" class="scroll-button">返回顶部 ⬆</div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
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
</style>
