import { projects } from '../data/projects.js'
import { ProjectRow } from './project-row.jsx'

const featured = projects.filter((p) => p.featured)

export function ProjectsIndex({ onOpenProjects }) {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-16">
          01 // SELECTED_PROJECTS [{featured.length}]
        </h2>

        <div className="space-y-0">
          {featured.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
          <div className="border-t border-border" />
        </div>

        <div className="mt-10">
          <button
            onClick={onOpenProjects}
            className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary px-5 py-3"
          >
            View all projects [{projects.length}]
          </button>
        </div>
      </div>
    </section>
  )
}
