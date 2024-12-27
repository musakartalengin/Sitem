import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  const allPosts = getAllPosts()
  const relatedPosts = post 
    ? allPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)
    : []

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
            <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı.</p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-100 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full">
                {post.category}
              </span>
              <span>·</span>
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/95" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12 prose-headings:text-gray-900">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            className="prose-lg max-w-none prose-a:text-indigo-600 hover:prose-a:text-indigo-500"
            components={{
              code({ node, inline, className, children, ...props }) {
                return (
                  <code className={`${className} bg-gray-50 rounded px-1.5 py-0.5 text-sm`} {...props}>
                    {children}
                  </code>
                )
              },
              pre({ node, children, ...props }) {
                return (
                  <pre className="bg-gray-50 rounded-xl p-4 overflow-x-auto" {...props}>
                    {children}
                  </pre>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bu Yazıyı Paylaşın</h2>
          <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="p-3 rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Benzer Yazılar</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  href={`/blog/${relatedPost.slug}`} 
                  key={relatedPost.slug}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
                    <div className="p-6">
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-4 group-hover:text-indigo-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <time className="text-sm text-gray-500 mt-2 block">
                        {relatedPost.date}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 