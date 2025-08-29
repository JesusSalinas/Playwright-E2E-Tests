# Copilot Instructions for Playwright SDET Project

## 🎯 Objective
Provide guidelines for GitHub Copilot so it can generate consistent, maintainable, and high-quality code for **UI/API automation** using **Playwright + TypeScript**.
The focus is on **Page Object Model (POM)**, **readable tests**, and **scalable automation**.

---

## 📝 Coding Standards

- **Language**: TypeScript only. Always type functions and parameters.
- **File structure**:
  - `/tests/` → test files (`*.spec.ts`)
  - `/pages/` → Page Objects (PascalCase, e.g., `LoginPage.ts`)
  - `/utils/` → helpers and utilities
- **Naming conventions**:
  - Test files → `*.spec.ts`
  - Page Objects → `PascalCase`
  - Variables & functions → `camelCase`

---

## 🧪 Test Style

- Group scenarios with `test.describe`.
- Write clear and meaningful test names (English, human-readable).
  ```ts
  test('should allow user to login with valid credentials', async ({ page }) => { ... });
