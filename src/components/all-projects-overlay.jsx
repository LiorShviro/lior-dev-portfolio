import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { projects } from '../data/projects.js'
import { ProjectRow } from './project-row.jsx'

export function AllProjectsOverlay({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const previous = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function onKey(e) {
      if (e.key === 'Escape') onClose()

      if (e.key === 'Tab') {
        const panel = document.getElementById('all-projects-panel')
        if (!panel) return
        const focusable = panel.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault()
          ;(e.shiftKey ? last : first).focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-background overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      aria-hidden="false"
    >
      <div
        id="all-projects-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="all-projects-title"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="flex items-center justify-between mb-16">
          <h2
            id="all-projects-title"
            className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
          >
            // ALL_PROJECTS [{projects.length}]
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="Close all projects"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </div>
  )
}
