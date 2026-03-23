import Layout from "@/components/layout/Layout";
import { Github, GraduationCap, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Despre <span className="gradient-text">olimpiX</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platforma educațională dedicată elevilor pasionați de olimpiadele școlare 
            la informatică, fizică și chimie.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Misiunea Noastră</h2>
                <p className="text-muted-foreground leading-relaxed">
                  olimpiX a fost creat cu scopul de a oferi elevilor acces la resurse 
                  educaționale de calitate pentru pregătirea olimpiadelor școlare. Credem 
                  că fiecare elev merită șansa de a-și dezvolta potențialul maxim în 
                  domeniile științifice, indiferent de background-ul lor.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Ce Oferim</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• Lecții structurate pe niveluri de dificultate</li>
                  <li>• Quiz-uri interactive pentru autoevaluare</li>
                  <li>• Urmărirea progresului individual</li>
                  <li>• Resurse pentru informatică, fizică și chimie</li>
                  <li>• Materiale pregătite pentru olimpiade</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Comunitatea</h2>
                <p className="text-muted-foreground leading-relaxed">
                  olimpiX este mai mult decât o platformă educațională - este o comunitate 
                  de elevi și profesori pasionați de știință. Învățarea devine mai eficientă 
                  când este susținută de o comunitate motivată. Contribuie și tu la 
                  dezvoltarea acestei platforme open source!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Contribuie la Proiect</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              olimpiX este un proiect open source. Dacă ești pasionat de programare
              și vrei să ajuți la dezvoltarea platformei, te așteptăm în echipa noastră!
            </p>
            <a
              href="https://github.com/iam269/olimpix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              Vezi pe GitHub
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
