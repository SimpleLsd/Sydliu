<template>
  <HomeHeader />
  <main class="main">
    <NavMain />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeHeader from './components/home/HomeHeader.vue'
import NavMain from './components/common/NavMain.vue'
</script>

<style scoped>
.main {
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

/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}  
*/
</style>
