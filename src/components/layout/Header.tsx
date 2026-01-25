import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/materii", label: "Materii" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <BookOpen className="w-8 h-8 text-primary transition-all group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-slow" />
            </div>
            <span className="text-xl font-bold">
              olimpi<span className="gradient-text">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Autentificare
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Începe gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Schimbă tema</span>
                  <ThemeToggle />
                </div>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Autentificare
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Începe gratuit
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
