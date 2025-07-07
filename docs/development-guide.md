# Development Guide

This guide provides instructions for setting up and running the development environment for the BDD React Demo project.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v22.15.1 or later)
- **npm** (v10 or later)

## Setting Up the Development Environment

1. Clone the repository:

   ```bash
   git clone https://github.com/code-chimp/bdd-react-app.git
   cd bdd-react-app
   ```

2. Install dependencies:

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

### Install Playwright Browsers

Before running tests for the first time, install the required Playwright browsers:

```bash
npm run e2e:install
```

### Run All Tests

Execute all BDD tests and generate reports, use the following command:

```bash
npm run test:bdd
```

### Run a Specific Feature

To run a specific feature file:

```bash
npm run test:bdd:run ./tests/assurance/features/your-feature-file.feature
```

### Run a Specific Scenario

To run a specific feature file using the **Scenario:** text description:

```bash
npm run test:bdd:run ./tests/assurance/features/your-feature-file.feature -- --name "Delete an existing task item from the task list"
```

## Test Reports

After running the tests, several report formats are generated in the `reports/` directory:

- **Basic HTML Report**: `reports/bdd-report-basic.html`
- **Enhanced HTML Report**: `reports/bdd-report-deluxe.html`
- **JSON Report**: `reports/bdd-report.json`
- **JUnit Report**: `reports/bdd-report.xml`
- **Multiple Format Report**: `reports/bdd-report-multiple/index.html`

The multiple format report includes:
- Test execution details
- Feature and scenario statistics
- Platform and browser information
- Screenshots for failed scenarios
- Detailed step execution logs

Screenshots of failed tests are automatically captured and included in the reports.

## Additional Resources

For more details, refer to the [Quick Start Guide](./quick-start-guide.md) and [Project Structure](./project-structure.md) documentation.
