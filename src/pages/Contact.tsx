import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Contactează <span className="gradient-text">olimpiX</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ai o întrebare sau ai nevoie de ajutor? Suntem aici să te ajutăm!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Suntem aici să te ajutăm</h3>
                    <p className="text-sm text-muted-foreground">Răspundem în max. 24h</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">contact@olimpix.ro</p>
                    <p className="text-sm text-muted-foreground">support@olimpix.ro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-sm text-muted-foreground">+40 123 456 789</p>
                    <p className="text-xs text-muted-foreground">L-V: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Locație</h4>
                    <p className="text-sm text-muted-foreground">Târgu Neamț , România</p>
                    <p className="text-xs text-muted-foreground">Platformă online 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Program</h4>
                    <p className="text-sm text-muted-foreground">Luni - Vineri: 9:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">Sâmbătă - Duminică: Închis</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">Comunitatea</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Alătură-te comunității noastre pentru a discuta cu alți elevi și profesori.
                </p>
                <a
                  href="https://github.com/iam269/olimpix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Vezi pe GitHub →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Mesaj Trimis!</h3>
                    <p className="text-muted-foreground mb-6">
                      Îți mulțumim pentru mesaj. Vom răspunde cât mai curând posibil.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:underline"
                    >
                      Trimite alt mesaj
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Trimite un mesaj</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Nume complet
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Numele tău"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="email@exemplu.ro"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subiect
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Selectează un subiect</option>
                          <option value="general">Întrebare generală</option>
                          <option value="support">Suport tehnic</option>
                          <option value="feedback">Feedback / Sugestii</option>
                          <option value="partnership">Parteneriat</option>
                          <option value="other">Altceva</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Mesaj
                        </label>
                        <textarea
                          id="message"
                          placeholder="Scrie mesajul tău aici..."
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        <Send className="w-5 h-5" />
                        Trimite mesajul
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
