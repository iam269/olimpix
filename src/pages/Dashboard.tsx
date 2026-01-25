import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Code, Atom, FlaskConical, Trophy, Target, Flame, ArrowRight, BookOpen, Clock } from "lucide-react";

const userStats = {
  name: "Elev Olimpic",
  streak: 5,
  totalTime: "12h 30m",
  completedLessons: 8,
  totalLessons: 53,
};

const subjects = [
  {
    id: "informatica",
    name: "Informatică",
    icon: Code,
    color: "hsl(217 91% 60%)",
    progress: 15,
    currentLevel: "Începător",
    lessonsCompleted: 3,
    totalLessons: 20,
  },
  {
    id: "fizica",
    name: "Fizică",
    icon: Atom,
    color: "hsl(280 80% 60%)",
    progress: 8,
    currentLevel: "Începător",
    lessonsCompleted: 2,
    totalLessons: 18,
  },
  {
    id: "chimie",
    name: "Chimie",
    icon: FlaskConical,
    color: "hsl(142 76% 45%)",
    progress: 20,
    currentLevel: "Începător",
    lessonsCompleted: 3,
    totalLessons: 15,
  },
];

const recentActivity = [
  { subject: "Informatică", lesson: "Introducere în algoritmi", time: "Azi, 14:30" },
  { subject: "Fizică", lesson: "Cinematica punctului", time: "Ieri, 18:00" },
  { subject: "Chimie", lesson: "Structura atomului", time: "Acum 2 zile" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Bună, <span className="gradient-text">{userStats.name}</span>! 👋
            </h1>
            <p className="text-muted-foreground">Continuă să înveți și să te apropii de olimpiadă.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="card-glow p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold mb-1">{userStats.streak}</div>
              <div className="text-sm text-muted-foreground">zile la rând</div>
            </div>
            
            <div className="card-glow p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{userStats.totalTime}</div>
              <div className="text-sm text-muted-foreground">timp total</div>
            </div>
            
            <div className="card-glow p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-chimie/20 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-chimie" />
              </div>
              <div className="text-2xl font-bold mb-1">{userStats.completedLessons}</div>
              <div className="text-sm text-muted-foreground">lecții complete</div>
            </div>
            
            <div className="card-glow p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-fizica/20 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-fizica" />
              </div>
              <div className="text-2xl font-bold mb-1">{Math.round((userStats.completedLessons / userStats.totalLessons) * 100)}%</div>
              <div className="text-sm text-muted-foreground">progres total</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Progress by Subject */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-6">Progres pe materii</h2>
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <Link
                    key={subject.id}
                    to={`/materii/${subject.id}`}
                    className="block card-glow p-6 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${subject.color}20`, color: subject.color }}
                        >
                          <subject.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{subject.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {subject.currentLevel} · {subject.lessonsCompleted}/{subject.totalLessons} lecții
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold" style={{ color: subject.color }}>
                          {subject.progress}%
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    
                    <div className="progress-bar">
                      <div 
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{ 
                          width: `${subject.progress}%`,
                          background: `linear-gradient(135deg, ${subject.color}, ${subject.color}cc)`
                        }} 
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Activitate recentă</h2>
              <div className="card-glow p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{activity.lesson}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.subject} · {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/materii"
                  className="flex items-center justify-center gap-2 mt-6 py-3 rounded-xl bg-secondary/50 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  Continuă să înveți
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 p-8 rounded-2xl gradient-border bg-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Obiectivul zilei</h3>
                  <p className="text-muted-foreground">Completează 2 lecții pentru a-ți menține seria de învățare!</p>
                </div>
              </div>
              <Link to="/materii" className="btn-hero flex items-center gap-2">
                Începe acum
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
