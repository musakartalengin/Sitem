'use client'

interface CopyButtonProps {
  language: string
}

export default function CopyButton({ language }: CopyButtonProps) {
  const handleCopy = () => {
    const codeElement = document.querySelector(`[data-code="${language}"]`) as HTMLElement
    if (codeElement) {
      // Sadece kod içeriğini al, line number'ları hariç tut
      const text = codeElement.textContent || ''
      // Line number'ları ve fazla boşlukları temizle
      const cleanedText = text
        .replace(/^\s*\d+\s*/gm, '') // Satır başındaki sayıları ve boşlukları kaldır
        .replace(/\n\s*\n/g, '\n') // Fazla boş satırları temizle
        .trim() // Başındaki ve sonundaki boşlukları kaldır
      
      navigator.clipboard.writeText(cleanedText)
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