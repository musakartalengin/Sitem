'use client'

interface CopyButtonProps {
  language: string
}

export default function CopyButton({ language }: CopyButtonProps) {
  const handleCopy = () => {
    const codeElement = document.querySelector(`[data-code="${language}"]`) as HTMLElement
    if (codeElement) {
      // Tüm kod satırlarını al
      const codeLines = Array.from(codeElement.querySelectorAll('code'))
      
             if (codeLines.length > 0) {
         // Her satırın içeriğini al, line number'ları temizle ve birleştir
         const codeText = codeLines.map(line => {
           const text = line.textContent || ''
           // Line number'ları temizle ama indentation'ı koru
           return text.replace(/^\s*\d+\s*/, '')
         }).join('\n')
         navigator.clipboard.writeText(codeText)
       } else {
        // Fallback: textContent kullan ama line number'ları temizle
        const text = codeElement.textContent || ''
        const cleanedText = text
          .replace(/^\s*\d+\s*/gm, '') // Satır başındaki sayıları kaldır
          .replace(/\n\s*\n/g, '\n') // Fazla boş satırları temizle
          .trim() // Başındaki ve sonundaki boşlukları kaldır
        
        navigator.clipboard.writeText(cleanedText)
      }
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