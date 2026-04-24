import { ArrowRight } from 'lucide-react'

export function ProjectRow({ project }) {
  return (
    <div className="group border-t border-border py-8 hover:bg-secondary/30 transition-all duration-300 -mx-6 px-6">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
        <h3 className="font-serif text-xl lg:text-2xl text-foreground lg:w-64 lg:flex-shrink-0">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed flex-1 text-sm lg:text-base">
          {project.summary}
        </p>

        <div className="flex items-center gap-4 lg:flex-shrink-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-primary/80 bg-primary/10 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3">
            {project.gameLink && (
              <a
                href={project.gameLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Play ↗
              </a>
            )}
            {project.paperLink && (
              <a
                href={project.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Paper ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-mono text-xs hidden lg:inline">GitHub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
