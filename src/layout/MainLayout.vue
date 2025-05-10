<template>
  <div class="main_scroll">
    <div class="contents">
      <slot />
      <!-- 插槽：插入页面内容 -->
    </div>
  </div>
</template>

<style scoped>
.main_scroll {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.contents {
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 16px;
}
@media (max-width: 896px) {
  .contents {
    width: 100%;
    padding: 0 48px;
  }
}
</style>
