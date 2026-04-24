import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-mesh">
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* orbit rings */}
      <div className="absolute left-1/2 top-32 -translate-x-1/2 pointer-events-none opacity-60">
        <div className="relative h-[600px] w-[600px] md:h-[900px] md:w-[900px] animate-orbit">
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-12 rounded-full border border-primary/15" />
          <div className="absolute inset-24 rounded-full border border-primary/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary-glow shadow-glow" />
          <div className="absolute bottom-12 right-12 h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow animate-pulse-glow" />
            <span>Now with AI handoffs</span>
            <span className="text-border">|</span>
            <a href="#" className="text-foreground hover:text-primary-glow transition inline-flex items-center gap-1 group">
              See what's new <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-6">
            The operating system for{" "}
            <span className="text-gradient">async teams.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Orbit replaces the chaos of chat, docs, and meetings with one
            focused workspace built for teams that ship across timezones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-glow px-7 h-12 text-base"
            >
              Start for free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/50 backdrop-blur hover:bg-card hover:text-foreground px-7 h-12 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:border-primary/30 active:scale-95"
            >
              Watch the demo
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free 14-day trial · No credit card · Cancel anytime
          </p>
        </div>

        {/* Mock app preview with animations */}
        <div className="relative mt-20 mx-auto max-w-5xl animate-float">
          <div className="absolute -inset-4 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-3xl blur-3xl opacity-60" />
          <div className="relative glass rounded-2xl shadow-elegant overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/60 hover:bg-destructive transition-colors" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary-glow/60 hover:bg-primary-glow transition-colors" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/60 hover:bg-primary transition-colors" />
              <div className="ml-4 text-xs text-muted-foreground">orbit.app / studio / launch-q2</div>
            </div>
            <div className="grid grid-cols-12 gap-0">
              <aside className="col-span-3 border-r border-border p-4 space-y-2 hidden md:block">
                {["Inbox", "Today", "Projects", "Threads", "Docs"].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
                      i === 2 ? "bg-secondary text-foreground font-medium shadow-sm" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {item}
                    {i === 0 && <span className="text-[10px] bg-primary text-primary-foreground rounded-full px-1.5 font-bold animate-pulse">3</span>}
                  </div>
                ))}
              </aside>
              <main className="col-span-12 md:col-span-9 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">Q2 Launch</h3>
                  <div className="flex -space-x-2">
                    {["bg-primary", "bg-primary-glow", "bg-accent"].map((c, i) => (
                      <div key={i} className={`h-6 w-6 rounded-full ${c} border-2 border-card hover:-translate-y-1 transition-transform cursor-pointer shadow-sm`} />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { t: "Marketing site copy", d: "Mira shipped review", done: true, delay: "delay-0" },
                    { t: "Pricing page redesign", d: "Waiting on Diego", done: false, delay: "delay-75" },
                    { t: "Launch email sequence", d: "Draft ready", done: false, delay: "delay-150" },
                  ].map((item) => (
                    <div key={item.t} className={`flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border hover:bg-secondary/60 transition-colors cursor-pointer group animate-fade-in-up ${item.delay}`}>
                      <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors ${item.done ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"}`}>
                        {item.done && <Check className="h-2.5 w-2.5 text-primary-foreground" />}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm transition-colors ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{item.t}</div>
                        <div className="text-xs text-muted-foreground">{item.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-secondary/50 border border-border p-4 animate-slide-in-right delay-300 hover:shadow-sm transition-shadow cursor-default relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-glow" />
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium mb-1 pl-2">
                    <Sparkles className="h-3 w-3 text-primary" /> Orbit AI
                  </div>
                  <p className="text-sm text-foreground/80 pl-2">
                    Diego's blocked on pricing — last update 14h ago. Want to nudge or reassign?
                  </p>
                  <div className="flex gap-2 mt-3 pl-2">
                    <button className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">Nudge Diego</button>
                    <button className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-background border border-border hover:bg-secondary transition-colors">Reassign</button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
