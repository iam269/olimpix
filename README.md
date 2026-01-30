# OlimpiX - Platformă de Pregătire pentru Olimpiade

OlimpiX este o platformă web completă de pregătire pentru olimpiadele de informatică, fizică și chimie. Platforma oferă lecții structurate, probleme reale și progres vizibil pentru elevii care doresc să exceleze la competițiile școlare.

## 🚀 Tehnologii Utilizate

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Stilizare**: Tailwind CSS + shadcn/ui
- **Autentificare**: Supabase
- **State Management**: TanStack React Query
- **Routing**: React Router DOM
- **Formulare**: React Hook Form + Zod
- **Testare**: Vitest

## 📁 Structura Proiectului

```
OlimpiX/
├── public/                 # Fișiere statice
├── src/
│   ├── components/         # Componente React
│   │   ├── home/          # Componente pentru pagina principală
│   │   ├── layout/        # Componente de layout (Header, Footer)
│   │   └── ui/            # Componente UI (shadcn/ui)
│   ├── hooks/             # Hook-uri personalizate
│   ├── lib/               # Funcții utilitare și configurări
│   ├── pages/             # Pagini ale aplicației
│   ├── App.tsx            # Componenta principală
│   ├── main.tsx           # Punct de intrare
│   └── index.css          # Stiluri globale
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Instalare și Rulare

### Prerequisites
- Node.js 18+
- npm sau yarn

### Instalare
```bash
npm install
```

### Rulare în Development
```bash
npm run dev
```

### Build pentru Producție
```bash
npm run build
```

### Rulare Teste
```bash
npm test           # Rulează testele o singură dată
npm run test:watch # Rulează testele în mod watch
```

## 📚 Pagini și Funcționalități

| Pagina | Ruta | Descriere |
|--------|------|-----------|
| Acasă | `/` | Pagina principală cu statistici și CTA |
| Autentificare | `/login` | Pagina de login |
| Înregistrare | `/signup` | Pagina de înregistrare |
| Materii | `/materii` | Lista materiilor disponibile |
| Subiect | `/materii/:subjectId` | Pagina unui subiect specific |
| Lecție | `/materii/:subjectId/:levelId/lectie/:lessonId` | Pagina unei lecții |
| Dashboard | `/dashboard` | Dashboard-ul utilizatorului |
| Profil | `/profil` | Profilul utilizatorului |
| Creatori | `/creatori` | Informații despre creatorii platformei |

## 🎨 Design și UX

- **Temă**: Suportă mod întunecat/light (next-themes)
- **Animări**: Animații smooth cu tailwindcss-animate
- **Componente UI**: shadcn/ui pentru o experiență consistentă
- **Responsive**: Design adaptat pentru toate dispozitivele

## 🔐 Autentificare

Platforma utilizează Supabase pentru autentificare. Variabilele de mediu necesare:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🧪 Testare

Proiectul utilizează Vitest pentru testare. Testele se află în directorul `src/test/`.

```bash
npm test
```

## 📦 Dependențe Principale

- **@radix-ui/react-*** - Componente UI accesibile
- **lucide-react** - Iconițe
- **recharts** - Grafice și diagrame
- **sonner** - Notificări toast
- **clsx & tailwind-merge** - Utilitare pentru clase CSS

## 🚀 Deployment

Pentru deploy, utilizați:
```bash
npm run build
```

Artefactele build vor fi în directorul `dist/`.

## 📝 Licență

Acest proiect este dezvoltat pentru scopuri educaționale.

## 👨‍💻 Autori

Creat pentru a ajuta elevii să se pregătească pentru olimpiadele școlare.
