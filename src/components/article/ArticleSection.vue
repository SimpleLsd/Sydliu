<template>
  <div>
    <p v-if="props.section.type === 'paragraph'">
      <SectionRichText :richTexts="props.section.typeData.rich_text" />
    </p>
    <template v-else-if="props.section.type === 'image'">
      <img :src="imageSrc" class="img" alt="" />
    </template>
    <template v-else-if="props.section.type === 'code'">
      <SectionCode :section="props.section"></SectionCode>
    </template>
    <h3 v-if="props.section.type === 'heading_3'">
      {{ props.section.typeData.rich_text[0].text?.content }}
    </h3>
    <template v-if="props.section.type === 'list'">
      <ul v-if="props.section.listType === 'bulleted_list_item'">
        <li v-for="(item, index) in props.section.items" :key="index">
          <SectionRichText :richTexts="item.typeData.rich_text" />
        </li>
      </ul>
      <ol v-if="props.section.listType === 'numbered_list_item'">
        <li v-for="(item, index) in props.section.items" :key="index">
          <SectionRichText :richTexts="item.typeData.rich_text" />
        </li>
      </ol>
    </template>
    <SectionBookmark
      v-if="props.section.type === 'bookmark' || props.section.type === 'link_preview'"
      :url="props.section.typeData.url"
    ></SectionBookmark>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { Section } from '@/interfaces/article'

import SectionBookmark from '@/components/article/SectionBookmark.vue'
import SectionCode from '@/components/article/SectionCode.vue'
import SectionRichText from '@/components/article/SectionRichText.vue'

const props = defineProps<{
  section: Section
}>()

const imageSrc = computed(() => {
  // 类型保护：确保是 ImageSection 类型，并且 typeData 包含 file 和 external 属性
  if (props.section.type === 'image' && 'file' in props.section.typeData) {
    return props.section.typeData.file.url || ''
  }
  // 如果不是 ImageSection 或没有 file 属性，则检查 external.url
  // if ('external' in props.section.typeData) {
  //   return props.section.typeData.external?.url || ''
  // }
  return ''
})
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 28px;
  text-align: justify;
}
.img {
  width: 100%;
  height: auto;
}
a.mention-link img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  position: relative;
  top: 3px;
}
h3 {
  font-size: 24px;
  font-weight: 800;
  margin: 0;
  padding: 0;
}
.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul,
ol {
  margin: 0;
  padding: 0 20px;
}
ul li,
ol li {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 32px;
}
</style>
