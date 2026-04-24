import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts.js'
import { Header } from './header.jsx'
import { Footer } from './footer.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to all notes
          </Link>

          {post ? (
            <>
              <header className="mb-12 space-y-4">
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {post.date}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance">
                  {post.title}
                </h1>
              </header>

              <div className="prose prose-invert prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:before:content-none prose-code:after:content-none max-w-none">
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">
                404 // NOT_FOUND
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                That post doesn’t exist.
              </h1>
              <p className="text-muted-foreground">
                It may have been renamed or unpublished.
              </p>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  )
}
