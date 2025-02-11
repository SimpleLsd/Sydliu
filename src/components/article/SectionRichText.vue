<template>
  <template v-for="(richText, index) in props.richTexts" :key="index">
    <template v-if="richText.type === 'text'">
      <a
        v-if="richText.text?.link"
        :href="richText.text.link?.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="generateClasses(richText.annotations)"
      >
        {{ richText.text.content }}
      </a>
      <span v-else :class="generateClasses(richText.annotations)">
        {{ richText.text?.content }}
      </span>
    </template>
    <template v-else-if="richText.type === 'mention'">
      <a
        v-if="richText.mention?.type === 'link_mention'"
        :href="richText.mention.link_mention?.href"
        target="_blank"
        rel="noopener noreferrer"
        class="mention-link"
      >
        <img
          v-if="richText.mention.link_mention?.icon_url"
          :src="richText.mention.link_mention?.icon_url"
          alt="Link Icon"
          class="mention-icon"
        />
        {{ richText.mention.link_mention?.title || richText.plain_text }}
      </a>
    </template>
  </template>
</template>

<script setup lang="ts">
import type { RichText } from '@/interfaces/article'

const props = defineProps<{
  richTexts: RichText[]
}>()

const generateClasses = (annotations: RichText['annotations']): string => {
  const classes = []
  if (annotations.bold) classes.push('bold')
  if (annotations.italic) classes.push('italic')
  if (annotations.strikethrough) classes.push('strikethrough')
  if (annotations.underline) classes.push('underline')
  if (annotations.code) classes.push('code')
  if (annotations.color != 'default') classes.push(`text-${annotations.color}`)
  if (classes.length === 0) {
    classes.push('default')
  }
  return classes.join(' ')
}
</script>

<style scoped>
span {
  font-size: 16px;
  font-weight: 300;
}
span.default {
  margin-right: 4px;
}
span.bold {
  font-weight: bold;
}
span.italic {
  font-style: italic;
}
span.strikethrough {
  text-decoration: line-through;
}
span.underline {
  text-decoration: underline;
}
span.code {
  font-family: 'Courier New', Courier, monospace;
  background-color: var(--color-border);
  padding: 3px 6px 1px 6px;
  border-radius: 4px;
  vertical-align: middle;
}
span.text-default {
  color: inherit;
}
img.mention-icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
  position: relative;
  top: 6px;
}
</style>
