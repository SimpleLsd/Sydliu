<template>
  <div class="nav_main">
    <div class="content">
      <div class="logo-group" @click="goToHome">
        <svg
          width="200"
          height="40"
          viewBox="0 0 200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 17.4432V32.5H14V24.2614L8.375 18.5795V17.4432H5Z" />
          <path d="M5 7.5V17.4432H8.375H27.5V12.0455L23 7.5H5Z" />
          <path
            d="M184.117 10.6552V18.0652H194.227V20.7352H184.117V29.3452H194.917V32.0152H181.027V7.98523H194.917V10.6552H184.117Z"
          />
          <path
            d="M176.906 32.0152H173.846V12.4252L166.526 32.0152H163.376L156.116 12.5152V32.0152H153.296V7.98523H157.436L165.056 28.5652L172.676 7.98523H176.906V32.0152Z"
          />
          <path
            d="M147.406 28.385C147.986 28.385 148.446 28.565 148.786 28.925C149.146 29.265 149.326 29.725 149.326 30.305C149.326 30.885 149.146 31.345 148.786 31.685C148.446 32.045 147.986 32.225 147.406 32.225C146.826 32.225 146.356 32.045 145.996 31.685C145.656 31.345 145.486 30.885 145.486 30.305C145.486 29.725 145.656 29.265 145.996 28.925C146.356 28.565 146.826 28.385 147.406 28.385Z"
          />
          <path
            d="M132.445 32.3452C130.585 32.3452 128.955 31.9752 127.555 31.2352C126.175 30.5152 125.105 29.4852 124.345 28.1452C123.605 26.7852 123.235 25.1952 123.235 23.3752V7.98523H126.115V23.2252C126.115 25.2852 126.665 26.8952 127.765 28.0552C128.885 29.1952 130.415 29.7652 132.355 29.7652C134.315 29.7652 135.845 29.1952 136.945 28.0552C138.045 26.8952 138.595 25.2652 138.595 23.1652V7.98523H141.655V23.3752C141.655 25.1952 141.275 26.7852 140.515 28.1452C139.775 29.4852 138.705 30.5152 137.305 31.2352C135.925 31.9752 134.305 32.3452 132.445 32.3452Z"
          />
          <path d="M118.992 7.98523V32.0152H115.902V7.98523H118.992Z" />
          <path d="M112.683 29.3452V32.0152H99.1528V7.98523H102.243V29.3452H112.683Z" />
          <path
            d="M95.7112 20.0152C95.7112 22.4152 95.2811 24.5252 94.4211 26.3452C93.5811 28.1452 92.3611 29.5352 90.7611 30.5152C89.1611 31.5152 87.2712 32.0152 85.0912 32.0152H76.9312V7.98523H85.0912C87.2712 7.98523 89.1611 8.48523 90.7611 9.48523C92.3611 10.4652 93.5811 11.8652 94.4211 13.6852C95.2811 15.4852 95.7112 17.5952 95.7112 20.0152ZM92.6212 20.0152C92.6212 17.1552 91.9211 14.8852 90.5211 13.2052C89.1211 11.5052 87.1511 10.6552 84.6111 10.6552H80.0212V29.3452H84.6111C87.1511 29.3452 89.1211 28.5052 90.5211 26.8252C91.9211 25.1452 92.6212 22.8752 92.6212 20.0152Z"
          />
          <path
            d="M66.5324 22.0852V32.0152H63.4424V22.1452L55.1624 7.98523H58.7024L65.0624 19.6252L71.4224 7.98523H74.7824L66.5324 22.0852Z"
          />
          <path
            d="M38.3258 14.1061C38.3258 12.7929 38.6305 11.6414 39.24 10.6515C39.8495 9.64141 40.7146 8.86364 41.8353 8.31818C42.9756 7.77273 44.3224 7.5 45.8757 7.5C47.7632 7.5 49.3459 7.91414 50.6239 8.74242C51.9215 9.55051 52.8063 10.7121 53.2781 12.2273L50.8008 13.4091C50.0733 11.2677 48.4513 10.197 45.9347 10.197C44.4404 10.197 43.3099 10.5202 42.5431 11.1667C41.7763 11.8131 41.3929 12.7525 41.3929 13.9848C41.3929 14.7525 41.5502 15.3889 41.8648 15.8939C42.1794 16.3788 42.6906 16.803 43.3984 17.1667C44.1258 17.5101 45.1286 17.8232 46.4065 18.1061C49.0215 18.6717 50.8991 19.5303 52.0395 20.6818C53.1798 21.8131 53.75 23.3889 53.75 25.4091C53.75 26.7828 53.4059 28.0152 52.7178 29.1061C52.0493 30.1768 51.1056 31.0051 49.8866 31.5909C48.6676 32.197 47.2716 32.5 45.6987 32.5C43.6146 32.5 41.855 32.0354 40.4197 31.1061C39.0041 30.1768 38.0309 28.8636 37.5 27.1667L39.9773 25.9545C40.3902 27.2071 41.0783 28.1667 42.0417 28.8333C43.0248 29.4798 44.2438 29.803 45.6987 29.803C47.2716 29.803 48.5005 29.4192 49.3852 28.6515C50.27 27.8838 50.7123 26.8232 50.7123 25.4697C50.7123 24.6212 50.5354 23.9141 50.1815 23.3485C49.8472 22.7828 49.2771 22.298 48.471 21.8939C47.6845 21.4899 46.6031 21.1364 45.2269 20.8333C42.8282 20.3081 41.0783 19.5101 39.9773 18.4394C38.8763 17.3485 38.3258 15.904 38.3258 14.1061Z"
          />
        </svg>
      </div>
      <div class="title_group">
        <div class="title">SYDLIU.ME</div>
      </div>
      <div class="divider"></div>
      <div class="primary_text">最后更新 APR 07</div>
      <div class="theme-toggle">
        <label class="switch">
          <input type="checkbox" v-model="isDarkMode" @change="toggleTheme" />
          <span class="slider round"></span>
        </label>
        <span>切换主题</span>
      </div>
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

<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme'
import { useGoToHome } from '@/functions/useGoToHome'
const { goToHome } = useGoToHome()

const themeStore = useThemeStore()
const isDarkMode = themeStore.isDarkMode
const toggleTheme = themeStore.toggleTheme
</script>

<style scoped>
.content {
  border-radius: 24px;
  position: sticky;
  top: 24px;
  z-index: 1;
  display: flex;
  flex-flow: column;
  width: 312px;
  padding: 24px;
  gap: 24px;
  color: var(--color-text-primary);
  border: 1px solid var(--color-nav-border);
  background-color: var(--color-nav-bg);
}
.title_group {
  display: none;
}
.logo-group {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logo-group svg {
  transition: all 0.2s ease-out;
  fill: var(--color-main);
}
.logo-group:hover svg {
  transform: scale(1.1);
}
.divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-nav-border);
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
  color: var(--color-text-secondary);
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
  border: 1px solid var(--color-nav-border);
  opacity: 0.5;
  cursor: no-drop;
}
.contact {
  width: 100%;
  height: 48px;
  background-color: var(--color-main);
  color: var(--color-background);
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  /* opacity: 0.5; */
  cursor: no-drop;
}
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-main);
  transition: 0.4s;
  border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 12px;
  width: 12px;
  border-radius: 50px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color-main);
}

input:checked + .slider:before {
  transform: translateX(14px);
}

@media (max-width: 767px) {
  .nav_main {
    display: none;
  }
}

@media (max-width: 1279px) {
  .content {
    /* display: none; */
    width: 240px;
  }
}
</style>
