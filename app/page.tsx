import Link from 'next/link'
import { getAllPosts } from './lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">欢迎来到我的博客</h2>
        <p className="text-gray-600">分享技术知识和学习心得</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.id}`}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <time>{post.date}</time>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
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
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">暂无文章</p>
        </div>
      )}
    </div>
  )
}
