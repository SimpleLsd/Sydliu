<template>
  <HomeHeader />
  <NavTop />
  <main class="main">
    <NavMain />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeHeader from './components/home/HomeHeader.vue'
import NavMain from './components/common/NavMain.vue'
import NavTop from './components/common/NavTop.vue'
</script>

<style scoped>
.main {
  padding: 0 24px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  width: 100%;
  flex-flow: row;
  justify-content: space-between;
}

@media (max-width: 767px) {
  .main {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
