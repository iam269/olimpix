import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Code, Atom, FlaskConical, ArrowRight, BookOpen, CheckCircle2, Lock, Play } from "lucide-react";
import { useState } from "react";

const subjectsData = {
  informatica: {
    name: "Informatică",
    icon: Code,
    color: "hsl(217 91% 60%)",
    levels: [
      {
        id: "incepator",
        name: "Începător",
        description: "Bazele algoritmicii și programării",
        lessons: [
          { id: 1, title: "Introducere în algoritmi", duration: "15 min", completed: false },
          { id: 2, title: "Structuri de control", duration: "20 min", completed: false },
          { id: 3, title: "Tablouri și vectori", duration: "25 min", completed: false },
          { id: 4, title: "Șiruri de caractere", duration: "20 min", completed: false },
          { id: 5, title: "Quiz nivel începător", duration: "10 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: true,
      },
      {
        id: "intermediar",
        name: "Intermediar",
        description: "Algoritmi de sortare și căutare",
        lessons: [
          { id: 1, title: "Sortări elementare", duration: "25 min", completed: false },
          { id: 2, title: "Căutare binară", duration: "20 min", completed: false },
          { id: 3, title: "Recursivitate", duration: "30 min", completed: false },
          { id: 4, title: "Divide et Impera", duration: "25 min", completed: false },
          { id: 5, title: "Quiz nivel intermediar", duration: "15 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "avansat",
        name: "Avansat",
        description: "Structuri de date avansate",
        lessons: [
          { id: 1, title: "Stive și cozi", duration: "25 min", completed: false },
          { id: 2, title: "Liste înlănțuite", duration: "30 min", completed: false },
          { id: 3, title: "Arbori binari", duration: "35 min", completed: false },
          { id: 4, title: "Quiz nivel avansat", duration: "20 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "judeteana",
        name: "Olimpiadă Județeană",
        description: "Pregătire pentru faza județeană",
        lessons: [
          { id: 1, title: "Programare dinamică", duration: "40 min", completed: false },
          { id: 2, title: "Grafuri - concepte de bază", duration: "35 min", completed: false },
          { id: 3, title: "Probleme model ONI", duration: "45 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "nationala",
        name: "Olimpiadă Națională",
        description: "Tehnici avansate pentru națională",
        lessons: [
          { id: 1, title: "Algoritmi pe grafuri", duration: "50 min", completed: false },
          { id: 2, title: "Tehnici avansate", duration: "45 min", completed: false },
          { id: 3, title: "Simulare națională", duration: "60 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
    ],
  },
  fizica: {
    name: "Fizică",
    icon: Atom,
    color: "hsl(280 80% 60%)",
    levels: [
      {
        id: "incepator",
        name: "Începător",
        description: "Mecanică clasică fundamentală",
        lessons: [
          { id: 1, title: "Cinematica punctului material", duration: "20 min", completed: false },
          { id: 2, title: "Legile lui Newton", duration: "25 min", completed: false },
          { id: 3, title: "Lucru mecanic și energie", duration: "30 min", completed: false },
          { id: 4, title: "Quiz mecanică de bază", duration: "15 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: true,
      },
      {
        id: "intermediar",
        name: "Intermediar",
        description: "Termodinamică și unde",
        lessons: [
          { id: 1, title: "Termodinamică", duration: "30 min", completed: false },
          { id: 2, title: "Unde mecanice", duration: "25 min", completed: false },
          { id: 3, title: "Optică geometrică", duration: "30 min", completed: false },
          { id: 4, title: "Electricitate", duration: "35 min", completed: false },
          { id: 5, title: "Quiz intermediar", duration: "20 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "avansat",
        name: "Avansat",
        description: "Electromagnetism și fizică modernă",
        lessons: [
          { id: 1, title: "Câmp electromagnetic", duration: "35 min", completed: false },
          { id: 2, title: "Inducție electromagnetică", duration: "30 min", completed: false },
          { id: 3, title: "Fizică atomică", duration: "40 min", completed: false },
          { id: 4, title: "Quiz avansat", duration: "25 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "judeteana",
        name: "Olimpiadă Județeană",
        description: "Pregătire pentru faza județeană",
        lessons: [
          { id: 1, title: "Probleme de mecanică avansată", duration: "45 min", completed: false },
          { id: 2, title: "Probleme de electromagnetism", duration: "40 min", completed: false },
          { id: 3, title: "Simulare OJF", duration: "50 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "nationala",
        name: "Olimpiadă Națională",
        description: "Probleme de nivel național",
        lessons: [
          { id: 1, title: "Probleme complexe integrate", duration: "55 min", completed: false },
          { id: 2, title: "Simulare ONF", duration: "60 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
    ],
  },
  chimie: {
    name: "Chimie",
    icon: FlaskConical,
    color: "hsl(142 76% 45%)",
    levels: [
      {
        id: "incepator",
        name: "Începător",
        description: "Chimie generală fundamentală",
        lessons: [
          { id: 1, title: "Structura atomului", duration: "20 min", completed: false },
          { id: 2, title: "Tabelul periodic", duration: "25 min", completed: false },
          { id: 3, title: "Legături chimice", duration: "30 min", completed: false },
          { id: 4, title: "Quiz chimie de bază", duration: "15 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: true,
      },
      {
        id: "intermediar",
        name: "Intermediar",
        description: "Reacții și stoechiometrie",
        lessons: [
          { id: 1, title: "Tipuri de reacții chimice", duration: "25 min", completed: false },
          { id: 2, title: "Stoechiometrie", duration: "30 min", completed: false },
          { id: 3, title: "Soluții și concentrații", duration: "25 min", completed: false },
          { id: 4, title: "Quiz intermediar", duration: "20 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "avansat",
        name: "Avansat",
        description: "Chimie organică",
        lessons: [
          { id: 1, title: "Hidrocarburi", duration: "35 min", completed: false },
          { id: 2, title: "Compuși organici cu oxigen", duration: "40 min", completed: false },
          { id: 3, title: "Quiz chimie organică", duration: "25 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "judeteana",
        name: "Olimpiadă Județeană",
        description: "Pregătire pentru faza județeană",
        lessons: [
          { id: 1, title: "Probleme de chimie anorganică", duration: "45 min", completed: false },
          { id: 2, title: "Simulare OJC", duration: "50 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
      {
        id: "nationala",
        name: "Olimpiadă Națională",
        description: "Probleme de nivel național",
        lessons: [
          { id: 1, title: "Probleme integrate", duration: "55 min", completed: false },
          { id: 2, title: "Simulare ONC", duration: "60 min", completed: false, isQuiz: true },
        ],
        progress: 0,
        unlocked: false,
      },
    ],
  },
};

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [expandedLevel, setExpandedLevel] = useState<string | null>("incepator");

  const subject = subjectsData[subjectId as keyof typeof subjectsData];

  if (!subject) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Materia nu a fost găsită</h1>
          <Link to="/materii" className="text-primary hover:underline">
            Înapoi la materii
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = subject.icon;

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/materii" className="text-muted-foreground hover:text-foreground transition-colors">
              Materii
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{subject.name}</span>
          </div>

          <div className="flex items-start gap-6 mb-12">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: `${subject.color}20`, color: subject.color }}
            >
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{subject.name}</h1>
              <p className="text-muted-foreground">
                {subject.levels.length} nivele · {subject.levels.reduce((a, l) => a + l.lessons.length, 0)} lecții
              </p>
            </div>
          </div>

          {/* Levels */}
          <div className="space-y-4 max-w-3xl">
            {subject.levels.map((level, index) => (
              <div
                key={level.id}
                className={`rounded-2xl border transition-all ${
                  level.unlocked 
                    ? 'border-border bg-card hover:border-primary/50' 
                    : 'border-border/50 bg-card/50 opacity-75'
                }`}
              >
                {/* Level Header */}
                <button
                  onClick={() => level.unlocked && setExpandedLevel(expandedLevel === level.id ? null : level.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                  disabled={!level.unlocked}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                      style={{ 
                        background: level.unlocked ? `${subject.color}20` : 'hsl(var(--muted))',
                        color: level.unlocked ? subject.color : 'hsl(var(--muted-foreground))'
                      }}
                    >
                      {level.unlocked ? index + 1 : <Lock className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{level.name}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{level.lessons.length} lecții</div>
                      <div className="text-xs text-muted-foreground">{level.progress}% completat</div>
                    </div>
                    {level.unlocked && (
                      <ArrowRight 
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedLevel === level.id ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </div>
                </button>

                {/* Progress Bar */}
                {level.unlocked && (
                  <div className="px-6 pb-2">
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: `${level.progress}%` }} />
                    </div>
                  </div>
                )}

                {/* Lessons List */}
                {expandedLevel === level.id && level.unlocked && (
                  <div className="px-6 pb-6 pt-2 space-y-2 animate-fade-in">
                    {level.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/materii/${subjectId}/${level.id}/lectie/${lesson.id}`}
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-chimie/20 text-chimie' 
                            : lesson.isQuiz 
                              ? 'bg-primary/20 text-primary'
                              : 'bg-muted text-muted-foreground'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : lesson.isQuiz ? (
                            <Play className="w-4 h-4" />
                          ) : (
                            <BookOpen className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{lesson.title}</div>
                          <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubjectPage;
