# Quick Start Guide

Welcome to the React Demo with Playwright! This guide will help you quickly set up and run the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v22.16.0 or later)
- **npm** (v10 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/code-chimp/playwright-react-app.git
   cd bdd-react-app
   ```

2. Install dependencies:

   Make sure you're using the correct Node version:

   ```bash
   # If using nvm
   nvm use
   # If using Volta (recommended)
   # Volta will automatically use the correct version
   ```

   Install dependencies:

   ```bash
   npm install
   ```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:3000` by default.

## Building the Project

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

TODO: Update test documentation

## Development Tools

### Code Quality

- **Format Code**:

  ```bash
  npm run format:fix    # Fix formatting issues
  npm run format:check  # Check formatting only
  ```

- **Lint Code**:
  ```bash
  npm run lint       # Run all linters
  npm run fix:ts     # Fix TypeScript issues
  npm run fix:styles # Fix CSS issues
  ```

## Additional Resources

For more details, refer to the [README.md](../README.md) file.
