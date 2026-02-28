import Layout from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { User, Mail, BookOpen, Trophy, Target, Edit2, Code, Atom, FlaskConical, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Get user data from Supabase auth metadata
  const userName = user?.user_metadata?.nume || "Utilizator";
  const userEmail = user?.email || "";
  const userRole = user?.user_metadata?.rol || "elev";
  const avatarLetter = userName.charAt(0).toUpperCase();

  // Format role for display
  const roleDisplay = userRole === "profesor" ? "Profesor" : "Elev";

  // Mock data for progress/badges (still using some mock data for now)
  const userProfile = {
    name: userName,
    email: userEmail,
    role: roleDisplay,
    avatar: avatarLetter,
    joinedDate: user?.created_at 
      ? new Date(user.created_at).toLocaleDateString("ro-RO", { month: "long", year: "numeric" })
      : "Ianuarie 2025",
    level: "Intermediar",
    totalProgress: 14,
    favoriteSubjects: ["Informatică", "Fizică"],
    badges: [
      { name: "Prima lecție", icon: BookOpen },
      { name: "3 zile la rând", icon: Target },
      { name: "Quiz perfect", icon: Trophy },
    ],
  };

  const subjectIcons: Record<string, typeof Code> = {
    "Informatică": Code,
    "Fizică": Atom,
    "Chimie": FlaskConical,
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Profile Header */}
            <div className="card-glow p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-background">
                    {userProfile.avatar}
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-1">{userProfile.name}</h1>
                  <p className="text-muted-foreground mb-4">{userProfile.email}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>Rol: <span className="text-foreground font-medium">{userProfile.role}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>Nivel: <span className="text-foreground font-medium">{userProfile.level}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span>Progres: <span className="text-foreground font-medium">{userProfile.totalProgress}%</span></span>
                    </div>
                  </div>
                </div>

                {/* Edit Button */}
                <Button 
                  variant="outline" 
                  className="border-border"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Editează profil
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Favorite Subjects */}
              <div className="card-glow p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Materii favorite
                </h2>
                <div className="space-y-3">
                  {userProfile.favoriteSubjects.map((subject) => {
                    const Icon = subjectIcons[subject] || BookOpen;
                    return (
                      <div key={subject} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{subject}</span>
                      </div>
                    );
                  })}
                  {userProfile.favoriteSubjects.length < 3 && (
                    <button className="w-full p-3 rounded-xl border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors text-sm">
                      + Adaugă materie favorită
                    </button>
                  )}
                </div>
              </div>

              {/* Badges */}
              <div className="card-glow p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Insigne obținute
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {userProfile.badges.map((badge, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/30">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <badge.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-center font-medium">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="card-glow p-6">
              <h2 className="text-lg font-semibold mb-6">Progres general</h2>
              
              <div className="space-y-6">
                {/* Overall Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progres total</span>
                    <span className="font-semibold">{userProfile.totalProgress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${userProfile.totalProgress}%` }} />
                  </div>
                </div>

                {/* Level Progress */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <div className="text-xs text-muted-foreground">Lecții complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">3</div>
                    <div className="text-xs text-muted-foreground">Quiz-uri trecute</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fizica mb-1">5</div>
                    <div className="text-xs text-muted-foreground">Zile active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-chimie mb-1">12h</div>
                    <div className="text-xs text-muted-foreground">Timp de studiu</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="mt-8 p-6 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-semibold mb-4">Informații cont</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Nume</span>
                  <span>{userProfile.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rol</span>
                  <span>{userProfile.role}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Membru din</span>
                  <span>{userProfile.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
