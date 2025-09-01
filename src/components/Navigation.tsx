import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <Card className={`machine-card transition-all duration-300 ${
          scrolled ? 'bg-machine-dark/90' : 'bg-machine-dark/50'
        }`}>
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 neon-border bg-gradient-to-r from-primary to-accent rounded-lg">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shri Abhinav
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 neon-border bg-machine-dark/50 rounded-lg"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border/50 px-6 py-4 space-y-4 animate-slide-up">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </Card>
      </div>
    </nav>
  );
};