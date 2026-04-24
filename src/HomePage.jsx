import { useState } from 'react'
import { Header } from './components/header.jsx'
import { Hero } from './components/hero.jsx'
import { StatusBar } from './components/status-bar.jsx'
import { ProjectsIndex } from './components/projects-index.jsx'
import { BlogPreview } from './components/blog-preview.jsx'
import { Contact } from './components/contact.jsx'
import { Footer } from './components/footer.jsx'
import { AllProjectsOverlay } from './components/all-projects-overlay.jsx'

export default function HomePage() {
  const [projectsOpen, setProjectsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header onOpenProjects={() => setProjectsOpen(true)} />
      <Hero />
      <StatusBar />
      <ProjectsIndex onOpenProjects={() => setProjectsOpen(true)} />
      <BlogPreview />
      <Contact />
      <Footer />
      <AllProjectsOverlay open={projectsOpen} onClose={() => setProjectsOpen(false)} />
    </main>
  )
}
