declare module 'masonry-layout' {
  export default class Masonry {
    constructor(selector: Element | string, options?: MasonryOptions)
    layout(): void
    destroy(): void
  }
  export interface MasonryOptions {
    itemSelector?: string // 子元素选择器
    columnWidth?: string | number | Element // 列宽
    gutter?: number // 间距
    percentPosition?: boolean // 是否使用百分比布局
    horizontalOrder?: boolean // 水平方向布局顺序
    transitionDuration?: string // 动画过渡时间
    originTop?: boolean // 是否从顶部布局
  }
}
