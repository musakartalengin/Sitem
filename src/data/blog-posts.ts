export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Next.js ile Modern Web Geliştirme",
    excerpt: "Modern web geliştirme dünyasında Next.js'in önemi ve kullanım alanları...",
    date: "27 Aralık 2023",
    readTime: "5 dk",
    slug: "nextjs-ile-modern-web-gelistirme",
    category: "Web Geliştirme",
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
    id: 2,
    title: "React Hooks Detaylı Rehber",
    excerpt: "React hooks'ların detaylı kullanımı ve best practice'ler...",
    date: "26 Aralık 2023",
    readTime: "8 dk",
    slug: "react-hooks-detayli-rehber",
    category: "React",
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
    id: 3,
    title: "Tailwind CSS ile Hızlı Tasarım",
    excerpt: "Tailwind CSS kullanarak modern ve responsive tasarımlar oluşturma...",
    date: "25 Aralık 2023",
    readTime: "6 dk",
    slug: "tailwind-css-ile-hizli-tasarim",
    category: "CSS",
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
];