import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Header({ onOpenProjects }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function handleHomeClick(e) {
    if (pathname === '/') {
      e.preventDefault()
      scrollTop()
    }
  }

  function handleProjectsClick() {
    if (pathname !== '/') navigate('/')
    onOpenProjects()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors"
        >
          LIOR // DS
        </Link>

        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <button
              onClick={handleProjectsClick}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <a
              href="#blog"
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LiorShviro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lior-shviro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
