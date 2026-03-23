import Layout from "@/components/layout/Layout";
import { Shield, Eye, Lock, Database, Bell, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Politica de <span className="gradient-text">Confidențialitate</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cum protejăm și utilizăm datele tale personale pe platforma olimpiX.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">1. Introducere</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La olimpiX, respectăm confidențialitatea utilizatorilor noștri. Această politică 
                  explică ce date colectăm, cum le utilizăm și cum le protejăm. Prin utilizarea 
                  platformei, accepti practicile descrise în această politică.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <UserCheck className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">2. Datele pe care le colectăm</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Colectăm următoarele tipuri de informații:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li><strong>Informații de înregistrare:</strong> nume, adresă de email, parolă</li>
                  <li><strong>Profil utilizator:</strong> preferințe, materii de interes</li>
                  <li><strong>Date de utilizare:</strong> lecții accesate, quiz-uri finalizate, progres</li>
                  <li><strong>Informații tehnice:</strong> adresă IP, tip browser, dispozitiv</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">3. Cum utilizăm datele</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizăm datele colectate pentru:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Furnizarea și îmbunătățirea serviciilor noastre</li>
                  <li>Personalizarea experienței de învățare</li>
                  <li>Comunicarea cu utilizatorii (notificări, newsletter)</li>
                  <li>Analiza tendințelor și statisticilor de utilizare</li>
                  <li>Prevenirea fraudelor și asigurarea securității</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">4. Protecția datelor</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementăm măsuri de securitate pentru a proteja datele tale:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Criptare SSL pentru toate transmisiile de date</li>
                  <li>Parole hash-uite și salted</li>
                  <li>Acces restricționat la bazele de date</li>
                  <li>Backup-uri regulate și monitorizare</li>
                  <li>Autentificare în doi factori (opțional)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Database className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">5. Partajarea datelor</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nu vindem datele tale personale. Putem partaja informații cu:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li><strong>Furnizori de servicii:</strong> pentru găzduire, plăți, email</li>
                  <li><strong>Parteneri educaționali:</strong> cu acordul tău</li>
                  <li><strong>Obligații legale:</strong> când cerut de lege</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Orice partajare de date se face doar în scopurile descrise și cu respectarea 
                  legislației în vigoare.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Bell className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">6. Drepturile tale</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conform GDPR, ai următoarele drepturi:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li><strong>Dreptul de acces:</strong> poți solicita o copie a datelor tale</li>
                  <li><strong>Dreptul de rectificare:</strong> poți corecta datele incorecte</li>
                  <li><strong>Dreptul de ștergere:</strong> poți solicita ștergerea contului</li>
                  <li><strong>Dreptul de portabilitate:</strong> poți primi datele în format structurat</li>
                  <li><strong>Dreptul de opoziție:</strong> poți obiecta la procesarea datelor</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pentru a exercita aceste drepturi, contactează-ne la 
                  <span className="text-primary"> contact@olimpix.ro</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">7. Modificări ale politicii</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Putem actualiza această politică periodic. Orice modificare va fi publicată 
                  pe această pagină, iar pentru modificări semnificative te vom notifica prin email.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ai întrebări?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Dacă ai întrebări despre această politică de confidențialitate sau despre cum 
              gestionăm datele tale, nu ezita să ne contactezi.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
