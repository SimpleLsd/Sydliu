<template>
  <div class="article">
    <div class="cover">
      <img src="@/assets/test_img_1.png" alt="" />
    </div>
    <div class="date_tags">
      <div class="date">MAY - 13 - 2024</div>
      <div class="tags">
        <div class="tag">open</div>
        <div class="tag">open</div>
      </div>
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style scoped>
.article {
  color: var(--color-main);
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 16px;
}
.cover {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
}

.cover img {
  width: 100%;
  display: block;
  position: relative;
}

.date_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags {
  display: flex;
  gap: 12px;
}

.tag {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #606060;
  cursor: pointer;
}

.date {
  font-size: 12px;
}

.title {
  font-size: 28px;
  font-weight: 500;
}
</style>
