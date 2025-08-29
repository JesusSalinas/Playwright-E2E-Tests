import { defineConfig, devices } from '@playwright/test';
import { DEFAULT_USER_AGENT } from './config';

export default defineConfig({
  // 📂 Directorio de pruebas
  testDir: './tests',

  // ⏱️ Timeout global por test
  timeout: 5 * 60 * 1000,

  // 🧵 Número de tests en paralelo (ajustar según CI/CD)
  fullyParallel: true,

  // ❌ Fallar si usamos test.only en CI
  forbidOnly: !!process.env.CI,

  // 🔁 Reintentos: 2 en CI, 0 local
  retries: process.env.CI ? 2 : 0,

  // 👷 Workers: 1 en CI, automático en local
  workers: process.env.CI ? 1 : undefined,

  // 📊 Reportes
  reporter: [
    ['list'], // consola amigable
    ['html', { open: 'never' }], // reporte HTML
    // ['allure-playwright'], // Allure (tendencia actual en QA)
  ],

  expect: {
    timeout: 60 * 1000, // Timeout por defecto para expect()
  },

  // ⚙️ Configuración por defecto para todos los tests
  use: {
    //baseURL: process.env.BASE_URL || 'http://localhost:3000',
    actionTimeout: 60 * 1000,
    navigationTimeout: 60 * 1000,
    userAgent: DEFAULT_USER_AGENT,
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'API',
      testMatch: /api\/(.*)\.spec\.ts/,
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
        },
      },
    },
    // {
    //   name: 'mobile-chrome',
    //   use: { ...devices['Pixel 7'] },
    // },
    // {
    //   name: 'mobile-safari',
    //   use: { ...devices['iPhone 14'] },
    // },
  ],
  outputDir: 'test-results/',
});
