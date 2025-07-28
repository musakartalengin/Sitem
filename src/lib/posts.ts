import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

function getPostData(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Okuma süresini hesaplamak için basit bir fonksiyon
  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    return `${Math.ceil(minutes)} dk`;
  }

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: new Date(data.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: calculateReadTime(content),
    category: data.category,
    content,
  }
}


export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'))
    
    if (markdownFiles.length === 0) {
      return []
    }
    
    const allPosts = markdownFiles.map(fileName => {
      return getPostData(fileName)
    })

    // Yazıları tarihe göre en yeniden eskiye sırala
    return allPosts.sort((post1, post2) => {
      return new Date(post2.date) > new Date(post1.date) ? 1 : -1
    });
  } catch (error) {
    console.error('Posts okunamadı:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fileName = `${slug}.md`
  const fullPath = path.join(postsDirectory, fileName);
  
  if (fs.existsSync(fullPath)) {
    return getPostData(fileName);
  }

  return undefined;
}