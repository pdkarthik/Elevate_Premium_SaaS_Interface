import { Calendar, Globe, MessageSquare, Users, Workflow, Zap } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Async-first workflows",
    desc: "Replace 80% of meetings with structured updates that travel with the work.",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
    image: "/feature-nodes.png",
    imageClass: "absolute inset-0 w-full h-full pointer-events-none z-0",
  },
  {
    icon: MessageSquare,
    title: "Threaded everything",
    desc: "Decisions surface where they happen — not buried in chat.",
    span: "md:col-span-2",
  },
  {
    icon: Globe,
    title: "Built for timezones",
    desc: "Smart handoffs across continents. Always.",
    span: "",
  },
  {
    icon: Zap,
    title: "Instant context",
    desc: "AI summaries on every project.",
    span: "",
  },
  {
    icon: Calendar,
    title: "Focus calendar",
    desc: "Auto-blocks deep work, defends your time.",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Team rituals, automated",
    desc: "Stand-ups, retros, planning — all on autopilot.",
    span: "md:col-span-2",
    image: "/workflow.png",
    imageClass: "absolute right-0 top-0 w-[60%] h-full [mask-image:linear-gradient(to_left,white_20%,transparent_100%)] opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none z-0",
  },
];

export const FeatureBentoGrid = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">
            The product
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-5">
            One workspace.<br />
            <span className="text-gradient">Zero context loss.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature in Orbit is designed to keep your team in flow —
            whether you're three people or three hundred.
          </p>
        </div>

        {/* Note: Mobile is now auto-rows-auto so boxes can expand to fit content, md is auto-rows-[200px] */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[200px]">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:border-primary/40 ${
                f.span
              } ${f.accent ? "bg-gradient-to-br from-secondary/80 via-card to-card" : "bg-card"}`}
            >
              {f.accent && (
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-secondary blur-3xl group-hover:bg-secondary/80 transition-all" />
              )}
              {f.image && (
                <div className={f.imageClass || "absolute inset-0 w-full h-full pointer-events-none"}>
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover object-center" />
                </div>
              )}
              <div className="relative h-full flex flex-col justify-between z-10 min-h-[140px] md:min-h-0">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 border border-primary/20 mb-4 md:mb-0">
                  <f.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="relative z-20 bg-background/60 backdrop-blur-lg p-5 -mx-2 -mb-2 rounded-2xl border border-border/50 shadow-sm transition-colors group-hover:bg-background/80 mt-auto">
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-2 text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
