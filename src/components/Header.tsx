'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-center py-8 border-b dark:border-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Musa Kartal Engin</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Elektrik Elektronik Mühendisi</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Twitter
          </a>
        </div>
      </div>
      <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
              Ana Sayfa
            </Link>
            <Link href="/hakkimda" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
              Hakkımda
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  )
} 