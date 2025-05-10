<template>
  <div class="article border">
    <div class="cover">
      <img :src="coverUrl" alt="" />
    </div>
    <div class="date_tags">
      <div class="date">{{ props.date }}</div>
      <div class="tags">
        <!-- <div class="tag" v-for="(tag, index) in tagNames.slice(0, 2)" :key="index">{{ tag }}</div> -->
      </div>
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  coverUrl: string
  date: string
}>()
</script>

<style scoped>
.border {
  border: 1px solid #f0f0f0;
}
.article {
  width: 100%;
  padding: 16px 16px 12px 16px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  border-radius: 16px;
  cursor: pointer;
  transition: 200ms ease;
}
.article:hover {
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid #aaa;
}
.cover {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover img {
  width: 100%;
  transition: all 0.3s ease-out;
}
.date_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  margin-top: 6px;
}
.date {
  margin-top: 1px;
  font-size: 12px;
}
.tags {
  display: flex;
  opacity: 0;
  gap: 8px;
}
.tag {
  font-size: 12px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  border-radius: 4px;
  font-size: 400;
}
.date {
  font-size: 12px;
}
.title {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.05s;
  text-align: justify;
}
</style>
