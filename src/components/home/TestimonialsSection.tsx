import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexandru M.",
    role: "Medalie de argint, ONI 2023",
    content: "olimpiX m-a ajutat să structurez pregătirea pentru olimpiadă. Problemele sunt exact la nivelul competițiilor reale.",
    avatar: "A",
  },
  {
    name: "Maria P.",
    role: "Calificare la ONF, 2025",
    content: "Îmi place că pot vedea progresul meu. Lectiile sunt clare și exercițiile sunt gradate perfect.",
    avatar: "M",
  },
  {
    name: "Andrei C.",
    role: "Locul 1 la faza județeană",
    content: "De când folosesc olimpiX, am trecut de la începător la avansat în doar 3 luni. Super recomand!",
    avatar: "A",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce spun <span className="gradient-text">olimpicii</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elevii care au folosit olimpiX și au obținut rezultate la olimpiade
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-2xl bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
