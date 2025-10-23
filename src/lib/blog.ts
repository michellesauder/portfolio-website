import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
  featured?: boolean
  url?: string
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDirectory, 'blog', `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      title: data.title,
      slug: data.slug || slug,
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      content: content,
      featured: data.featured || false,
      url: data.url,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(contentDirectory, 'blog')
    const files = fs.readdirSync(blogDir)
    
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const slug = file.replace('.mdx', '')
          return await getBlogPost(slug)
        })
    )
    
    // Sort by date (newest first)
    return posts
      .filter(Boolean)
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[]
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    const blogDir = path.join(contentDirectory, 'blog')
    const files = fs.readdirSync(blogDir)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Error reading blog slugs:', error)
    return []
  }
}
