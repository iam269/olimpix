import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Trophy, Target } from "lucide-react";

const StatItem = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pregătire pentru olimpiade 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Vrei la olimpiadă?
            <br />
            <span className="gradient-text">Noi îți arătăm drumul.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Platformă completă de pregătire pentru olimpiadele de informatică, fizică și chimie. 
            Lecții structurate, probleme reale și progres vizibil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/signup" className="btn-hero flex items-center gap-2 group">
              Începe acum
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/materii" 
              className="px-8 py-4 rounded-xl font-semibold text-foreground border border-border hover:bg-secondary/50 transition-all"
            >
              Explorează materiile
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <StatItem value={500} label="Probleme" suffix="+" />
            <StatItem value={50} label="Lecții" suffix="+" />
            <StatItem value={5} label="Nivele" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 md:right-20 animate-float opacity-20">
        <Trophy className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 left-10 md:left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Target className="w-12 h-12 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
