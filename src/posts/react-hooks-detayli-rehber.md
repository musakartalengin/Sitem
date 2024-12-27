---
title: React Hooks Detaylı Rehber
excerpt: React hooks'ların detaylı kullanımı ve best practice'ler...
date: 26 Aralık 2023
readTime: 8 dk
category: React
---

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

```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>Sayaç: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Artır
    </button>
  </div>
);
```

## useEffect Hook'u

useEffect, yan etkileri yönetmek için kullanılır:

```jsx
useEffect(() => {
  document.title = `Sayaç: ${count}`;
}, [count]);
```

## Custom Hooks

Kendi hook'larınızı oluşturabilirsiniz:

```jsx
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
```