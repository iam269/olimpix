import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Placeholder lesson content
const lessonContent = {
  title: "Introducere în algoritmi",
  content: `
## Ce este un algoritm?

Un **algoritm** este o secvență finită și bine definită de instrucțiuni care rezolvă o problemă sau efectuează o sarcină specifică.

### Caracteristicile unui algoritm:

1. **Finitudine** - Algoritmul trebuie să se termine după un număr finit de pași
2. **Precizie** - Fiecare pas trebuie să fie definit clar și fără ambiguitate
3. **Intrare** - Poate avea zero sau mai multe valori de intrare
4. **Ieșire** - Produce cel puțin o valoare de ieșire
5. **Eficiență** - Operațiile trebuie să fie suficient de simple

### Exemplu simplu

Să considerăm algoritmul pentru a găsi maximul dintre două numere:

\`\`\`
Algoritm MaxDoi(a, b):
    Dacă a > b atunci
        returnează a
    Altfel
        returnează b
\`\`\`

### De ce contează algoritmii?

În informatică, algoritmii sunt fundamentali pentru:
- Rezolvarea problemelor eficient
- Optimizarea resurselor (timp, memorie)
- Crearea de software performant
- Pregătirea pentru olimpiade și concursuri

În lecțiile următoare vom explora diferiți algoritmi și vom învăța să analizăm complexitatea lor.
  `,
};

const LessonPage = () => {
  const { subjectId, levelId, lessonId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    // TODO: Save progress to backend
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/materii" className="text-muted-foreground hover:text-foreground transition-colors">
              Materii
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/materii/${subjectId}`} className="text-muted-foreground hover:text-foreground transition-colors capitalize">
              {subjectId}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{lessonContent.title}</span>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground capitalize">
                  {levelId} · Lecția {lessonId}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{lessonContent.title}</h1>
              
              {/* Progress indicator */}
              <div className="flex items-center gap-4">
                <div className="progress-bar flex-1 max-w-xs">
                  <div className="progress-bar-fill" style={{ width: isCompleted ? '100%' : '0%' }} />
                </div>
                <span className="text-sm text-muted-foreground">
                  {isCompleted ? 'Completat' : 'În progres'}
                </span>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <div className="bg-card rounded-2xl p-8 border border-border">
                {lessonContent.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 gradient-text">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('```')) {
                    return null; // Handle code blocks separately
                  }
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {parts.map((part, i) => 
                          i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                        )}
                      </p>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return <li key={index} className="text-muted-foreground ml-4 mb-2">{paragraph.replace(/^\d+\.\s*/, '')}</li>;
                  }
                  if (paragraph.startsWith('- ')) {
                    return <li key={index} className="text-muted-foreground ml-4 mb-2">{paragraph.replace('- ', '')}</li>;
                  }
                  if (paragraph.trim()) {
                    return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
                  }
                  return null;
                })}

                {/* Code Example */}
                <div className="mt-6 rounded-xl bg-background/50 border border-border overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 border-b border-border">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Pseudocod</span>
                  </div>
                  <pre className="p-4 text-sm font-mono text-foreground overflow-x-auto">
{`Algoritm MaxDoi(a, b):
    Dacă a > b atunci
        returnează a
    Altfel
        returnează b`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border">
              <Link
                to={`/materii/${subjectId}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Înapoi la nivel
              </Link>

              <div className="flex items-center gap-4">
                {!isCompleted ? (
                  <Button
                    onClick={handleComplete}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Marchează ca terminat
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-chimie">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Completat!</span>
                  </div>
                )}

                <Button variant="outline" className="border-border">
                  Lecția următoare
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LessonPage;
