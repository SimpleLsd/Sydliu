<template>
  <div class="website_update_info">
    <div class="t">Feb 19</div>
    <div class="b">
      <div class="l">作品展示页面完成，内含前往Figma页面的入口</div>
      <div class="r">
        <div class="en">View Details</div>
        <div class="view_details" @click="navigateToWorks">
          查看详情
          <img src="@/assets/view_details.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToWorks = () => {
  router.push('/works')
}
</script>

<style scoped>
.website_update_info {
  display: flex;
  flex-flow: column;
  gap: 32px;
}
.website_update_info .t {
  font-size: 18px;
  color: var(--color-text-secondary);
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
  color: var(--color-text-primary);
  line-height: 1.4;
  flex: 1;
  text-align: justify;
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
  color: var(--color-text-primary);
  cursor: pointer;
}
.en {
  color: var(--color-text-secondary);
}
@media (max-width: 767px) {
  .website_update_info {
    display: flex;
    flex-flow: column;
    gap: 16px;
  }
  .website_update_info .b {
    flex-direction: column;
    gap: 16px;
  }
  .website_update_info .b .l {
    font-size: 24px;
    color: var(--color-text-primary);
    line-height: 1.4;
    flex: 1;
  }
  .website_update_info .b .r .view_details {
    display: flex;
    flex-flow: row;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    color: var(--color-text-primary);
    cursor: pointer;
    cursor: no-drop;
  }
  .en {
    font-size: 10px;
  }
  img {
    width: 32px;
  }
}
</style>
