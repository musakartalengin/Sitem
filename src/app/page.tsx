'use client'

import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { useState } from 'react'

export default function Home() {
  const posts = getAllPosts()
  const categories = ['Tümü', ...new Set(posts.map(post => post.category))]
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts
    .filter(post => selectedCategory === 'Tümü' || post.category === selectedCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 z-0" />
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 relative z-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-center mb-6">
            Düşünceler & Deneyimler
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 dark:text-white dark:placeholder-gray-400"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200
                         text-sm font-medium ${
                           selectedCategory === category
                             ? 'bg-indigo-600 text-white shadow-lg scale-105'
                             : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white shadow-md hover:shadow-lg'
                         }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 -mt-4 pb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Sonuç Bulunamadı</h2>
            <p className="text-gray-600 dark:text-gray-400">Arama kriterlerinize uygun blog yazısı bulunamadı.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="group"
              >
                <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-800" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 mb-3">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <time className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </time>
                      <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-200">
                        Devamını Oku
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

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
