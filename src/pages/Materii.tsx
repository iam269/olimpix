import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Code, Atom, FlaskConical, ArrowRight, BookOpen, Trophy, Target } from "lucide-react";

const subjects = [
  {
    id: "informatica",
    name: "Informatică",
    description: "Algoritmi, structuri de date, programare dinamică și tehnici avansate pentru olimpiade",
    icon: Code,
    cardClass: "subject-card-info",
    iconClass: "icon-info",
    color: "hsl(217 91% 60%)",
    levels: [
      { name: "Începător", lessons: 5, progress: 0 },
      { name: "Intermediar", lessons: 5, progress: 0 },
      { name: "Avansat", lessons: 4, progress: 0 },
      { name: "Olimpiadă Județeană", lessons: 3, progress: 0 },
      { name: "Olimpiadă Națională", lessons: 3, progress: 0 },
    ],
    totalProblems: 200,
  },
  {
    id: "fizica",
    name: "Fizică",
    description: "Mecanică, termodinamică, electricitate, magnetism și fizică modernă",
    icon: Atom,
    cardClass: "subject-card-fizica",
    iconClass: "icon-fizica",
    color: "hsl(280 80% 60%)",
    levels: [
      { name: "Începător", lessons: 5, progress: 0 },
      { name: "Intermediar", lessons: 5, progress: 0 },
      { name: "Avansat", lessons: 4, progress: 0 },
      { name: "Olimpiadă Județeană", lessons: 3, progress: 0 },
      { name: "Olimpiadă Națională", lessons: 2, progress: 0 },
    ],
    totalProblems: 150,
  },
  {
    id: "chimie",
    name: "Chimie",
    description: "Chimie generală, organică, anorganică și biochimie pentru competiții",
    icon: FlaskConical,
    cardClass: "subject-card-chimie",
    iconClass: "icon-chimie",
    color: "hsl(142 76% 45%)",
    levels: [
      { name: "Începător", lessons: 5, progress: 0 },
      { name: "Intermediar", lessons: 4, progress: 0 },
      { name: "Avansat", lessons: 3, progress: 0 },
      { name: "Olimpiadă Județeană", lessons: 2, progress: 0 },
      { name: "Olimpiadă Națională", lessons: 2, progress: 0 },
    ],
    totalProblems: 120,
  },
];

const Materii = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Alege <span className="gradient-text">materia</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Trei discipline olimpice, fiecare cu 5 nivele de dificultate progresive. 
              De la concepte de bază până la probleme de olimpiadă națională.
            </p>
          </div>

          {/* Subjects */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                className={`${subject.cardClass} rounded-2xl p-8 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left - Subject Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center ${subject.iconClass}`}>
                        <subject.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
                        <p className="text-muted-foreground">{subject.description}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="font-semibold text-foreground">{subject.levels.reduce((a, l) => a + l.lessons, 0)}</span>
                          <span className="text-muted-foreground"> lecții</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="font-semibold text-foreground">{subject.totalProblems}</span>
                          <span className="text-muted-foreground"> probleme</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="font-semibold text-foreground">5</span>
                          <span className="text-muted-foreground"> nivele</span>
                        </span>
                      </div>
                    </div>

                    {/* Levels Preview */}
                    <div className="flex flex-wrap gap-2">
                      {subject.levels.map((level, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-background/50 text-muted-foreground"
                        >
                          {level.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - CTA */}
                  <div className="flex flex-col justify-center">
                    <Link
                      to={`/materii/${subject.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all"
                      style={{ 
                        background: `linear-gradient(135deg, ${subject.color}, ${subject.color}cc)`,
                        color: 'hsl(var(--background))'
                      }}
                    >
                      Începe
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Materii;
