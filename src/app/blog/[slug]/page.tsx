import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyButton from '@/components/CopyButton'

export async function generateStaticParams() {
  const posts = await getAllPosts()

  // Eğer hiç post yoksa boş array döndür
  if (posts.length === 0) {
    return []
  }

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
          </header>

                     {/* Content */}
           <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-p:text-left prose-p:leading-relaxed prose-li:text-gray-900 dark:prose-li:text-gray-100 prose-h2:text-gray-900 dark:prose-h2:text-white prose-h3:text-gray-900 dark:prose-h3:text-white prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-indigo-50 dark:prose-code:bg-indigo-900/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-lg prose-th:border prose-th:border-gray-200 dark:prose-th:border-gray-600 prose-th:bg-gradient-to-r prose-th:from-gray-50 prose-th:to-gray-100 dark:prose-th:from-gray-700 dark:prose-th:to-gray-800 prose-th:text-gray-900 dark:prose-th:text-white prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-bold prose-th:text-sm prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-600 prose-td:px-6 prose-td:py-4 prose-td:text-gray-900 dark:prose-td:text-gray-100 prose-td:text-sm prose-tr:bg-white dark:prose-tr:bg-gray-800 prose-tr:hover:bg-gray-50 dark:prose-tr:hover:bg-gray-700 prose-tr:transition-colors">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
                             components={{
                 code({ className, children, ...props }) {
                   const match = /language-(\w+)/.exec(className || '')
                                      return match ? (
                     <div className="relative">
                       <div className="absolute top-0 right-0 p-2">
                         <CopyButton language={match[1]} />
                       </div>
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg"
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                        showLineNumbers={true}
                        data-code={match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  )
} 