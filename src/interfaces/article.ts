export interface Article {
  title: string // 文章标题
  subTitle: string // 副标题
  coverUrl: string // 封面 URL
  articleTags: string[] // 文章标签的 ID 列表
  articleDate: string // 文章日期（ISO 字符串）
  totalNum: number // 总章节数
  articleNum: number // 当前章节数
  sections: Section[] // 文章内容部分
}

// 定义段落类型
type Section = ParagraphSection | HeadingSection | CodeSection | BookmarkSection | ImageSection

// 段落类型定义
interface ParagraphSection {
  type: 'paragraph' // 段落
  typeData: TypeData
}

interface HeadingSection {
  type: 'heading_3' // 标题 H3
  typeData: TypeData & {
    is_toggleable: boolean // 是否可折叠
  }
}

interface CodeSection {
  type: 'code' // 代码段
  typeData: {
    caption: string[] // 代码段标题
    rich_text: RichText[] // 代码内容
    language: string // 代码语言
  }
}

interface BookmarkSection {
  type: 'bookmark' // 书签类型
  typeData: {
    caption: string[] // 书签描述
    url: string // 书签链接
  }
}

interface ImageSection {
  type: 'image' // 图片类型
  typeData: {
    caption: string[] // 图片描述
    type: string // 图片文件类型
    file: {
      url: string // 图片 URL
      expiry_time: string // 图片过期时间
    }
  }
}

// 定义 TypeData 的结构
interface TypeData {
  rich_text: RichText[] // 富文本内容
  color: string // 颜色
}

// 富文本结构
interface RichText {
  type: 'text' | 'mention' // 文本或提及类型
  text?: {
    content: string // 内容
    link: string | null // 链接
  }
  mention?: Mention // 提及
  annotations: Annotations // 格式修饰
  plain_text: string // 纯文本内容
  href: string | null // 超链接
}

// 提及内容
interface Mention {
  type: string // 提及类型
  link_mention?: {
    href: string // 提及的链接
    title: string // 提及的标题
    icon_url: string // 图标
    description: string // 描述
  }
}

// 富文本修饰
interface Annotations {
  bold: boolean // 是否加粗
  italic: boolean // 是否倾斜
  strikethrough: boolean // 是否有删除线
  underline: boolean // 是否有下划线
  code: boolean // 是否是代码
  color: string // 文本颜色
}
