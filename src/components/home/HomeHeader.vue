<template>
  <div class="logo_svg">
    <svg
      class="container"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 虚线 -->
      <g class="dash-group">
        <line x1="450" y1="450" x2="450" y2="450" class="line line1"></line>
        <line x1="550" y1="450" x2="550" y2="450" class="line line2"></line>
        <line x1="550" y1="550" x2="550" y2="550" class="line line3"></line>
        <line x1="450" y1="550" x2="450" y2="550" class="line line4"></line>
      </g>
      <!-- 中心点 -->
      <g class="center-group">
        <rect x="447" y="448" class="point"></rect>
        <rect x="547" y="448" class="point"></rect>
        <rect x="447" y="548" class="point"></rect>
        <rect x="547" y="548" class="point"></rect>
      </g>
      <!-- 中间层 -->
      <g class="middle-group">
        <rect x="417" y="333" class="point"></rect>
        <rect x="564" y="347" class="point"></rect>
        <rect x="676" y="313" class="point"></rect>
        <rect x="702" y="448" class="point"></rect>
        <rect x="664" y="564" class="point"></rect>
        <rect x="580" y="659" class="point"></rect>
        <rect x="447" y="639" class="point"></rect>
        <rect x="298" y="665" class="point"></rect>
        <rect x="316" y="547" class="point"></rect>
        <rect x="319" y="442" class="point"></rect>
      </g>
      <!-- 外围点 -->
      <g class="outer-group">
        <rect x="40" y="291" class="point"></rect>
        <rect x="954" y="703" class="point"></rect>
        <rect x="954" y="291" class="point"></rect>
        <rect x="172" y="375" class="point"></rect>
        <rect x="878" y="439" class="point"></rect>
        <rect x="96" y="475" class="point"></rect>
        <rect x="904" y="542" class="point"></rect>
        <rect x="201" y="513" class="point"></rect>
        <rect x="149" y="668" class="point"></rect>
        <rect x="40" y="703" class="point"></rect>
        <rect x="679" y="679" class="point"></rect>
        <rect x="811" y="633" class="point"></rect>
        <rect x="805" y="507" class="point"></rect>
      </g>
      <!-- 图形组 -->
      <g class="shape-group">
        <path
          class="s1"
          d="M 450 450 L 550 450 L 550 500 L 550 550 L 450 550 Z"
          fill="var(--color-main)"
        ></path>
        <path
          class="s2"
          d="M 460 0 L 540 0 L 540 10 L 540 60 L 540 80 L 460 80 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
        <path
          class="s3"
          d="M 460 0 L 540 0 L 540 50 L 540 50 L 540 80 L460 80 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
        <path
          class="s4"
          d="M 460 0 L 540 0 L 540 10 L 540 60 L 540 80 L 460 80 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
        <path
          class="s5"
          d="M 880 0 L 880 0 L 880 80 L 880 80 L 880 80 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
        <path
          class="s6"
          d="M 920 80 L 1000 80 L 1000 80 L 920 80 Z"
          fill="var(--color-main)"
          opacity="0"
        ></path>
      </g>
      <!-- 底线 -->
      <line
        x1="0"
        y1="200"
        x2="1000"
        y2="200"
        stroke="var(--color-main)"
        class="bottom-line"
        stroke-width="0.5"
        opacity="0"
      ></line>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const tl = gsap.timeline()
