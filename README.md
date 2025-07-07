# React Demo with Playwright End-to-End Testing

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io) [![license](https://img.shields.io/badge/license-0BSD-green.svg)](https://github.com/code-chimp/bdd-react-app/blob/main/LICENSE) [![node](https://img.shields.io/badge/node->=22.16.0-brightgreen.svg)](https://nodejs.org) [![react](https://img.shields.io/badge/react-19.1.0-red.svg)](https://react.dev/) [![tailwindcss](https://img.shields.io/badge/tailwindcss-4.1.11-blue.svg)](https://tailwindcss.com/) [![playwright](https://img.shields.io/badge/playwright-1.52.0-orange.svg)](https://playwright.dev/)

<table style="border:none">
<tbody>
  <tr>
    <td style="border:none;min-width:205px;text-align:center">
      <img src="assets/playwright.png" alt="Shakespearean actor in a red and green comedy mask" width=400 height=400 style="min-width:300px;min-height:300px">
    </td>
    <td style="border:none">
      <p>
        This project is a demonstration of the integration of Playwright with a modern
        React 19 application for automated browser end-to-end testing.
      </p>
    </td>
  </tr>
</tbody>
</table>

## Technologies Used

- **[React 19](https://react.dev)**: Modern web application framework
- **[Zustand](https://zustand-demo.pmnd.rs)**: State management library for React
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed JavaScript for enhanced developer experience
- **[Playwright](https://playwright.dev/)**: Browser automation library for end-to-end testing
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for efficient styling

## The Value of TailwindCSS

TailwindCSS provides significant advantages to development teams by:

1. **Accelerating UI Development**: Utility-first approach eliminates the need to write custom CSS, allowing faster implementation of designs.
2. **Maintaining Consistency**: Pre-defined design system with constraints for spacing, colors, typography, and more ensures visual consistency.
3. **Reducing CSS Complexity**:
   - No need to create and maintain complex CSS class naming systems
   - Minimizes CSS specificity issues and selector conflicts
   - Results in smaller bundle sizes through optimized production builds
4. **Improving Developer Experience**:
   - Write styles directly in your markup without context switching
   - IntelliSense support in modern IDEs provides autocomplete
   - Predictable styling behavior with direct control over every element
5. **Supporting Responsive Design**: Built-in responsive modifiers (sm:, md:, lg:, etc.) make creating adaptive interfaces straightforward.

This project demonstrates how TailwindCSS integrates with React components to create maintainable, consistent UI patterns while reducing style-related technical debt.

## Documentation

The following documentation is available to help you get started and understand the project:

1. [Quick Start Guide](./docs/quick-start-guide.md): A step-by-step guide to set up and run the project.
2. [Development Guide](./docs/development-guide.md): Instructions for setting up and running the development environment.
3. [Project Structure](./docs/project-structure.md): Overview of the project's folder and file structure.
5. [Would You Like to Know More?](./docs/would-you-like-to-know-more.md): Additional articles and tutorials about the methods and technologies used in this project.

## Development Environment

### Recommended VS Code Extensions

The project includes recommended VS Code extensions for an optimal development experience:

- **Tailwind CSS IntelliSense**: Smart Tailwind CSS tooling
- **npm Intellisense**: Autocompletes npm modules in import statements
- **ESLint**: JavaScript linting
- **EditorConfig**: Consistent coding style across editors
- **Prettier**: Code formatting
- **Code Spell Checker**: Spell checking for code and docs
- **Stylelint**: Modern CSS/SCSS linting
- **Vitest**: Test explorer for Vitest
- **Pretty TypeScript Errors**: Improves TypeScript error messages
- **Browserslist**: Browser compatibility highlighting

These extensions are configured in `.vscode/extensions.json` and will be recommended automatically when opening the project in VS Code.

### Code Quality Tools

The project utilizes several tools to maintain code quality:

- **ESLint**: JavaScript and TypeScript linting
- **Prettier**: Code formatting
- **Stylelint**: CSS/SCSS linting
- **Husky**: Git hooks for pre-commit and pre-push validations
- **lint-staged**: Run linters on git staged files
- **EditorConfig**: Consistent editor configuration

The configuration for these tools can be found in their respective configuration files in the project root.

