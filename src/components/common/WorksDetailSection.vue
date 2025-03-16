<template>
  <div class="content" :class="{ padd_top: !props.isFirst }">
    <div class="section_title">{{ props.work.name }}</div>
    <div class="section_content">
      <div class="info_group">
        <div class="img_title">
          <span>{{ currentIndex + 1 }}.</span><span>{{ props.work.data[currentIndex].title }}</span>
        </div>
        <div class="actions">
          <div v-if="!isFirst" class="next" @click="goToPrev">
            <img src="@/assets/arrow.svg" class="up" alt="" srcset="" />
          </div>
          <div v-if="!isLast" class="next" @click="goToNext">
            <img src="@/assets/arrow.svg" class="down" alt="" srcset="" />
          </div>
          <div v-if="totalNum != 1" class="next" @click="nextImg">
            <img src="@/assets/arrow.svg" class="right" alt="" srcset="" />
          </div>
          <!-- {{ totalNum }} -->
        </div>
        <ol class="descriptions">
          <li
            v-for="(description, index) in props.work.data[currentIndex].description"
            :key="index"
          >
            {{ description }}
          </li>
        </ol>
      </div>
      <div class="img_group">
        <img
          v-for="(img, index) in imgList"
          :src="img.url"
          :key="index"
          :class="[`img${img.name}`, 'img']"
          @click="nextImg"
        />
        <div v-if="totalNum === 1" class="no_more_img second"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps<{
  work: {
    name: string
    data: Array<{
      name: string
      title: string
      description: Array<string>
    }>
  }
  goToNext: () => void
  goToPrev: () => void
  isLast: boolean
  isFirst: boolean
}>()
const urlHead =
  'https://server.sydliu.me:8088/statics/sydliu_me_statics/works_details/works_details'

const imgList = ref(
  props.work.data.map((item) => ({
    url:
      props.work.data[0]?.name.slice(1, 3) === '13'
        ? `${urlHead}${item.name}.gif`
        : `${urlHead}${item.name}.png`,
    name: item.name
  }))
)

const totalNum = ref(props.work.data.length)
const currentIndex = ref(0)

console.log(totalNum.value)

const nextImg = () => {
  document.querySelector('.waste')?.classList.remove('waste')

  const currentName = imgList.value[currentIndex.value].name
  const nextIndex = (currentIndex.value + 1) % totalNum.value
  const nextName = imgList.value[nextIndex].name
  const afterNextName = imgList.value[(nextIndex + 1) % totalNum.value].name

  document.querySelector(`.img${currentName}`)?.classList.replace('first', 'waste')
  document.querySelector(`.img${nextName}`)?.classList.replace('second', 'first')

  currentIndex.value = nextIndex
  document.querySelector(`.img${afterNextName}`)?.classList.add('second')
}

onMounted(() => {
  const firstImg = document.getElementsByClassName(
    `img${imgList.value[currentIndex.value].name}`
  )[0]
  const secondImg = document.getElementsByClassName(
    `img${imgList.value[(currentIndex.value + 1) % totalNum.value].name}`
  )[0]

  if (firstImg) {
    ;(firstImg as HTMLElement).classList.add('first')
  }
  if (secondImg && totalNum.value != 1) {
    ;(secondImg as HTMLElement).classList.add('second')
  }
})
</script>

<style scoped>
.content {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: 32px;
  /* border: 1px solid #ffffff30; */
}
.padd_top {
  padding-top: 20px;
}
.section_content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 600px;
  gap: 32px;
}
.info_group {
  display: flex;
  flex-flow: column;
  gap: 16px;
  /* border: 1px solid #ffffff30; */
}

.section_title {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-main);
}
.img_title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-main);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  color: var(--color-theme);
}

.next:hover {
  background-color: var(--color-button-tint-hover);
}
.img_group {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.img_group img {
  transition: all 300ms ease-in-out;
  overflow: hidden;
  border-radius: 10px;
  width: 360px;
}
.img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.9);
}
.first {
  display: block;
  position: relative;
  z-index: 1;
  box-shadow: #00000020 0 0 20px;
  top: 0;
  left: 0;
  opacity: 1;
  transform: scale(1);
}
.second {
  display: block;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 200px;
  opacity: 0.5;
  transform: scale(0.95);
  /* filter: blur(2px); */
}
.waste {
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -360px;
  opacity: 1;
  transform: scale(1);
}
.no_more_img {
  width: 360px;
  height: 800px;
  background-color: #ffffff30;
  border-radius: 10px;
  cursor: default;
}
ol {
  padding-left: 16px;
}
li {
  margin-top: 8px;
  text-align: justify;
}

.next {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-button-tint);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-out;
  user-select: none;
}
.right {
  transform: rotate(270deg);
}
.up {
  transform: rotate(180deg);
}
.down {
  transform: rotate(0deg);
}
</style>
