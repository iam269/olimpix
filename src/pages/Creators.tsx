import Layout from "@/components/layout/Layout";
import { Github, Linkedin, Mail, User } from "lucide-react";

const creators = [
  {
    name: "Alexandru Popescu",
    role: "Full Stack Developer",
    description: "Pasionat de algoritmi și dezvoltare web. A creat platforma de la zero.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex@olimpix.ro"
  },
  {
    name: "Maria Ionescu",
    role: "UI/UX Designer",
    description: "Design modern și intuitiv pentru o experiență de învățare excelentă.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "maria@olimpix.ro"
  },
  {
    name: "Andrei Dumitrescu",
    role: "Backend Developer",
    description: "Specialist în baze de date și arhitectura sistemelor scalabile.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "andrei@olimpix.ro"
  },
  {
    name: "Elena Marinescu",
    role: "Content Creator",
    description: "Profesoară de informatică cu experiență în pregătirea olimpiadelor.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "elena@olimpix.ro"
  }
];

const Creators = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Creatorii <span className="gradient-text">olimpiX</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Echipa pasionată care a construit această platformă pentru a ajuta elevii 
            să își atingă potențialul maxim în olimpiadele de informatică, fizică și chimie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
              <p className="text-primary font-medium mb-3">{creator.role}</p>
              <p className="text-muted-foreground text-sm mb-4">
                {creator.description}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${creator.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vrei să contribui?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Platforma noastră este open source! Dacă ești pasionat de programming 
            și vrei să ajuți la dezvoltarea olimpiX, te așteptăm în echipa noastră.
          </p>
          <a
            href="https://github.com/olimpix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            Contribute on GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Creators;
