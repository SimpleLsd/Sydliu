<template>
  <HomeHeader />
  <NavTop />
  <main class="main">
    <NavMain />
    <router-view :key="$route.fullPath"></router-view>
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
  width: 100%;
  padding: 0 24px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
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
