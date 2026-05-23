# ReactJS CV

A configurable portfolio and CV web app built with React 18, Vite, TypeScript,
MUI, Firebase, TanStack Query, Zustand, i18next, Vitest, Playwright, and a
Cloudflare Worker chat proxy.

Development URL: [http://localhost:3000](http://localhost:3000)  
Production URL: [https://bachbntdev.web.app/](https://bachbntdev.web.app/)

## Features

- Config-driven navigation with independent `Visible` and `Enable` flags for
  each route.
- Responsive header and drawer navigation with active page state and CV link.
- Wheel and touch navigation between visible pages, including page enter/exit
  animations.
- Dynamic profile content loaded from Firebase Firestore, with deterministic
  mock data support for local and test runs.
- Home page with avatar, primary specialty, social contact links, and quick
  actions.
- About page with profile summary, grouped skills, outbound skill links, and a
  cover image carousel.
- Resume page with education and experience timelines.
- Project page grouped by company, freelance, and personal work, with image
  carousel dialogs, technology details, descriptions, and reference links.
- Certificate page with certificate cards, preview dialog, and download action.
- Service page for visible service offerings.
- Contact page with contact links and a validated message form that writes to
  Firestore.
- Payment page with payment cards, QR preview dialogs, and copy-to-clipboard
  actions for account details.
- Blog route placeholder controlled by config visibility.
- Floating portfolio chatbot that answers from the loaded profile, resume,
  project, certificate, and contact data.
- Chat provider selection through config for Gemini, OpenAI, or Claude via the
  Cloudflare Worker proxy.
- Firestore-backed localization through i18next with English and Vietnamese
  mock translations.
- Firebase Analytics tracking for page views, component clicks, and Web Vitals.
- Persisted TanStack Query cache in local storage and Firestore local cache for
  multi-tab usage.
- Zod parsing for config and profile data defaults.

## Routes

| Route          | Page        | Current behavior                                                  |
| -------------- | ----------- | ----------------------------------------------------------------- |
| `/`            | Home        | Landing profile, avatar, social links, About and Contact actions. |
| `/about`       | About       | Profile summary, skills by type, and cover carousel.              |
| `/resume`      | Resume      | Education and experience timelines.                               |
| `/project`     | Project     | Project groups and detail dialogs.                                |
| `/blog`        | Blog        | Placeholder route, hidden by default mock config.                 |
| `/certificate` | Certificate | Certificate grid and preview/download dialog.                     |
| `/service`     | Service     | Service offering cards.                                           |
| `/contact`     | Contact     | Contact links and message form.                                   |
| `/payment`     | Payment     | Payment details, QR dialogs, and copy actions.                    |
| `/*`           | Not Found   | 404 fallback route.                                               |

## Data Flow

The app preloads config and user data in `src/App.tsx`.

- `src/queries/useConfigQuery.ts` loads app config, applies the favicon/title,
  and preloads the background image.
- `src/queries/useUserQuery.ts` loads profile, education, experience, skills,
  projects, services, contacts, payments, and certificates in parallel.
- `src/services/service.ts` reads from Firestore unless
  `VITE_USE_MOCK_DATA=true`, in which case it uses `src/services/mock.ts`.
- List documents are filtered by `visible: true` and sorted by `index`.
- Contact form submissions write to the `message` collection when mock mode is
  disabled.

Firestore data is organized around these collections and documents:

| Collection | Document              | Purpose                                                            |
| ---------- | --------------------- | ------------------------------------------------------------------ |
| `config`   | `config`              | App title, icon, language, image defaults, page flags, chat flags. |
| `config`   | `localization`        | Translation dictionaries by language key.                          |
| `user`     | `profile`             | Name, avatar, CV URL, summary, covers, specialties.                |
| `user`     | `education`           | Education timeline entries keyed by id.                            |
| `user`     | `experience`          | Experience timeline entries keyed by id.                           |
| `user`     | `skill`               | Skills grouped as framework, language, or tool.                    |
| `user`     | `project`             | Projects grouped as company, freelance, or personal.               |
| `user`     | `service`             | Service offering cards.                                            |
| `user`     | `contact`             | Social and non-social contact links.                               |
| `user`     | `payment`             | Bank or wallet payment information.                                |
| `user`     | `certificate`         | Certificate metadata and image/download URLs.                      |
| `message`  | generated date string | Contact form messages.                                             |

## Environment

Create a local environment file from the example:

```bash
cp .env.example .env
```

Important frontend variables:

```bash
VITE_TITLE="Bach Bui"
VITE_DOMAIN="http://localhost:3000"
VITE_ASSETS_URL="https://raw.githubusercontent.com/bachbnt/assets/main/config"
VITE_EDIT_MODE="false"
VITE_USE_MOCK_DATA="false"
VITE_CHAT_PROXY_URL=""
```

Firebase web app config is also read from `VITE_FIREBASE_*` variables in
`.env.example`.

Use `VITE_USE_MOCK_DATA=true` for deterministic local development and tests
without Firestore reads or writes.

## Development

### `npm run dev`

Runs the app in development mode.

### `npm run build`

Builds the app for production to the build folder.

### `npm run typecheck`

Runs TypeScript checking for app, unit tests, automation tests, and worker
source included by `tsconfig.json`.

### `npm run lint`

Runs ESLint for app and test source.

### `npm run preview`

Serves the production build locally after running `npm run build`.

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

Installs Firebase CLI globally.

### `firebase login`

Logs in to Firebase using Firebase CLI.

### `firebase login:ci`

Generates a Firebase token to use for authentication in the CI/CD pipeline.

### `firebase init`

Initializes Firebase for the project.

### `firebase deploy`

Deploys the project to Firebase.
