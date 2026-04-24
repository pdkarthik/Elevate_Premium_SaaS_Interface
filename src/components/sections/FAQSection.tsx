import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes Orbit different from Slack or Notion?",
    a: "Orbit is built async-first. Instead of stitching together chat, docs, and tasks, every conversation is structured around the work itself — so context never gets lost.",
  },
  {
    q: "Do you support real-time collaboration too?",
    a: "Yes. Real-time editing, voice rooms, and live cursors are built in — but they're optional, not the default.",
  },
  {
    q: "How does the AI work?",
    a: "Orbit's AI summarizes threads, drafts updates, and surfaces blockers. It runs on your team's data only — never trained across customers.",
  },
  {
    q: "Can I migrate from another tool?",
    a: "We offer one-click importers for Slack, Linear, Notion, and Asana. Most teams are fully migrated in under an hour.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            Questions, answered.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-5 bg-card/50 transition-colors hover:bg-card/80"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
