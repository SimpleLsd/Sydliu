<template>
  <div class="layout">
    <div class="nav_w">
      <new-nav />
    </div>
    <div class="nav_m">
      <NewNavMobile />
    </div>
    <div id="main">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import newNav from './components/common/NewNav.vue'
import NewNavMobile from './components/common/NewNavMobile.vue'
</script>

<style scoped>
.layout {
  width: 100%;
  /* height: 100vh; */
  /* display: flex; */
  /* flex-direction: row; */
}
.nav_w {
  position: fixed;
  z-index: 10;
  width: 72px;
  height: 100vh;
}
.nav_m {
  z-index: 10;
  display: none;
}
#main {
  /* height: auto; */
  overflow: auto;
  flex: 1;
}

@media (max-width: 1200px) {
  .layout {
    flex-direction: column;
  }
  #main {
    padding-top: 32px;
  }
  .nav_w {
    display: none;
  }
  .nav_m {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
