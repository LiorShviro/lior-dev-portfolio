import headshot from '../assets/hero.png'

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">
                Data Scientist & LLM Analyst
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-foreground text-balance">
                Lior | LLM Workflows Analyst
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Exploring the intersection of large language models, data pipelines,
                and production-grade AI systems. Building tools that transform research into impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-mono text-xs tracking-wider hover:bg-secondary/80 transition-all duration-300"
              >
                View My Research
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-secondary border border-primary/30 breathing-border overflow-hidden">
                <img
                  src={headshot}
                  alt="Lior Shviro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
