import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`container transition-all duration-300 ${scrolled ? "max-w-5xl" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow animate-pulse-glow" />
              <span className="relative h-2 w-2 rounded-full bg-background" />
            </span>
            Orbit
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
            <a href="#" className="hover:text-foreground transition">Changelog</a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex rounded-full">
              Sign in
            </Button>
            <Button size="sm" className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-glow">
              Get Orbit
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full h-9 w-9 hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[110%] left-4 right-4 glass rounded-2xl p-4 shadow-elegant flex flex-col gap-4 animate-fade-in-up origin-top">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-secondary rounded-lg font-medium transition-colors">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-secondary rounded-lg font-medium transition-colors">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-secondary rounded-lg font-medium transition-colors">FAQ</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-secondary rounded-lg font-medium transition-colors">Changelog</a>
            <div className="h-px bg-border my-2" />
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-full border-border bg-card/50 hover:bg-card hover:text-foreground">
                Sign in
              </Button>
              <Button className="w-full rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                Get Orbit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
