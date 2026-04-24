import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'

export function BlogPreview() {
  return (
    <section id="blog" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-16">
          02 // LATEST_NOTES [{posts.length}]
        </h2>

        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-t border-border hover:bg-secondary/30 transition-all duration-300 -mx-6 px-6"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider md:w-28 flex-shrink-0">
                {post.date}
              </span>
              <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}

          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
