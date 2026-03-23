import Layout from "@/components/layout/Layout";
import { HelpCircle, BookOpen, MessageCircle, Mail, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Ajutor = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Ajutor <span className="gradient-text">olimpiX</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Găsești aici răspunsuri la întrebările frecvente și ghiduri pentru utilizarea platformei.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* FAQ Section */}
          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Întrebări Frecvente</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Cum încep să folosesc platforma?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pentru a accesa toate funcționalitățile platformei, trebuie să îți creezi un cont. 
                      Click pe butonul "Cont nou" din pagina principală și urmează pașii de înregistrare.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ce materii pot studia pe olimpiX?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Platforma oferă resurse pentru pregătirea olimpiadelor școlare la Informatică, 
                      Fizică și Chimie. Fiecare materie are lecții structurate pe niveluri de dificultate.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cum pot urmări progresul meu?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      După ce te loghezi, accesează secțiunea "Dashboard" pentru a vedea statisticile 
                      tale, lecțiile finalizate și quiz-urile rezolvate.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sunt lecțiile gratuite?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Da, toate lecțiile de bază sunt gratuite. Pentru conținut avansat și teste 
                      suplimentare, poți accesa secțiunea premium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Ghiduri Rapide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link 
                    to="/materii" 
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">Explorare Materii</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">Dashboard-ul Meu</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                  <Link 
                    to="/profil" 
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">Editează Profil</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">Contactează-ne</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Încă Ai Nevoie de Ajutor?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dacă nu ai găsit răspunsul la întrebarea ta, ne poți contacta prin mai multe metode:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">contact@olimpix.ro</p>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Trimite un mesaj
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Link */}
          <section className="bg-muted/50 rounded-xl p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Documentație Tehnică</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Pentru dezvoltatori care doresc să contribuie la proiect, documentația completă 
              este disponibilă pe GitHub.
            </p>
            <a
              href="https://github.com/iam269/olimpix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Vezi Documentația
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Ajutor;
