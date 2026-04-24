export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <span className="relative h-2 w-2 rounded-full bg-background" />
              </span>
              Orbit
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              The operating system for async teams. Built remote-first, since day one.
            </p>
          </div>
          {[
            { t: "Product", l: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { t: "Company", l: ["About", "Careers", "Blog", "Press"] },
            { t: "Resources", l: ["Docs", "Help center", "Community", "Status"] },
          ].map((col) => (
            <div key={col.t}>
              <div className="font-display font-semibold mb-3 text-sm">{col.t}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.l.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-foreground transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© 2026 Orbit Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
