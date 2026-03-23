# OlimpiX - Educational Platform

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-orange.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-yellow.svg)](https://vitejs.dev/)

</div>

OlimpiX is a modern educational platform designed to help students learn various subjects through interactive lessons, quizzes, and progress tracking. Built with React, TypeScript, and Supabase.

## ✨ Features

- **User Authentication** - Secure sign up and login with Supabase auth
- **Subject Navigation** - Browse and explore different subjects
- **Interactive Lessons** - Detailed lesson content with progression
- **Quiz System** - Test knowledge with built-in quizzes
- **Progress Tracking** - Track learning progress and achievements
- **User Dashboard** - Personalized dashboard with stats
- **Premium Access** - Unlock premium content and features
- **Dark/Light Theme** - Toggle between theme modes
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Auth, Database)
- **Routing**: React Router DOM
- **State Management**: React Query, Context API
- **Form Handling**: React Hook Form, Zod
- **Icons**: Lucide React
- **Charts**: Recharts

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for backend)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/OlimpiX.git
cd OlimpiX
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and configure your credentials:

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

Run the SQL setup script in your Supabase dashboard:

```bash
# The setup script is in supabase-setup.sql
```

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
OlimpiX/
├── public/                 # Static assets
│   └── icon.png           # App icon
├── src/
│   ├── components/        # React components
│   │   ├── home/         # Home page components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/         # React contexts (Auth)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities and libraries
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## 🔐 Authentication

The project uses Supabase Auth with the following features:
- Email/password registration
- Session management
- Protected routes
- User profile management

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## 🔒 Security

For security vulnerabilities, please read our [Security Policy](SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Supabase](https://supabase.com/) - Backend services
- [Vite](https://vitejs.dev/) - Build tool

---

<p align="center">Made with ❤️ for education</p>