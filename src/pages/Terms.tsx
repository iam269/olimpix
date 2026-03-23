import Layout from "@/components/layout/Layout";
import { FileText, Shield, Users, CreditCard, AlertCircle } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Termeni și <span className="gradient-text">Condiții</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Citește cu atenție termenii și condițiile de utilizare a platformei olimpiX.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">1. Introducere</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bine ai venit pe platforma olimpiX. Prin accesarea și utilizarea acestei platforme, 
                  accepti să fii legat de termenii și condițiile prezentate mai jos. Dacă nu ești 
                  de acord cu acești termeni, te rugăm să nu utilizezi platforma noastră.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  olimpiX este o platformă educațională dedicată elevilor pasionați de olimpiadele școlare 
                  la informatică, fizică și chimie. Ne rezervăm dreptul de a modifica acești termeni 
                  oricând, iar utilizarea continuă a platformei constituie acceptarea modificărilor.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">2. Contul Utilizatorului</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pentru a accesa anumite funcționalități ale platformei, trebuie să îți creezi un cont. 
                  Sunteti responsabil pentru:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Menținerea confidențialității credențialelor de acces</li>
                  <li>Toate activitățile care au loc sub contul dumneavoastră</li>
                  <li>Notificarea imediată a oricărei utilizări neautorizate a contului</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Ne rezervăm dreptul de a suspenda sau șterge conturi care încalcă acești termeni.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">3. Conținut și Proprietate Intelectuală</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tot conținutul de pe platforma olimpiX, inclusiv dar nelimitat la:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Lecții și materiale educaționale</li>
                  <li>Quiz-uri și teste</li>
                  <li>Design și grafică</li>
                  <li>Software și tehnologie</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  sunt proprietatea olimpiX sau a partenerilor noștri. Este strict interzisă 
                  reproducerea, distribuirea sau utilizarea comercială a acestui conținut fără 
                  acordul nostru scris.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <CreditCard className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">4. Servicii și Plăți</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anumite servicii de pe platforma olimpiX pot fi accesibile contra cost. 
                  Plățile sunt procesate în siguranță prin furnizori de plăți terți.
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Prețurile pot fi modificate oricând cu notificare prealabilă</li>
                  <li>Politica de rambursare este specificată la momentul achiziției</li>
                  <li>Facturarea se face electronic, la adresa de email furnizată</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">5. Limitarea Răspunderii</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  olimpiX este furnizat "ca atare", fără garanții de niciun fel. Nu garantăm că:
                </p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                  <li>Platforma va fi disponibilă non-stop</li>
                  <li>Conținutul va fi mereu exact și actualizat</li>
                  <li>Nu vor exista erori sau întreruperi</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nu suntem responsabili pentru eventuale daune directe, indirecte, accidentale 
                  sau consecințiale rezultate din utilizarea platformei.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4">6. Dispoziții Finale</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Acești termeni reprezintă întreaga înțelegere între tine și olimpiX privind 
                  utilizarea platformei. Dacă orice prevedere este considerată invalidă, celelalte 
                  prevederi rămân în vigoare.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pentru orice întrebări privind acești termeni, ne poți contacta la 
                  <span className="text-primary"> contact@olimpix.ro</span>.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
