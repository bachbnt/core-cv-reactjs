# Testing Rules

## Unit Tests

Unit tests live in `tests/unit` and run with:

```bash
npm run test:unit:run
```

Use Vitest and Testing Library. Add unit tests for:

- Zod schemas and model parsers.
- Query and mutation hooks.
- Store state transitions.
- Service transformations and mock mode.
- Worker schema, rate limiting, provider mapping, and error handling.

Keep tests deterministic. Mock Firebase/service/provider boundaries rather than
calling network services.

## Automation Tests

Automation tests live in `tests/automation` and run with:

```bash
npm run test:automation
```

Playwright starts Vite with `VITE_USE_MOCK_DATA=true` and a mocked chat proxy
URL. Tests should target user-visible behavior:

- navigation and routing
- forms and validation
- responsive drawer behavior
- chatbot open/send flow
- critical layout regressions
- 404 and route fallback behavior

Prefer roles, labels, placeholders, and text selectors. Add `aria-label` to
icon-only controls instead of using class selectors.

## When To Add Tests

- Bug fix: add a regression test that fails before the fix.
- New model/schema behavior: add unit tests.
- New route/page/user flow: add Playwright coverage.
- Theme/layout interaction changes: add Playwright assertions for visual
  invariants when practical.

## Required Checks

Before finishing test or source changes:

```bash
npm run typecheck
npm run test:unit:run
```

Also run automation when UI behavior changes:

```bash
npm run test:automation
```
