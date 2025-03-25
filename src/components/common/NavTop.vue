<template>
  <div class="nav-top" :class="{ hidden: isHidden }">
    <img class="menu" src="@/assets/menu.svg" />
    <div class="logo-svg" @click="goToHome">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="svg">
        <!-- 中心点 -->
        <g class="dash-group-m">
          <line x1="170" y1="270" x2="170" y2="270" class="line-m line1-m"></line>
          <line x1="230" y1="270" x2="230" y2="270" class="line-m line2-m"></line>
          <line x1="230" y1="330" x2="230" y2="330" class="line-m line3-m"></line>
          <line x1="170" y1="330" x2="170" y2="330" class="line-m line4-m"></line>
        </g>
        <g class="center-group-m">
          <rect x="168" y="268" class="pointm"></rect>
          <rect x="228" y="268" class="pointm"></rect>
          <rect x="228" y="328" class="pointm"></rect>
          <rect x="168" y="328" class="pointm"></rect>
        </g>
        <!-- 中间层 -->
        <g class="middle-group-m">
          <rect x="136" y="183" class="pointm"></rect>
          <rect x="262" y="421" class="pointm"></rect>
          <rect x="262" y="180" class="pointm"></rect>
          <rect x="142" y="434" class="pointm"></rect>
          <rect x="325" y="232" class="pointm"></rect>
          <rect x="65" y="342" class="pointm"></rect>
          <rect x="322" y="348" class="pointm"></rect>
          <rect x="62" y="232" class="pointm"></rect>
        </g>
        <!-- 最外层 -->
        <g class="outer-group-m">
          <rect x="20" y="20" class="pointm"></rect>
          <rect x="374" y="20" class="pointm"></rect>
          <rect x="374" y="574" class="pointm"></rect>
          <rect x="20" y="574" class="pointm"></rect>

          <rect x="45" y="98" class="pointm"></rect>
          <rect x="343" y="455" class="pointm"></rect>
          <rect x="164" y="98" class="pointm"></rect>
          <rect x="268" y="504" class="pointm"></rect>
          <rect x="256" y="67" class="pointm"></rect>
          <rect x="155" y="527" class="pointm"></rect>
          <rect x="346" y="122" class="pointm"></rect>
          <rect x="65" y="475" class="pointm"></rect>
        </g>
        <path
          class="shape-m"
          d="M 170 270 L 230 270 L 230 270 L 230 270 L 230 270 L 230 270 L 230 270 L 230 330 L 170 330 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
        <g class="letters">
          <path
            class="S"
            d="M30.6606 11.2849C30.6606 10.2343 30.9044 9.31313 31.392 8.52121C31.8796 7.71313 32.5717 7.09091 33.4682 6.65455C34.3805 6.21818 35.458 6 36.7005 6C38.2105 6 39.4767 6.33131 40.4991 6.99394C41.5372 7.6404 42.245 8.5697 42.6225 9.78182L40.6407 10.7273C40.0587 9.01414 38.761 8.15758 36.7477 8.15758C35.5523 8.15758 34.6479 8.41616 34.0345 8.93333C33.4211 9.45051 33.1143 10.202 33.1143 11.1879C33.1143 11.802 33.2402 12.3111 33.4918 12.7152C33.7435 13.103 34.1524 13.4424 34.7187 13.7333C35.3007 14.0081 36.1028 14.2586 37.1252 14.4848C39.2172 14.9374 40.7193 15.6242 41.6316 16.5455C42.5439 17.4505 43 18.7111 43 20.3273C43 21.4263 42.7247 22.4121 42.1742 23.2848C41.6394 24.1414 40.8845 24.804 39.9093 25.2727C38.9341 25.7576 37.8173 26 36.559 26C34.8917 26 33.484 25.6283 32.3358 24.8848C31.2033 24.1414 30.4247 23.0909 30 21.7333L31.9819 20.7636C32.3122 21.7657 32.8627 22.5333 33.6334 23.0667C34.4198 23.5838 35.395 23.8424 36.559 23.8424C37.8173 23.8424 38.8004 23.5354 39.5082 22.9212C40.216 22.3071 40.5699 21.4586 40.5699 20.3758C40.5699 19.697 40.4283 19.1313 40.1452 18.6788C39.8778 18.2263 39.4217 17.8384 38.7768 17.5152C38.1476 17.1919 37.2825 16.9091 36.1815 16.6667C34.2626 16.2465 32.8627 15.6081 31.9819 14.7515C31.101 13.8788 30.6606 12.7232 30.6606 11.2849Z"
            fill="var(--color-main)"
          />
          <path
            class="Y"
            d="M53.2259 17.6682V25.6122H50.7539V17.7162L44.1299 6.38818H46.9619L52.0499 15.7002L57.1379 6.38818H59.8259L53.2259 17.6682Z"
            fill="var(--color-main)"
          />
          <path
            class="D"
            d="M76.5689 16.0122C76.5689 17.9322 76.2249 19.6202 75.5369 21.0762C74.8649 22.5162 73.8889 23.6282 72.6089 24.4122C71.3289 25.2122 69.8169 25.6122 68.0729 25.6122H61.5449V6.38818H68.0729C69.8169 6.38818 71.3289 6.78818 72.6089 7.58818C73.8889 8.37218 74.8649 9.49218 75.5369 10.9482C76.2249 12.3882 76.5689 14.0762 76.5689 16.0122ZM74.0969 16.0122C74.0969 13.7242 73.5369 11.9082 72.4169 10.5642C71.2969 9.20418 69.7209 8.52418 67.6889 8.52418H64.0169V23.4762H67.6889C69.7209 23.4762 71.2969 22.8042 72.4169 21.4602C73.5369 20.1162 74.0969 18.3002 74.0969 16.0122Z"
            fill="var(--color-main)"
          />
          <path
            class="L"
            d="M90.1463 23.4762V25.6122H79.3223V6.38818H81.7943V23.4762H90.1463Z"
            fill="var(--color-main)"
          />
          <path
            class="I"
            d="M95.1937 6.38818V25.6122H92.7217V6.38818H95.1937Z"
            fill="var(--color-main)"
          />
          <path
            class="U"
            d="M105.956 25.8762C104.468 25.8762 103.164 25.5802 102.044 24.9882C100.94 24.4122 100.084 23.5882 99.4759 22.5162C98.8839 21.4282 98.5879 20.1562 98.5879 18.7002V6.38818H100.892V18.5802C100.892 20.2282 101.332 21.5162 102.212 22.4442C103.108 23.3562 104.332 23.8122 105.884 23.8122C107.452 23.8122 108.676 23.3562 109.556 22.4442C110.436 21.5162 110.876 20.2122 110.876 18.5322V6.38818H113.324V18.7002C113.324 20.1562 113.02 21.4282 112.412 22.5162C111.82 23.5882 110.964 24.4122 109.844 24.9882C108.74 25.5802 107.444 25.8762 105.956 25.8762Z"
            fill="var(--color-main)"
          />
          <path
            class="dot"
            d="M117.925 22.708C118.389 22.708 118.757 22.852 119.029 23.14C119.317 23.412 119.461 23.78 119.461 24.244C119.461 24.708 119.317 25.076 119.029 25.348C118.757 25.636 118.389 25.78 117.925 25.78C117.461 25.78 117.085 25.636 116.797 25.348C116.525 25.076 116.389 24.708 116.389 24.244C116.389 23.78 116.525 23.412 116.797 23.14C117.085 22.852 117.461 22.708 117.925 22.708Z"
            fill="var(--color-main)"
          />
          <path
            class="M"
            d="M141.525 25.6122H139.077V9.94018L133.221 25.6122H130.701L124.893 10.0122V25.6122H122.637V6.38818H125.949L132.045 22.8522L138.141 6.38818H141.525V25.6122Z"
            fill="var(--color-main)"
          />
          <path
            class="E"
            d="M147.293 8.52418V14.4522H155.381V16.5882H147.293V23.4762H155.933V25.6122H144.821V6.38818H155.933V8.52418H147.293Z"
            fill="var(--color-main)"
          />
        </g>
      </svg>
    </div>
    <svg
      class="dark-switch"
      @click="toggleTheme"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C16.2229 6 16.4441 6.00729 16.6634 6.02165C16.2379 6.92539 16 7.93492 16 9C16 12.866 19.134 16 23 16C24.0651 16 25.0746 15.7621 25.9783 15.3366C25.9927 15.5559 26 15.7771 26 16ZM8 16C8 20.4183 11.5817 24 16 24C19.7389 24 22.8788 21.435 23.756 17.9687C23.5067 17.9894 23.2546 18 23 18C18.0294 18 14 13.9706 14 9C14 8.74541 14.0106 8.49329 14.0313 8.24405C10.565 9.1212 8 12.2611 8 16Z"
        fill="var(--color-main)"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useThemeStore } from '@/stores/theme'
