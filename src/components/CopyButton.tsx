'use client'

interface CopyButtonProps {
  language: string
}

export default function CopyButton({ language }: CopyButtonProps) {
  const handleCopy = () => {
    const codeElement = document.querySelector(`[data-code="${language}"]`) as HTMLElement
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || '')
      // İsteğe bağlı: Kopyalandı bildirimi eklenebilir
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      Kopyala
    </button>
  )
} 