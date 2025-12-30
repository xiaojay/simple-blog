import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '简单博客',
  description: '一个用于学习的简单博客系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <div className="min-h-screen bg-gray-50">
          {/* 导航栏 */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-gray-800">
                <a href="/">我的博客</a>
              </h1>
            </div>
          </nav>

          {/* 主要内容 */}
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-white border-t mt-12">
            <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
              <p>© 2024 简单博客 - Next.js 学习项目</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
