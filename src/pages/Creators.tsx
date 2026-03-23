import Layout from "@/components/layout/Layout";
import { Github, Linkedin, User } from "lucide-react";

const creators = [
  {
    name: "Ioniță Aurel Mihai",
    role: "Mentor Informatică și Fondator",
    description: "Pasionat de algoritmi și dezvoltare web. Am creat platforma de la zero si cursul de infromatică pentru olimpiade.",
    github: "https://github.com/iam269",
    linkedin: "https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/",
    image: "/creator.jpg",
  },
  {
    name: "Maria Popescu",
    role: "Mentor Fizică și Chimie si Fondator",
    description: "Pasionat de fizică și chimie. Am creat cursurile și problemele pentru olimpiade.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    image: "public/creator2.jpg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                {creator.image ? (
                  <img 
                    src={creator.image} 
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-primary" />
                )}
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vrei să contribui?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Platforma noastră este open source! Dacă ești pasionat de programare 
            și vrei să ajuți la dezvoltarea olimpiX, te așteptăm în echipa noastră.
          </p>
          <a
            href="https://github.com/iam269/olimpix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            Contribuie pe GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Creators;
