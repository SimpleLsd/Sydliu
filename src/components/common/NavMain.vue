<template>
  <div class="nav_main">
    <div class="content">
      <div class="title_group">
        <div class="title">SYDLIU.ME</div>
      </div>
      <div class="divider"></div>
      <div class="primary_text">JUL 03 / 最后更新 JUL 03</div>
      <div class="primary_text">欢迎光临，这里有我的有趣研究和产出，祝你游览开心</div>
      <div class="divider"></div>
      <div class="secondary_text">标签集合（暂不可用）</div>
      <div class="tag_group">
        <div class="tag">玩点啥 -></div>
        <div class="tag">3d打印 -></div>
        <div class="tag">技能 -></div>
        <div class="tag">设计周刊 -></div>
        <div class="tag">开发笔记 -></div>
      </div>
      <div class="divider"></div>
      <div class="secondary_text">如果你对我感兴趣（暂不可用）</div>
      <div class="contact">ABOUT ME</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content {
  position: sticky;
  top: 24px;
  z-index: 1;
  display: flex;
  flex-flow: column;
  width: 312px;
  padding: 24px;
  gap: 24px;
  color: var(--color-main);
  border: 1px solid #262626;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #262626;
}
.title {
  font-size: 36px;
  font-weight: 500;
}
.primary_text {
  font-size: 14px;
}
.secondary_text {
  font-size: 12px;
  color: #808080;
}
.tag_group {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
}
.tag {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #606060;
  opacity: 0.5;
  cursor: no-drop;
}
.contact {
  width: 100%;
  height: 48px;
  background-color: #c0c4d5;
  color: #000;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  opacity: 0.5;
  cursor: no-drop;
}
</style>
