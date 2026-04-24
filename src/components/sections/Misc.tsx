const logos = ["NEBULA", "QUANTA", "HELIOS", "VERTEX", "PRISM", "AXIOM", "LUMEN"];

export const LogosSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
      Trusted by 12,000+ async teams
    </p>
    <div className="relative">
      <div className="flex animate-marquee gap-16 w-max">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="font-display text-2xl font-bold text-muted-foreground/50 tracking-widest whitespace-nowrap hover:text-foreground transition-colors cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export const StatsSection = () => (
  <section className="py-20 border-y border-border bg-card/30">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { v: "12k+", l: "Async teams" },
        { v: "84%", l: "Fewer meetings" },
        { v: "200+", l: "Integrations" },
        { v: "4.9★", l: "G2 rating" },
      ].map((s) => (
        <div key={s.l} className="hover:-translate-y-1 transition-transform duration-300">
          <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{s.v}</div>
          <div className="text-sm text-muted-foreground font-medium">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

export const TestimonialSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl text-center">
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-6">
        What teams say
      </span>
      <blockquote className="font-display text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-10">
        "We cut our standup hours by <span className="text-gradient">73%</span> and shipped
        our biggest release ever — in a quarter where half the team was offline."
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-sm" />
        <div className="text-left">
          <div className="font-semibold text-foreground">Mira Okafor</div>
          <div className="text-sm text-muted-foreground font-medium">Head of Engineering · Nebula</div>
        </div>
      </div>
    </div>
  </section>
);
