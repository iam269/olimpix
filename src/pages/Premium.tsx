import Layout from "@/components/layout/Layout";
import { Crown, Check, Star, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "Gratuit",
    period: "",
    description: "Perfect pentru început",
    features: [
      "Acces la lecții de bază",
      "Quiz-uri introductive",
      "Urmărirea progresului",
      "Comunitate online",
    ],
    notIncluded: [
      "Lecții avansate",
      "Teste premium",
      "Suport prioritar",
    ],
    cta: "Începe gratuit",
    popular: false,
  },
  {
    name: "Standard",
    price: "29 RON",
    period: "/lună",
    description: "Pentru elevii motivați",
    features: [
      "Toate funcționalitățile Basic",
      "Lecții intermediare",
      "Teste suplimentare",
      "Suport prin email",
      "Materiale PDF",
    ],
    notIncluded: [
      "Lecții avansate",
      "Simulări olimpiadă",
      "Mentoring individual",
    ],
    cta: "Alege Standard",
    popular: false,
  },
  {
    name: "Premium",
    price: "99 RON",
    period: "/lună",
    description: "Pentru seriile olimpice",
    features: [
      "Toate funcționalitățile Standard",
      "Lecții avansate exclusive",
      "Teste și simulări olimpiadă",
      "Suport prioritar",
      "Materiale downloadabile",
      "Acces anticipat",
    ],
    notIncluded: [],
    cta: "Devino Premium",
    popular: true,
  },
];

const Premium = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">olimpiX Premium</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Duce-ți pregătirea la <span className="gradient-text">următorul nivel</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accesează conținut exclusiv, teste avansate și suport prioritar pentru a te pregăti 
            eficient pentru olimpiadele școlare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lecții Avansate</h3>
              <p className="text-muted-foreground">
                Accesează conținut premium structurat pentru pregătirea olimpiadelor, 
                incluzând tehnici avansate și strategii de rezolvare.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Teste Premium</h3>
              <p className="text-muted-foreground">
                Simulări de olimpiadă cu nivel de dificultate real, bareme de corectare 
                și statisticile detaliate pentru autoevaluare.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suport Prioritar</h3>
              <p className="text-muted-foreground">
                Primești răspunsuri rapide de la echipa noastră de profesori și 
                acces la sesiuni de mentoring individual.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-xl p-8 ${
                  plan.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Cel mai popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 opacity-50">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Întrebări despre Premium
          </h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Pot anula oricând abonamentul?</h3>
              <p className="text-muted-foreground">
                Da, poți anula abonamentul oricând din setările contului. Vei avea acces 
                până la sfârșitul perioadei plătite.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Există reducere pentru elevi?</h3>
              <p className="text-muted-foreground">
                Da, oferim reduceri pentru elevi care participă la olimpiade. Contactează-ne 
                pentru a afla mai multe detalii.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Ce metode de plată acceptați?</h3>
              <p className="text-muted-foreground">
                Acceptăm card bancar, transfer bancar și alte metode de plată locale. 
                Toate plățile sunt securizate.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ai întrebări? Suntem aici să te ajutăm.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Contactează-ne
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Premium;
