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

## Chat Proxy Worker

The chatbot uses a Cloudflare Worker in `worker/` as a proxy for Gemini,
OpenAI, and Anthropic. API keys must live in the Worker, not in the frontend.

### Worker local setup

```bash
cd worker
npm install
cp ../.env.example .dev.vars
```

Fill `.dev.vars` with the Worker secrets you need:

```bash
GEMINI_API_KEY=""
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""
ALLOWED_ORIGINS="http://localhost:3000"
RATE_LIMIT_PER_MINUTE="10"
RATE_LIMIT_PER_DAY="200"
```

### Worker local dev

```bash
cd worker
npm run dev
```

The Worker runs at [http://localhost:8787](http://localhost:8787). To connect
the frontend to it, set this in the app `.env`:

```bash
VITE_CHAT_PROXY_URL="http://localhost:8787"
```

### Worker checks

```bash
cd worker
npm run typecheck
```

The main app test suite also includes unit tests for Worker schema, provider,
and rate-limit logic under `tests/unit/worker`.

### Worker deploy

```bash
cd worker
npx wrangler login
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put ANTHROPIC_API_KEY
npm run deploy
```

After deploy, copy the Worker URL into the frontend environment:

```bash
VITE_CHAT_PROXY_URL="https://<worker-url>"
```

Optional per-IP rate limiting uses the `CHAT_RATE_LIMIT` KV binding. Create it
with:

```bash
cd worker
npx wrangler kv:namespace create CHAT_RATE_LIMIT
```

Then paste the returned namespace id into `worker/wrangler.toml`.

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
