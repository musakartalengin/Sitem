'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
      aria-label="Yukarı çık"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  ) : null
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Tema değiştir"
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          <div className="bg-white dark:bg-gray-900 text-center py-8 border-b dark:border-gray-800">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Musa Kartal Engin</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Elektrik Elektronik Mühendisi & Web Geliştirici</p>
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
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
                  Ana Sayfa
                </a>
                <a href="/hakkimda" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
                  Hakkımda
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-12">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <p className="text-center text-gray-600 dark:text-gray-300">
                © 2023 Musa Kartal Engin. Tüm hakları saklıdır.
              </p>
            </div>
          </footer>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
