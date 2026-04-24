import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/50 via-card to-card p-10 md:p-20 text-center shadow-elegant">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-secondary blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-5">
              Bring your team <span className="text-gradient">into orbit.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of async teams shipping more, meeting less, and finally enjoying their workday.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-glow px-7 h-12 text-base"
              >
                Start free trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/50 backdrop-blur hover:bg-card hover:text-foreground px-7 h-12 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:border-primary/30 active:scale-95"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
