import { activity } from '../data/activity.js'

export function ActivityFeed() {
  return (
    <section className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">
          // RECENT
        </p>

        <ul className="space-y-0">
          {activity.map((item, i) => (
            <li key={i}>
              <div className="grid grid-cols-[7rem_6rem_1fr] items-baseline gap-4 py-2 border-t border-border font-mono text-xs tracking-wider">
                <span className="text-muted-foreground">{item.date}</span>
                <span className="text-primary/70">{item.kind}</span>
                <span className="text-foreground">{item.title}</span>
              </div>
            </li>
          ))}
          <li>
            <div className="border-t border-border" />
          </li>
        </ul>
      </div>
    </section>
  )
}
