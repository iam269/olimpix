import { Zap, TrendingUp, Award, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Învățare structurată",
    description: "Lecții clare, de la bază la avansat. Fiecare concept e explicat pas cu pas, cu exemple și exerciții.",
  },
  {
    icon: TrendingUp,
    title: "Progres vizibil",
    description: "Monitorizează-ți evoluția cu bare de progres animate. Știi mereu unde te afli și ce urmează.",
  },
  {
    icon: Award,
    title: "Probleme reale",
    description: "Exersează pe probleme de la olimpiade reale. Pregătește-te exact pentru ce te așteaptă în concurs.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            De ce <span className="gradient-text">olimpiX</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Am creat platforma pe care ne-am fi dorit-o când eram elevi. 
            Simplă, eficientă și motivantă.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-glow p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Alătură-te celor <span className="font-semibold text-foreground">1,000+</span> elevi care se pregătesc cu olimpiX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
