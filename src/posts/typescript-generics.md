---
title: 'TypeScript Generics: Tip Güvenli Kod Yazma'
excerpt: 'TypeScript''te generic tiplerin kullanımı ve tip güvenli, yeniden kullanılabilir kod yazma teknikleri...'
date: '29 Aralık 2023'
readTime: '8 dk'
category: 'TypeScript'
---

# TypeScript Generics: Tip Güvenli Kod Yazma

TypeScript'te generic tipler, kodunuzu daha esnek ve yeniden kullanılabilir hale getirmenin güçlü bir yoludur. Tip güvenliğini korurken, farklı veri tipleriyle çalışabilen fonksiyonlar ve sınıflar oluşturmanızı sağlar.

## Generic Tiplerin Temelleri

```typescript
function identity<T>(arg: T): T {
  return arg
}

// Kullanım
const str = identity('hello') // string tipi
const num = identity(42)      // number tipi
```

## Generic Interface'ler

```typescript
interface Box<T> {
  value: T
  getValue(): T
}

class NumberBox implements Box<number> {
  constructor(public value: number) {}
  getValue(): number {
    return this.value
  }
}
```

## Çoklu Generic Parametreler

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

const result = pair('hello', 42) // [string, number]
```

## Generic Constraints

```typescript
interface HasLength {
  length: number
}

function logLength<T extends HasLength>(arg: T): number {
  console.log(arg.length)
  return arg.length
}

// Çalışır
logLength('hello')     // string has length
logLength([1, 2, 3])   // array has length

// Hata verir
// logLength(123)      // number has no length
```

## Generic Utility Types

### Partial

```typescript
interface User {
  id: number
  name: string
  email: string
}

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates }
}
```

### Record

```typescript
type PageInfo = {
  title: string
  url: string
}

const pages: Record<string, PageInfo> = {
  home: { title: 'Ana Sayfa', url: '/' },
  about: { title: 'Hakkında', url: '/about' }
}
```

## Best Practices

1. Anlamlı tip isimleri kullanın (T, U yerine TData, TResponse gibi)
2. Generic constraintleri ile tip güvenliğini artırın
3. Default tip parametreleri kullanın
4. Union ve intersection tipleri ile birlikte kullanın

## İleri Seviye Örnekler

### Generic Factory

```typescript
class GenericFactory<T> {
  create(Ctor: new () => T): T {
    return new Ctor()
  }
}

class Car {
  drive() { console.log('Driving...') }
}

const factory = new GenericFactory<Car>()
const car = factory.create(Car)
```

### Generic Decorators

```typescript
function logged<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    created = new Date()
    
    log() {
      console.log(`Instance created at ${this.created}`)
    }
  }
}

@logged
class Example {
  constructor() {
    console.log('Example instance created')
  }
}
```

Generic tipler, TypeScript'in en güçlü özelliklerinden biridir. Doğru kullanıldığında, kodunuzu hem daha güvenli hem de daha esnek hale getirir. 