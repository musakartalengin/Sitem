import { getAllPosts } from '@/lib/posts'
import BlogList from '@/components/BlogList'
import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  const posts = getAllPosts()
  const categories = ['Tümü', ...new Set(posts.map(post => post.category))]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <BlogList initialPosts={posts} categories={categories} />
      
      {/* Newsletter Section */}
      <NewsletterForm />
    </main>
  )
}
