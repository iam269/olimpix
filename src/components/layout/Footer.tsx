import { Link } from "react-router-dom";
import { BookOpen, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">
                olimpi<span className="gradient-text">X</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Platforma de învățare pentru elevii care visează la olimpiadele de informatică, fizică și chimie.
              Pregătește-te să cucerești competițiile!
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/olimpix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/iam269/olimpix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/olimpix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@olimpix.ro" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platformă</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/materii" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Materii
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Premium
                </Link>
              </li>
              <li>
                <Link to="/profil" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Profilul meu
                </Link>
              </li>
            </ul>
          </div>

          {/* Despre */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Despre</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/despre" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/creatori" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Echipa
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Parteneri
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suport</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ajutor" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Ajutor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/termeni" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link to="/confidentialitate" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Politica de confidențialitate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} olimpiX. Toate drepturile rezervate. 
            Construit cu ❤️ pentru olimpicii din România.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
