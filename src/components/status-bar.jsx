// Edit the entries array to update your current status
const entries = [
  { label: 'BUILDING', value: 'ML research · data science projects' },
  { label: 'FOCUS', value: 'machine learning · deep learning · LLMs' },
  { label: 'STATUS', value: 'open to collaborations' },
]

export function StatusBar() {
  return (
    <div className="border-y border-border bg-primary/[0.03]">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {entries.map((entry) => (
            <div key={entry.label} className="flex items-start gap-3 py-3 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 animate-pulse" />
              <div>
                <p className="font-mono text-[10px] tracking-widest text-primary/70 uppercase mb-1">
                  {entry.label}
                </p>
                <p className="font-mono text-xs text-foreground tracking-wide">
                  {entry.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
