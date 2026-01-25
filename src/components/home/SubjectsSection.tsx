import { Link } from "react-router-dom";
import { Code, Atom, FlaskConical, ArrowRight } from "lucide-react";

const subjects = [
  {
    id: "informatica",
    name: "Informatică",
    description: "Algoritmi, structuri de date și programare competitivă",
    icon: Code,
    cardClass: "subject-card-info",
    iconClass: "icon-info",
    levels: 5,
    lessons: 20,
  },
  {
    id: "fizica",
    name: "Fizică",
    description: "Mecanică, termodinamică, electricitate și optică",
    icon: Atom,
    cardClass: "subject-card-fizica",
    iconClass: "icon-fizica",
    levels: 5,
    lessons: 18,
  },
  {
    id: "chimie",
    name: "Chimie",
    description: "Chimie organică, anorganică și biochimie",
    icon: FlaskConical,
    cardClass: "subject-card-chimie",
    iconClass: "icon-chimie",
    levels: 5,
    lessons: 15,
  },
];

const SubjectsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alege materia ta <span className="gradient-text">preferată</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trei discipline, un singur obiectiv: să ajungi la olimpiadă. 
            Fiecare materie are 5 nivele progresive, de la începător la națională.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subjects.map((subject, index) => (
            <Link
              key={subject.id}
              to={`/materii/${subject.id}`}
              className={`${subject.cardClass} rounded-2xl p-8 transition-all duration-300 group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center mb-6 ${subject.iconClass}`}>
                <subject.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">{subject.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{subject.description}</p>

              {/* Stats */}
              <div className="flex gap-4 mb-6">
                <div className="text-sm">
                  <span className="font-semibold text-foreground">{subject.levels}</span>
                  <span className="text-muted-foreground"> nivele</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">{subject.lessons}</span>
                  <span className="text-muted-foreground"> lecții</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Explorează
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