import { useGoToHome } from '@/functions/useGoToHome'
const { goToHome } = useGoToHome()

// const isDarkMode = themeStore.isDarkMode
const themeStore = useThemeStore()
const toggleTheme = themeStore.toggleTheme

const tlm = gsap.timeline()

const isHidden = ref(false)
let lastScrollY = 0

const disableScroll = () => {
  document.body.style.overflow = 'hidden'
}

// 启用滚动
const enableScroll = () => {
  document.body.style.overflow = ''
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 滚动方向判断：向下滑动
  if (currentScrollY > lastScrollY) {
    isHidden.value = true // 向下滚动时，隐藏导航栏
  } else {
    isHidden.value = false // 向上滚动时，显示导航栏
  }

  lastScrollY = currentScrollY // 更新最后一次的滚动位置
}

onMounted(() => {
  disableScroll() // 禁用滚动

  tlm
    .to('.svg', {
      duration: 0,
      attr: { viewBox: `0  0 400 600` }
    })
    .to('.outer-group-m rect', {
      duration: 0.2,
      scale: 1,
      opacity: 1,
      stagger: 0.01
    })
    .to(
      '.middle-group-m rect',
      {
        duration: 0.2,
        scale: 1,
        opacity: 1,
        stagger: 0.01
      },
      '-=0.1'
    )
    .to(
      '.center-group-m rect',
      {
        duration: 0.05,
        scale: 1,
        opacity: 1
      },
      '-=0.1'
    )
    .add([
      gsap.to('.line1-m', {
        duration: 0.2,
        attr: { x2: 230, y2: 270 }
      }),
      gsap.to('.line2-m', {
        duration: 0.2,
        attr: { x2: 230, y2: 330 }
      }),
      gsap.to('.line3-m', {
        duration: 0.2,
        attr: { x2: 170, y2: 330 }
      }),
      gsap.to('.line4-m', {
        duration: 0.2,
        attr: { x2: 170, y2: 270 }
      })
    ])
    .add([
      gsap.to('.shape-m', {
        duration: 0.1,
        opacity: 1
      }),
      gsap.to('.dash-group-m, .pointm', {
        duration: 0.1,
        opacity: 0
      })
    ])
    .to('.shape-m', {
      attr: {
        d: 'M 160 256 L 240 256 L 240 256 L 240 256 L 240 256 L 240 256 L 240 256 L 240 344 L 160 344 Z'
      },
      duration: 0.2
    })
    .to('.shape-m', {
      attr: {
        d: 'M 160 256 L 240 256 L 240 272 L 240 291 L 240 291 L 240 295 L 240 315 L 240 344 L 160 344 Z'
      },
      duration: 0
    })
    .to('.shape-m', {
      attr: {
        d: 'M 160 256 L 240 256 L 240 272 L 240 291 L 192 291 L 192 295 L 192 315 L 192 344 L 160 344 Z'
      },
      duration: 0.2
    })
    .to(
      '.shape-m',
      {
        attr: {
          d: 'M 160 256 L 224 256 L 240 272 L 240 291 L 172 291 L 172 295 L 192 315 L 192 344 L 160 344 Z'
        },
        duration: 0.2
      },
      '-=0.2'
    )
    .to('.shape-m', {
      attr: {
        d: 'M 160 256 L 224 256 L 240 272 L 240 291 L 172 291 L 172 295 L 192 315 L 192 344 L 160 344 Z'
      },
      duration: 0.2
    })
    .add([
      gsap.to('.shape-m', {
        attr: {
          d: 'M 4 6 L 18.5 6 L 22 9.5 L 22 14 L 6.5 14 L 6.5 15 L 11 19.5 L 11 26 L 4 26 Z'
        },
        duration: 0.6
      }),
      gsap.to('.svg', {
        duration: 0.6,
        attr: { viewBox: '0 0 160 32' },
        width: 160,
        height: 32
      }),
      gsap.to('.nav-top', {
        height: 60
      })
    ])
    .add([
      gsap.to('.letters path', {
        duration: 0.2,
        opacity: 1,
        stagger: {
          amount: 0.2
        }
      }),
      gsap.to('.menu', {
        opacity: 0.4,
        duration: 0.2
      }),
      gsap.to('.dark-switch', {
        opacity: 1,
        duration: 0.2
      })
    ])

  // 在2秒后启用滚动
  setTimeout(() => {
    enableScroll()
    window.addEventListener('scroll', handleScroll)
  }, 1000) // 延迟2秒后启用滚动

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-top {
  width: 100vw;
  position: sticky;
  top: 0;
  margin-bottom: 16px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 4;
  transition: top 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  /* position: relative; */
  /*  */
  height: 100vh;
}
.nav-top img {
  height: 32px;
  width: 32px;
  cursor: pointer;
}
.menu {
  opacity: 0;
}
.dark-switch {
  opacity: 0;
}
.logo-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo-svg svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.svg {
  width: 100vw;
  height: auto;
}
.nav-top.hidden {
  top: -60px; /* 隐藏导航栏，向上移动 */
}
.letters path {
  opacity: 0;
}
/* 动画 */
.pointm {
  width: 4px;
  height: 4px;
  fill: var(--color-bg);
  stroke: var(--color-main);
  stroke-width: 1.5px;
  opacity: 0;
}
.line-m {
  stroke: var(--color-main);
  stroke-width: 1px;
  opacity: 1;
  stroke-dasharray: 2px 2px;
}
@media (min-width: 768px) {
  .nav-top {
    display: none;
  }
}
</style>
