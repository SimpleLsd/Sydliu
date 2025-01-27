<template>
  <div class="grid" ref="gridRef">
    <div v-for="img in props.imgs" :key="img" class="grid-item">
      <img :src="img" alt="works" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onBeforeUnmount, ref } from 'vue'

import Masonry from 'masonry-layout'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

const props = defineProps<{
  imgs: Array<string>
}>()

// 定义 ref
const gridRef = ref<HTMLElement | null>(null)
let viewer: Viewer | null = null

onMounted(async () => {
  await nextTick()
  const grid = document.querySelector('.grid') as HTMLElement
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter: 0
  })
  if (gridRef.value) {
    viewer = new Viewer(gridRef.value, {
      navbar: true, // 缩略图导航栏
      title: false, // 图片标题
      toolbar: {
        zoomIn: {
          show: true, // 放大按钮
          size: 'large' // 设置按钮大小
        },
        zoomOut: {
          show: true, // 缩小按钮
          size: 'large'
        },
        oneToOne: {
          show: true, //  // 原始尺寸按钮
          size: 'large'
        },
        reset: {
          show: true, // // 重置按钮
          size: 'large'
        },
        prev: {
          show: true, // 上一张按钮
          size: 'large'
        },
        play: {
          show: false, // 播放按钮
          size: 'large'
        },
        next: {
          show: true, // // 下一张按钮
          size: 'large'
        },
        rotateLeft: 0, // 左旋转按钮
        rotateRight: 0, // 右旋转按钮
        flipHorizontal: 0, // 水平翻转按钮
        flipVertical: 0 // 垂直翻转按钮
      },
      tooltip: false, // 禁用工具提示
      zoomable: true, // 启用缩放功能
      rotatable: false, // 启用旋转功能
      scalable: false, // 启用翻转功能
      fullscreen: true, // 禁用全屏功能
      transition: true, // 启用动画效果
      keyboard: true, // 启用键盘操作
      zoomRatio: 1, // 设置缩放比例为 20%
      minZoomRatio: 0.1, // 设置最小缩放比例
      maxZoomRatio: 2 // 设置最大缩放比例
    })
  }
})
onBeforeUnmount(() => {
  if (viewer) {
    viewer.destroy()
    viewer = null
  }
})
</script>

<style scoped>
* {
  transition: none;
}
.grid {
  width: 100%;
  box-sizing: border-box;
}
.grid:after {
  content: '';
  display: block;
  clear: both;
}
.grid-item {
  width: 25%;
  padding: 8px;
  /* float: left; */
  box-sizing: border-box;
}
.grid-item img {
  cursor: zoom-in;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
