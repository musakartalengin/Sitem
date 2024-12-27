---
title: Next.js ile Modern Web Geliştirme
excerpt: Modern web geliştirme dünyasında Next.js'in önemi ve kullanım alanları...
date: 27 Aralık 2023
readTime: 5 dk
category: Web Geliştirme
---

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

```bash
npx create-next-app@latest
```

komutunu çalıştırmaktır.

### Özellikler ve Kullanım

Next.js size aşağıdaki özellikleri sunar:

- **Sayfa Bazlı Routing**: `pages` klasörü altında otomatik routing
- **API Routes**: Backend API'ları kolayca oluşturma
- **Image Optimization**: Otomatik görüntü optimizasyonu
- **Fast Refresh**: Anında kod değişikliği görüntüleme

## Örnek Kod

İşte basit bir Next.js sayfası örneği:

```jsx
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
```