import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/ forever",
    desc: "For small teams getting started.",
    features: ["Up to 5 members", "Unlimited projects", "Basic integrations", "Community support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Studio",
    price: "$12",
    period: "/ user / mo",
    desc: "Everything async teams need to ship faster.",
    features: [
      "Unlimited members",
      "AI summaries & search",
      "200+ integrations",
      "Priority support",
      "Advanced permissions",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Galaxy",
    price: "Custom",
    period: "",
    desc: "Enterprise-grade for distributed orgs.",
    features: ["SSO & SCIM", "Custom AI models", "Dedicated CSM", "99.99% SLA", "On-prem option"],
    cta: "Talk to sales",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-5">
            Simple. <span className="text-gradient">Honest.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. Scale when you're ready. No per-seat surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-1000">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                tier.featured
                  ? "border-border bg-gradient-to-b from-secondary/50 to-card shadow-elegant ring-1 ring-border/50 z-10 scale-100 md:scale-105"
                  : "border-border bg-card hover:bg-card/80"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  Most popular
                </div>
              )}
              <div className="font-display text-lg font-semibold mb-2">{tier.name}</div>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.desc}</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>
              <Button
                className={`w-full rounded-full mb-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.featured
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-glow"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta}
              </Button>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
