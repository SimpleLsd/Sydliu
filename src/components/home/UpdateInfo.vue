<template>
  <div class="website_update_info">
    <div class="t">May 13</div>
    <div class="b">
      <div class="l">给网站增加了交互底纹，鼠标在空白处移动时可以触发底纹变化</div>
      <div class="r">
        View Details
        <div class="view_details">
          查看详情
          <img src="@/assets/view_details.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="section"></div>
</template>

<script lang="ts" setup></script>

<style scoped>
.website_update_info {
  display: flex;
  flex-flow: column;
  gap: 32px;
}
.website_update_info .t {
  font-size: 18px;
  color: #808080;
}
.website_update_info .b {
  display: flex;
  flex-flow: row;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-end;
}
.website_update_info .b .l {
  font-size: 48px;
  color: var(--color-main);
  line-height: 1.4;
  flex: 1;
}
.website_update_info .b .r {
  display: flex;
  flex-direction: column;
}
.website_update_info .b .r .view_details {
  display: flex;
  flex-flow: row;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  color: var(--color-main);
  cursor: pointer;
}
</style>
