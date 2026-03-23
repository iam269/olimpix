# Contributing to OlimpiX

Thank you for your interest in contributing to OlimpiX! We welcome contributions from the community and are excited to work with you.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Style Guides](#style-guides)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to [INSERT CONTACT EMAIL].

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A Supabase account (for testing)

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OlimpiX.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
5. Configure your Supabase credentials in `.env`
6. Start the development server:
   ```bash
   npm run dev
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- **Bug Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, browser, etc.
- **Screenshots**: If applicable

Use the bug report template when creating issues.

### Suggesting Features

We welcome feature suggestions! To propose a new feature:

1. Check if the feature already exists
2. Create an issue with the label `enhancement`
3. Describe the feature in detail
4. Explain why this feature would be useful
5. Include any mockups or examples if possible

### Pull Requests

#### Types of Contributions

- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 Code style improvements
- 🔧 Build system improvements
- ⚡ Performance improvements
- 🧪 Testing improvements

#### Development Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run lint
   npm run build
   npm run test
   ```

4. **Commit your changes** with a descriptive commit message:
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** to the main repository

## Pull Request Guidelines

### PR Title Format

Use conventional commit format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Maintenance

### PR Description

Your PR description should include:

1. **Summary**: Brief description of the changes
2. **Related Issues**: Link to any related issues (e.g., "Closes #123")
3. **Type of Change**: What type of change is this?
4. **Testing**: How was this tested?
5. **Screenshots**: If applicable

### What Happens After Submission

- Maintainers will review your PR
- You may receive feedback or requests for changes
- Once approved, your PR will be merged

## Style Guides

### Git Commit Messages

- Use imperative mood: "Add feature" not "Added feature"
- Limit the first line to 72 characters or less
- Reference issues and PRs in the body
- Start with a verb in the present tense

Example:
```
Add user progress tracking

- Implemented progress API endpoint
- Added progress visualization in dashboard
- Updated database schema for progress table

Closes #123
```

### TypeScript/JavaScript

- Use TypeScript for new code
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Run ESLint before committing

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper TypeScript types
- Follow React best practices
- Use proper prop typing

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design
- Use semantic class names

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)

## Questions?

If you have any questions, feel free to:
- Create an issue with the `question` label
- Join our community chat [INSERT LINK]
- Contact the maintainers

Thank you for contributing to OlimpiX! 🎉