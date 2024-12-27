---
title: 'JavaScript Async/Await ile Asenkron Programlama'
excerpt: 'Modern JavaScript''te asenkron programlamanın en etkili yolu olan async/await yapısının detaylı kullanımı...'
date: '28 Aralık 2023'
readTime: '7 dk'
category: 'JavaScript'
---

# JavaScript Async/Await ile Asenkron Programlama

Async/await, JavaScript'te asenkron işlemleri yönetmenin modern ve elegant bir yoludur. Promise tabanlı bu yapı, kodunuzu daha okunabilir ve yönetilebilir hale getirir.

## Neden Async/Await?

Geleneksel callback ve Promise yapılarına göre async/await'in avantajları:

1. Daha temiz ve okunabilir kod
2. Hata yönetimi kolaylığı
3. Debugging kolaylığı
4. Senkron kod görünümü

## Temel Kullanım

```javascript
async function veriGetir() {
  try {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Veri alınamadı:', error)
  }
}
```

## Pratik Örnekler

### Sıralı API Çağrıları

```javascript
async function kullaniciVePostlariniGetir(userId) {
  const kullanici = await fetch(`/api/users/${userId}`).then(r => r.json())
  const postlar = await fetch(`/api/posts?userId=${userId}`).then(r => r.json())
  
  return {
    kullanici,
    postlar
  }
}
```

### Paralel İşlemler

```javascript
async function parallelIslemler() {
  const [sonuc1, sonuc2] = await Promise.all([
    fetch('/api/data1').then(r => r.json()),
    fetch('/api/data2').then(r => r.json())
  ])
  
  return { sonuc1, sonuc2 }
}
```

## Best Practices

1. Her zaman try/catch kullanın
2. Gereksiz await kullanımından kaçının
3. Promise.all ile paralel işlemleri optimize edin
4. async fonksiyonları modüler tutun

## Yaygın Hatalar ve Çözümleri

```javascript
// ❌ Yanlış
async function yanlisKullanim() {
  const veri = await fetch('/api/data')
  return veri.json() // Promise döner!
}

// ✅ Doğru
async function dogruKullanim() {
  const veri = await fetch('/api/data')
  return await veri.json()
}
```

## Performans İpuçları

1. Gereksiz sıralı await'lerden kaçının
2. Büyük döngülerde Promise.all kullanın
3. Önbelleğe alma stratejileri uygulayın
4. Hata durumlarını düzgün yönetin

Async/await, modern JavaScript'in en güçlü özelliklerinden biridir. Doğru kullanıldığında, asenkron işlemleri yönetmek çok daha kolay hale gelir. 