onMounted(() => {
  const W = window.innerWidth
  const H = window.innerHeight
  console.log(W)

  tl.to('.container', {
    duration: 0,
    attr: { viewBox: `0  ${(1000 - (1000 * H) / W) / 2} 1000 ${(1000 * H) / W}` }
  })
    .to('.outer-group rect', {
      duration: 0.2,
      scale: 1,
      opacity: 1,
      stagger: 0.01
    })
    .to(
      '.middle-group rect',
      {
        duration: 0.2,
        scale: 1,
        opacity: 1,
        stagger: 0.01
      },
      '-=0.1'
    )
    .to(
      '.center-group rect',
      {
        duration: 0.05,
        scale: 1,
        opacity: 1
      },
      '-=0.1'
    )
    .add([
      gsap.to('.line1', {
        duration: 0.2,
        attr: { x2: 550, y2: 450 }
      }),
      gsap.to('.line2', {
        duration: 0.2,
        attr: { x2: 550, y2: 550 }
      }),
      gsap.to('.line3', {
        duration: 0.2,
        attr: { x2: 450, y2: 550 }
      }),
      gsap.to('.line4', {
        duration: 0.2,
        attr: { x2: 450, y2: 450 }
      })
    ])
    .add([
      gsap.to('.shape-group', {
        duration: 0.1,
        opacity: 1
      }),
      gsap.to('.dash-group, .point', {
        duration: 0.1,
        opacity: 0
      })
    ])
    .add([
      gsap.to('.container', {
        duration: 0.6,
        attr: { viewBox: '0 0 1000 200' }
      }),
      gsap.to('.s2,.s3,.s4,.s5,.s6', {
        duration: 0,
        delay: 0.6,
        opacity: 1
      }),
      gsap.to('.s1', {
        duration: 0.6,
        attr: { d: 'M 460 0 L 540 0 L 540 40 L 540 200 L 460 200 Z' }
      }),
      gsap.to('.s1', {
        duration: 0,
        attr: { d: 'M 460 0 L 540 0 L 540 40 L 540 80 L 460 80 Z' }
      }),
      gsap.to('.s2, .s4', {
        duration: 0,
        attr: { d: 'M 460 79 L 540 79 L 540 90 L 540 140 L 540 200 L 460 200 Z' }
      })
    ])
    .add([
      gsap.to('.s1', {
        duration: 0.0,
        attr: { d: 'M 460 0 L 540 0 L 540 40 L 540 80 L 460 80 Z' }
      })
    ])
    .add([
      gsap.to('.s1', {
        duration: 0.5,
        attr: { d: 'M 430 0 L 840 0 L 840 40 L 840 80 L 430 80 Z' }
      }),
      gsap.to('.s2', {
        duration: 0.5,
        attr: { d: 'M 430 79 L 510 79 L 510 90 L 510 140 L 510 200 L 430 200 Z' }
      }),
      gsap.to('.s3', {
        duration: 0.5,
        attr: { d: 'M 0 0 L 431 0 L 431 50 L 540 50 L 431 80 L 0 80 Z' }
      }),
      gsap.to('.s4', {
        duration: 0.5,
        attr: { d: 'M 0 79 L 80 79 L 80 90 L 80 140 L 80 200 L 0 200 Z' }
      }),
      gsap.to('.s5', {
        duration: 0.2,
        attr: { d: 'M 880 0 L 1000 0 L 1000 0 L 1000 80 L 880 80 Z' }
      }),
      gsap.to('.s6', {
        delay: 0.2,
        duration: 0.3,
        attr: { d: 'M 920 79 L 1000 79 L 1000 200 L 920 200 Z' }
      })
    ])
    .add([
      gsap.to('.s1', {
        duration: 0.5,
        attr: { d: 'M 430 0 L 840 0 L 840 40 L 800 80 L 430 80 Z' }
      }),
      gsap.to('.s2', {
        duration: 0.5,
        attr: { d: 'M 430 79 L 460 79 L 460 90 L 510 140 L 510 200 L 430 200 Z' }
      }),
      gsap.to('.s3', {
        duration: 0.5,
        attr: { d: 'M 0 0 L 370 0 L 420 50 L 540 50 L 431 80 L 0 80 Z' }
      }),
      gsap.to('.s4', {
        duration: 0.5,
        attr: { d: 'M 0 79 L 30 79 L 30 90 L 80 140 L 80 200 L 0 200 Z' }
      }),
      gsap.to('.s5', {
        duration: 0.5,
        attr: { d: 'M 880 0 L 960 0 L 1000 40 L 1000 80 L 880 80 Z' }
      }),
      gsap.to('.bottom-line', {
        duration: 0.5,
        opacity: 1
      })
    ])
})
</script>

<style scoped>
.logo_svg {
  width: 100%;

  padding: 24px;
  height: auto;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .logo_svg {
    display: none;
  }
}
.container {
  width: 100%;
  height: auto;
}
.point {
  width: 4px;
  height: 4px;
  fill: var(--color-bg);
  stroke: var(--color-main);
  stroke-width: 1.5px;
  opacity: 0;
}
.line {
  stroke: var(--color-main);
  stroke-width: 1px;
  opacity: 1;
  stroke-dasharray: 2px 2px;
}
.shape-group {
  opacity: 0;
}
</style>
