export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'docker-containers',
    title: 'Docker ile Container Teknolojisine Giriş',
    excerpt: 'Docker container\'ları ile modern uygulama geliştirme ve dağıtım süreçlerini nasıl iyileştirebileceğinizi öğrenin...',
    date: '31 Aralık 2023',
    readTime: '9 dk',
    category: 'DevOps',
    content: `# Docker ile Container Teknolojisine Giriş

Docker, modern yazılım geliştirme ve dağıtım süreçlerinin vazgeçilmez bir parçası haline geldi. Container teknolojisi sayesinde uygulamalarınızı her ortamda aynı şekilde çalıştırabilirsiniz.

## Docker'ın Temelleri

### Container vs VM

\`\`\`plaintext
Container:
- Hafif
- Hızlı başlatma
- Az kaynak kullanımı
- Host OS kernel paylaşımı

VM:
- Ağır
- Yavaş başlatma
- Fazla kaynak kullanımı
- Tam izolasyon
\`\`\`

[... Docker blog yazısının geri kalanı ...]`
  },
  {
    slug: 'react-performance',
    title: 'React Uygulamalarında Performans Optimizasyonu',
    excerpt: 'React uygulamalarınızı hızlandırmak için kullanabileceğiniz en etkili performans optimizasyon teknikleri...',
    date: '30 Aralık 2023',
    readTime: '10 dk',
    category: 'React',
    content: `# React Uygulamalarında Performans Optimizasyonu

React uygulamalarının performansını artırmak, kullanıcı deneyimini iyileştirmenin en önemli yollarından biridir. Bu yazıda, React uygulamalarınızı optimize etmek için kullanabileceğiniz en etkili teknikleri inceleyeceğiz.

[... React performans blog yazısının geri kalanı ...]`
  },
  {
    slug: 'typescript-generics',
    title: 'TypeScript Generics: Tip Güvenli Kod Yazma',
    excerpt: 'TypeScript\'te generic tiplerin kullanımı ve tip güvenli, yeniden kullanılabilir kod yazma teknikleri...',
    date: '29 Aralık 2023',
    readTime: '8 dk',
    category: 'TypeScript',
    content: `# TypeScript Generics: Tip Güvenli Kod Yazma

TypeScript'te generic tipler, kodunuzu daha esnek ve yeniden kullanılabilir hale getirmenin güçlü bir yoludur. Tip güvenliğini korurken, farklı veri tipleriyle çalışabilen fonksiyonlar ve sınıflar oluşturmanızı sağlar.

[... TypeScript generics blog yazısının geri kalanı ...]`
  },
  {
    slug: 'javascript-async-await',
    title: 'JavaScript Async/Await ile Asenkron Programlama',
    excerpt: 'Modern JavaScript\'te asenkron programlamanın en etkili yolu olan async/await yapısının detaylı kullanımı...',
    date: '28 Aralık 2023',
    readTime: '7 dk',
    category: 'JavaScript',
    content: `# JavaScript Async/Await ile Asenkron Programlama

Async/await, JavaScript'te asenkron işlemleri yönetmenin modern ve elegant bir yoludur. Promise tabanlı bu yapı, kodunuzu daha okunabilir ve yönetilebilir hale getirir.

[... JavaScript async/await blog yazısının geri kalanı ...]`
  },
  {
    slug: 'nextjs-ile-modern-web-gelistirme',
    title: 'Next.js ile Modern Web Geliştirme',
    excerpt: 'Modern web geliştirme dünyasında Next.js\'in önemi ve kullanım alanları...',
    date: '27 Aralık 2023',
    readTime: '5 dk',
    category: 'Web Geliştirme',
    content: `
# Next.js ile Modern Web Geliştirme

Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework'tür. 
Server-side rendering, statik site generation, API routes ve daha birçok özellik sunar.

## Next.js'in Avantajları

1. Otomatik kod bölümleme
2. Hibrit statik & server rendering
3. TypeScript desteği
4. Route önbellekleme
5. API Routes

## Nasıl Başlanır?

Next.js ile projeye başlamak çok kolaydır. Tek yapmanız gereken:

\`\`\`bash
npx create-next-app@latest
\`\`\`

komutunu çalıştırmaktır.

### Özellikler ve Kullanım

Next.js size aşağıdaki özellikleri sunar:

- **Sayfa Bazlı Routing**: \`pages\` klasörü altında otomatik routing
- **API Routes**: Backend API'ları kolayca oluşturma
- **Image Optimization**: Otomatik görüntü optimizasyonu
- **Fast Refresh**: Anında kod değişikliği görüntüleme

## Örnek Kod

İşte basit bir Next.js sayfası örneği:

\`\`\`jsx
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>Hoş Geldiniz!</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
\`\`\`
    `
  },
  {
    slug: 'react-hooks-detayli-rehber',
    title: 'React Hooks Detaylı Rehber',
    excerpt: 'React hooks\'ların detaylı kullanımı ve best practice\'ler...',
    date: '26 Aralık 2023',
    readTime: '8 dk',
    category: 'React',
    content: `
# React Hooks Detaylı Rehber

React Hooks, fonksiyonel bileşenlerde state ve yaşam döngüsü özelliklerini kullanmamızı sağlar.

## En Çok Kullanılan Hooks

1. useState
2. useEffect
3. useContext
4. useRef
5. useMemo

## useState Hook'u

useState, bileşenlerde state yönetimini sağlar:

\`\`\`jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>Sayaç: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Artır
    </button>
  </div>
);
\`\`\`

## useEffect Hook'u

useEffect, yan etkileri yönetmek için kullanılır:

\`\`\`jsx
useEffect(() => {
  document.title = \`Sayaç: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

Kendi hook'larınızı oluşturabilirsiniz:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
\`\`\`
    `
  },
  {
    slug: 'tailwind-css-ile-hizli-tasarim',
    title: 'Tailwind CSS ile Hızlı Tasarım',
    excerpt: 'Tailwind CSS kullanarak modern ve responsive tasarımlar oluşturma...',
    date: '25 Aralık 2023',
    readTime: '6 dk',
    category: 'CSS',
    content: `
# Tailwind CSS ile Hızlı Tasarım

Tailwind CSS, utility-first bir CSS framework'üdür. 
Hızlı ve özelleştirilebilir tasarımlar oluşturmanızı sağlar.

## Tailwind'in Özellikleri

1. Utility-First Yaklaşım
2. JIT (Just-In-Time) Compiler
3. Responsive Tasarım
4. Kolay Özelleştirme

## Örnek Kullanım

Basit bir kart bileşeni örneği:

\`\`\`html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/card-image.jpg" alt="Kart Görseli">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Kart Başlığı</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tailwind
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #css
    </span>
  </div>
</div>
\`\`\`

## Responsive Tasarım

Tailwind ile responsive tasarım yapmak çok kolay:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive metin
</div>
\`\`\`

## Dark Mode

Dark mode desteği de built-in olarak gelir:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Otomatik dark mode
</div>
\`\`\`
    `
  }
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug)
}