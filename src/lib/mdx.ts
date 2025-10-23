import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { Project } from '@/lib/types'

const contentDirectory = path.join(process.cwd(), 'src/content')

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      title: data.title,
      slug: data.slug || slug,
      summary: data.summary || data.description || '',
      role: data.role || 'Full Stack Engineer',
      timeframe: data.timeframe || '2024',
      stack: data.stack || [],
      outcomes: data.outcomes || [],
      hero: data.hero || data.image || '/images/placeholder.svg',
      repo: data.repo,
      demo: data.demo,
      content: content,
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const projectsDir = path.join(contentDirectory, 'projects')
    const files = fs.readdirSync(projectsDir)
    
    const projects = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const slug = file.replace('.mdx', '')
          return await getProject(slug)
        })
    )
    
    return projects.filter(Boolean) as Project[]
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export function getAllProjectSlugs(): string[] {
  try {
    const projectsDir = path.join(contentDirectory, 'projects')
    const files = fs.readdirSync(projectsDir)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Error reading project slugs:', error)
    return []
  }
}
