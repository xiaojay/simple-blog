// 定义文章类型
export interface Post {
  id: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
  tags: string[]
}

// 示例文章数据
const posts: Post[] = [
  {
    id: '1',
    title: 'Next.js 入门指南',
    date: '2024-01-15',
    author: '张三',
    excerpt: '学习如何使用 Next.js 构建现代化的 React 应用程序。本文将介绍 Next.js 的核心概念和基础用法。',
    content: `
# Next.js 入门指南

Next.js 是一个基于 React 的框架，它提供了许多开箱即用的功能，让我们能够更高效地开发 Web 应用。

## 主要特性

1. **服务端渲染（SSR）**：提高首屏加载速度和 SEO
2. **静态站点生成（SSG）**：在构建时生成静态页面
3. **文件系统路由**：基于文件结构自动生成路由
4. **API 路由**：轻松创建后端 API

## 为什么选择 Next.js？

- 更好的性能
- 更好的 SEO
- 更好的开发体验
- 丰富的生态系统

开始使用 Next.js，你会发现 Web 开发变得更加简单和高效！
    `,
    tags: ['Next.js', 'React', '前端开发'],
  },
  {
    id: '2',
    title: 'TypeScript 基础教程',
    date: '2024-01-10',
    author: '李四',
    excerpt: 'TypeScript 是 JavaScript 的超集，为你的代码添加类型系统。让我们一起学习 TypeScript 的基础知识。',
    content: `
# TypeScript 基础教程

TypeScript 是由 Microsoft 开发的编程语言，它在 JavaScript 的基础上添加了静态类型系统。

## 什么是 TypeScript？

TypeScript 是 JavaScript 的超集，这意味着所有的 JavaScript 代码都是有效的 TypeScript 代码。

## 主要优势

1. **类型安全**：在编译时捕获错误
2. **更好的 IDE 支持**：自动补全和类型提示
3. **代码可维护性**：类型让代码更容易理解和维护
4. **现代 JavaScript 特性**：支持最新的 ECMAScript 特性

## 基础类型

\`\`\`typescript
// 基本类型
let name: string = "张三"
let age: number = 25
let isStudent: boolean = true

// 数组
let numbers: number[] = [1, 2, 3, 4, 5]

// 对象
interface User {
  name: string
  age: number
}

let user: User = {
  name: "李四",
  age: 30
}
\`\`\`

TypeScript 让 JavaScript 开发更加安全和高效！
    `,
    tags: ['TypeScript', 'JavaScript', '编程语言'],
  },
  {
    id: '3',
    title: 'React Hooks 完全指南',
    date: '2024-01-05',
    author: '王五',
    excerpt: 'React Hooks 改变了我们编写 React 组件的方式。本文深入探讨常用的 Hooks 及其使用场景。',
    content: `
# React Hooks 完全指南

React Hooks 是 React 16.8 引入的新特性，让我们可以在函数组件中使用状态和其他 React 特性。

## 常用 Hooks

### 1. useState

用于在函数组件中添加状态：

\`\`\`typescript
const [count, setCount] = useState(0)
\`\`\`

### 2. useEffect

用于处理副作用：

\`\`\`typescript
useEffect(() => {
  document.title = \`点击了 \${count} 次\`
}, [count])
\`\`\`

### 3. useContext

用于访问 React Context：

\`\`\`typescript
const theme = useContext(ThemeContext)
\`\`\`

## 自定义 Hooks

你还可以创建自己的 Hooks 来复用状态逻辑：

\`\`\`typescript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
\`\`\`

Hooks 让 React 开发变得更加简洁和优雅！
    `,
    tags: ['React', 'Hooks', '前端开发'],
  },
  {
    id: '4',
    title: 'CSS Tailwind 实用技巧',
    date: '2024-01-01',
    author: '赵六',
    excerpt: 'Tailwind CSS 是一个实用优先的 CSS 框架。学习如何使用 Tailwind 快速构建美观的界面。',
    content: `
# CSS Tailwind 实用技巧

Tailwind CSS 是一个实用优先（Utility-First）的 CSS 框架，它提供了大量的工具类来帮助你快速构建界面。

## 为什么使用 Tailwind？

1. **快速开发**：不需要离开 HTML 就能设计界面
2. **一致性**：使用预定义的设计系统
3. **响应式**：轻松实现响应式设计
4. **可定制**：完全可以自定义配置

## 常用类名

### 布局

- \`flex\`: 弹性布局
- \`grid\`: 网格布局
- \`container\`: 容器
- \`mx-auto\`: 水平居中

### 间距

- \`p-4\`: padding: 1rem
- \`m-4\`: margin: 1rem
- \`space-x-4\`: 子元素水平间距

### 颜色

- \`bg-blue-500\`: 蓝色背景
- \`text-gray-700\`: 灰色文字
- \`border-red-300\`: 红色边框

## 响应式设计

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  响应式文字大小
</div>
\`\`\`

Tailwind CSS 让样式开发变得高效而愉快！
    `,
    tags: ['CSS', 'Tailwind', '前端开发', '样式'],
  },
]

// 获取所有文章
export function getAllPosts(): Post[] {
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

// 根据 ID 获取单篇文章
export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id)
}

// 获取所有标签
export function getAllTags(): string[] {
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
}
