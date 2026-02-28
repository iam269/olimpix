import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { BookOpen, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/auth";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"elev" | "profesor">("elev");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: authError } = await signup(email, password, name, role);
      
      if (authError) {
        setError(authError.message);
      } else if (data?.user) {
        // Check if email confirmation is required
        if (data.confirmation_sent_at) {
          // Email confirmation required - show success message
          setSuccessMessage("Contul a fost creat! Te rugăm să verifici email-ul pentru a confirma contul tău.");
          setError(null);
        } else {
          // No confirmation needed - redirect to dashboard or previous page
          const redirectPath = location.state?.from?.pathname || "/profil";
          navigate(redirectPath);
        }
      }
    } catch (err) {
      setError("A apărut o eroare. Te rugăm să încerci din nou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-card relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="text-center relative z-10 p-12">
          <div className="text-6xl font-bold mb-6">
            olimpi<span className="gradient-text">X</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-md">
            Alătură-te comunității de viitori olimpici
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">
              olimpi<span className="gradient-text">X</span>
            </span>
          </Link>

          {/* Header */}
          <h1 className="text-3xl font-bold mb-2">Creează-ți contul</h1>
          <p className="text-muted-foreground mb-8">
            Începe pregătirea pentru olimpiadă gratuit
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nume complet</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Ion Popescu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 h-12 bg-secondary/50 border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="nume@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-secondary/50 border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parolă</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Minim 8 caractere"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-secondary/50 border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Sunt</Label>
              <RadioGroup 
                value={role} 
                onValueChange={(value) => setRole(value as "elev" | "profesor")}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="elev" id="elev" />
                  <Label htmlFor="elev" className="cursor-pointer">Elev</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="profesor" id="profesor" />
                  <Label htmlFor="profesor" className="cursor-pointer">Profesor</Label>
                </div>
              </RadioGroup>
            </div>

            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md">
                {successMessage}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Se încarcă...
                </>
              ) : (
                <>
                  Creează cont
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          {/* Terms - TODO: Add actual terms and privacy policy pages */}
          <p className="mt-6 text-xs text-muted-foreground text-center">
            Prin crearea contului, ești de acord cu{" "}
            <span className="text-primary cursor-not-allowed">Termenii și condițiile</span>
            {" "}și{" "}
            <span className="text-primary cursor-not-allowed">Politica de confidențialitate</span>
          </p>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">sau</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google Signup - TODO: Requires OAuth provider configuration in Supabase */}
          {/* <Button variant="outline" className="w-full h-12 border-border bg-transparent hover:bg-secondary/50">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuă cu Google
          </Button> */}

          {/* Login Link */}
          <p className="mt-8 text-center text-muted-foreground">
            Ai deja cont?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Autentifică-te
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
