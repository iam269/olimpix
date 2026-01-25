import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-float">
            <Rocket className="w-10 h-10 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Gata să începi <span className="gradient-text">aventura</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Creează-ți contul gratuit și începe să te pregătești pentru olimpiadă astăzi. 
            Primul pas către medalie e la un click distanță.
          </p>

          {/* CTA */}
          <Link to="/signup" className="btn-hero inline-flex items-center gap-2 group">
            Creează cont gratuit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="mt-6 text-sm text-muted-foreground">
            Fără card. Fără obligații. Doar învățare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
