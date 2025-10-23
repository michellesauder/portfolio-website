import { Section, Card, CardContent, CardHeader } from '@/components'
import { getAllBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { CalendarDays, Clock } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thoughts on web development, technology, and creating meaningful digital experiences.
          </p>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    <Link 
                      href={post.url || `/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                      {...(post.url && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={post.url || `/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium"
                    {...(post.url && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {post.url ? "Read on Medium →" : "Read more →"}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
