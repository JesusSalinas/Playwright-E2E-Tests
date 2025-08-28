# Playwright E2E Testing Framework

![Playwright](https://img.shields.io/badge/Playwright-2.8.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![Node](https://img.shields.io/badge/Node-18.x-yellow)
![License](https://img.shields.io/badge/License-MIT-purple)

## 📋 Overview

End-to-end testing framework using Playwright with TypeScript and Page Object Model pattern.

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) - Modern web testing framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Node.js](https://nodejs.org/) - JavaScript runtime
- Page Object Model (POM) - Design pattern

## 📁 Project Structure

```
playwright-e2e-tests/
├── pages/              # Page Object Models
│   ├── BasePage.ts     # Base page with common methods
│   └── TodoPage.ts     # Todo application page
├── tests/              # Test specs
│   └── example.spec.ts # Todo application tests
├── fixtures/           # Test data
│   └── test-data.ts   # Constants and test data
├── playwright.config.ts # Playwright configuration
└── package.json        # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/playwright-e2e-tests.git

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 🏃‍♂️ Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests in specific browser
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

## 📝 Test Reports

Reports are generated after each test run in the `playwright-report` directory.

```bash
# Open last test report
npx playwright show-report
```

## 👷 CI/CD Integration

This framework is ready to be integrated with popular CI/CD platforms:

- GitHub Actions
- Jenkins
- Azure DevOps
- CircleCI

## 📊 Features

- Page Object Model implementation
- Strong typing with TypeScript
- Cross-browser testing
- Parallel test execution
- HTML test reports
- Screenshot and video capture on failure
- CI/CD ready

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.