import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Musa Kartal Engin</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Sayısal Tasarım Mühendisi | FPGA & Çip Tasarımı Meraklısı
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/95 dark:from-gray-900" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
            
            <h2>Hakkımda</h2>
            <p>
              Merhaba, ben Musa Kartal Engin. Elektrik‑Elektronik Mühendisiyim ve son birkaç yıldır FPGA, sayısal tasarım ve çip tasarımı konularında çalışıyorum. Üniversite yıllarımda başlayan merakımı — Verilog‑RTL kodlamadan Vivado simülasyonlarına, ASIC akışlarından doğrulama süreçlerine kadar — sahada test ederek geliştiriyorum.
            </p>
            <p>
              Bugüne kadar Yongatek'te uzun dönem stajyer mühendis olarak algoritmalar geliştirdim, kayan nokta işlemcileri için IP çekirdekleri tasarladım ve UART‑I2C‑SPI gibi arabirimleri RTL düzeyinde hayata geçirdim. TÜBİTAK projeleri, Teknofest derecesi ve gemi elektrik atölyesindeki tecrübelerim, tasarımın yalnızca laboratuvarda değil gerçek dünyada da çalışması gerektiğini öğretti.
            </p>
            
            <h3 className="mt-8">Temel Yetkinliklerim</h3>
            <ul>
              <li>Sayısal Mantık Tasarımı (VHDL & Verilog)</li>
              <li>FPGA Tabanlı Sistem Geliştirme</li>
              <li>Çip Tasarım Akışı Temelleri</li>
              <li>Gömülü Sistemler ve Arayüz Protokolleri (AXI, APB)</li>
            </ul>

            <h3>Neden Bu Blog?</h3>
            <p>
              Bu blogda "sahada işe yarayan hap bilgiler" paylaşmak istiyorum. Türkçe kaynak bulmakta zorlananlar için:
            </p>
            <ul>
              <li>Kısa, öz ama derinlemesine FPGA ve ASIC notları</li>
              <li>Vivado, ModelSim, UVM gibi araçlarda pratik ipuçları</li>
              <li>Projelerden çıkarılan dersler ve kariyer önerileri</li>
            </ul>
            <p>
              Amacım; öğrendiklerimi basit, abartısız bir dille aktarıp birlikte büyümek. Eğer sen de donanım tasarımıyla ilgileniyor ve "ne öğrenmeliyim?" sorusuna cevap arıyorsan, doğru yerdesin. Yorumlarını bekliyorum!
            </p>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Bana Ulaşın</h3>
               <div className="flex justify-center gap-6">
                <Link href="https://github.com/musakartalengin" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaGithub size={28} />
                </Link>
                <Link href="https://linkedin.com/in/musa-kartal-engin-34b64b189" target="_blank" rel="noopener noreferrer"
                   className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaLinkedin size={28} />
                </Link>
                {/* İsterseniz Twitter veya başka bir sosyal medya ekleyebilirsiniz.
                <Link href="https://twitter.com/kullaniciadi" target="_blank" rel="noopener noreferrer"
                   className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaTwitter size={28} />
                </Link>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 