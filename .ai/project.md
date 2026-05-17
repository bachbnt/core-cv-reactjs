# Project Context

This repo is a React 18 portfolio/CV app built with Vite, TypeScript, MUI,
Firebase Firestore/Analytics, TanStack Query, Zustand, i18next, Vitest, and
Playwright.

The chatbot uses a Cloudflare Worker in `worker/` as a proxy for Gemini,
OpenAI, and Anthropic. Provider API keys must stay in the Worker, never in
frontend `VITE_*` variables.

## Important Paths

- `src/index.tsx`: app bootstrap, theme, query persistence, web vitals.
- `src/App.tsx`: preloads config and user data.
- `src/routes`: route definitions and app router.
- `src/pages`: route-level screens.
- `src/components`: reusable UI components.
- `src/queries`: TanStack Query hooks and query client.
- `src/services`: Firebase, mock data, and frontend service functions.
- `src/models`: TypeScript models and Zod schemas.
- `src/themes`: MUI theme, colors, variables, global component overrides.
- `worker/src`: Cloudflare Worker chat proxy.
- `tests/unit`: Vitest unit tests.
- `tests/automation`: Playwright automation tests.

## Default Checks

Run focused checks for the change, and before finishing broader changes run:

```bash
npm run typecheck
npm run lint
npm run test:unit:run
```

Run Playwright when routing, forms, layout, theme, chatbot, or visible UI
behavior changes:

```bash
npm run test:automation
```

Use headed mode when visually debugging:

```bash
npm run test:automation:headed
```
