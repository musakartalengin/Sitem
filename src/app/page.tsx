import { getAllPosts } from '@/lib/posts'
import BlogList from '@/components/BlogList'

export default function Home() {
  const posts = getAllPosts()
  const categories = ['Tümü', ...new Set(posts.map(post => post.category))]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <BlogList initialPosts={posts} categories={categories} />
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Yeni Yazılardan Haberdar Olun
          </h2>
          <p className="text-indigo-100 mb-8">
            Yeni yazılarımdan ilk siz haberdar olun. Spam yok, sadece kaliteli içerik.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:text-white dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
