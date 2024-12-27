export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Hakkımda</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Merhaba! Ben Musa Kartal Engin, bir Elektrik Elektronik Mühendisiyim. 
              Modern web teknolojileri üzerine çalışıyor, mühendislik ve yazılım alanındaki deneyimlerimi 
              bir araya getiriyorum. Bu blog, teknik deneyimlerimi ve öğrendiklerimi paylaşmak için 
              oluşturduğum bir platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Uzmanlık Alanlarım
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Elektrik Elektronik Mühendisliği</li>
              <li>Frontend Geliştirme (React, Next.js)</li>
              <li>UI/UX Tasarım</li>
              <li>Responsive Web Tasarımı</li>
              <li>Modern JavaScript</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              İletişim
            </h2>
            <p className="mb-6">
              Benimle iletişime geçmek veya projeleriniz hakkında konuşmak isterseniz,
              aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsiniz:
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/musakartalengin" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800">GitHub</a>
              <span className="text-gray-300">•</span>
              <a href="https://linkedin.com/in/musa-kartal-engin-34b64b189/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 