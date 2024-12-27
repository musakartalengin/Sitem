---
title: 'React Uygulamalarında Performans Optimizasyonu'
excerpt: 'React uygulamalarınızı hızlandırmak için kullanabileceğiniz en etkili performans optimizasyon teknikleri...'
date: '30 Aralık 2023'
readTime: '10 dk'
category: 'React'
---

# React Uygulamalarında Performans Optimizasyonu

React uygulamalarının performansını artırmak, kullanıcı deneyimini iyileştirmenin en önemli yollarından biridir. Bu yazıda, React uygulamalarınızı optimize etmek için kullanabileceğiniz en etkili teknikleri inceleyeceğiz.

## Gereksiz Render'ları Önleme

### React.memo Kullanımı

```jsx
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  console.log('TodoItem render')
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
    </li>
  )
})
```

### useMemo ve useCallback

```jsx
function TodoList() {
  const [todos, setTodos] = useState([])
  
  const expensiveCalculation = useMemo(() => {
    return todos.filter(todo => todo.completed).length
  }, [todos])
  
  const handleToggle = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])
  
  return (
    <div>
      <h2>Tamamlanan: {expensiveCalculation}</h2>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}
```

## Code Splitting

### React.lazy ve Suspense

```jsx
const AdminPanel = React.lazy(() => import('./AdminPanel'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminPanel />
    </Suspense>
  )
}
```

## State Yönetimi Optimizasyonu

### Context Optimizasyonu

```jsx
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  
  const value = useMemo(() => ({
    todos,
    addTodo: (text) => setTodos(prev => [...prev, { id: Date.now(), text }]),
    removeTodo: (id) => setTodos(prev => prev.filter(todo => todo.id !== id))
  }), [todos])
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}
```

## Liste Optimizasyonu

### Virtualization

```jsx
import { FixedSizeList } from 'react-window'

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].text}
    </div>
  )
  
  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  )
}
```

## Image Optimizasyonu

### Lazy Loading

```jsx
function ImageGallery() {
  return (
    <div>
      {images.map(image => (
        <img
          key={image.id}
          src={image.url}
          loading="lazy"
          alt={image.alt}
        />
      ))}
    </div>
  )
}
```

## Bundle Size Optimizasyonu

### Tree Shaking

```javascript
// ❌ Yanlış
import lodash from 'lodash'

// ✅ Doğru
import { debounce } from 'lodash/debounce'
```

## Performans Ölçümü

### React Profiler API

```jsx
import { Profiler } from 'react'

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`Component ${id} rendered in ${actualDuration}ms`)
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Component />
    </Profiler>
  )
}
```

## Best Practices

1. Büyük listelerde virtualization kullanın
2. Gereksiz re-render'ları önleyin
3. Code splitting ile bundle size'ı küçültün
4. Resimleri optimize edin
5. Memoization tekniklerini doğru kullanın
6. Event handler'ları useCallback ile optimize edin

React performans optimizasyonu, sürekli gelişen ve öğrenilen bir konudur. Bu teknikleri doğru yerde ve zamanda kullanmak, uygulamanızın performansını önemli ölçüde artıracaktır. 