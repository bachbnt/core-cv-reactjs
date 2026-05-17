Development URL: [http://localhost:3000](http://localhost:3000)\
Production URL: [https://bachbntdev.web.app/](https://bachbntdev.web.app/)

## Development

### `npm run dev`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the build folder.

### `npm run typecheck`

Runs TypeScript checking for app, unit tests, automation tests, and worker
source included by `tsconfig.json`.

### `npm run lint`

Runs ESLint for app and test source.

## Testing

Unit tests are separated under `tests/unit` and run with Vitest using
`vitest.unit.config.ts`.

### `npm test`

Runs unit tests in watch mode.

### `npm run test:unit:run`

Runs unit tests once.

### `npm run test:coverage`

Runs unit tests once and generates coverage output.

Automation tests are separated under `tests/automation` and run with Playwright
using `playwright.config.ts`. The Playwright server starts Vite with
`VITE_USE_MOCK_DATA=true`, so these tests use deterministic local mock data
instead of Firestore.

### `npm run test:automation:install`

Installs Playwright browsers when needed. For Chromium only, run:

```bash
npm run test:automation:install -- --with-deps chromium
```

### `npm run test:automation`

Runs Playwright automation tests in headless mode.

### `npm run test:automation:headed`

Runs Playwright automation tests with a visible browser window.

### `npm run test:automation:debug`

Runs Playwright automation tests in debug mode.

### `npm run test:automation:ui`

Opens the Playwright test runner UI.

### `npm run test:all`

Runs unit tests once, then runs Playwright automation tests.

### Full local check

```bash
npm run typecheck
npm run lint
npm run test:all
```

## Deployment

### `npm run all`

Builds the app and deploys it to Firebase.

### `npm install -g firebase-tools`

Install Firebase CLI globally.

### `firebase login`

Log in to Firebase using Firebase CLI.

### `firebase login:ci`

Generate a Firebase token to use for authentication in the CI/CD pipeline

### `firebase init`

Initialize Firebase for the project.

### `firebase deploy`

Deploy the project to Firebase.
