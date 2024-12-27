---
title: Tailwind CSS ile Hızlı Tasarım
excerpt: Tailwind CSS kullanarak modern ve responsive tasarımlar oluşturma...
date: 25 Aralık 2023
readTime: 6 dk
category: CSS
---

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

```html
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
```

## Responsive Tasarım

Tailwind ile responsive tasarım yapmak çok kolay:

```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive metin
</div>
```

## Dark Mode

Dark mode desteği de built-in olarak gelir:

```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Otomatik dark mode
</div>
```