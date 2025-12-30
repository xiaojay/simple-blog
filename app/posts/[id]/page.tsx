import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostById, getAllPosts } from '@/app/lib/posts'

// 生成静态路径
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)

  // 如果文章不存在，返回 404
  if (!post) {
    notFound()
  }

  return (
    <div>
      {/* 返回按钮 */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <span>←</span>
          <span>返回首页</span>
        </Link>
      </div>

      {/* 文章头部 */}
      <article className="bg-white rounded-lg shadow-md p-8">
        <header className="mb-6 border-b pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 mb-4">
            <span className="font-medium">{post.author}</span>
            <span className="mx-3">•</span>
            <time>{post.date}</time>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 文章内容 */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      {/* 返回底部按钮 */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回文章列表
        </Link>
      </div>
    </div>
  )
}
