# Structure Rules

## Layers

- `models`: type definitions and parsing/validation.
- `services`: external I/O and data transformation for Firebase/API calls.
- `queries`: TanStack Query hooks wrapping service calls.
- `stores`: client-only state shared across components.
- `components`: reusable visual and interaction components.
- `pages`: route-level composition.
- `routes`: paths, route metadata, and router wiring.
- `themes`: colors, variables, typography, MUI overrides.

Keep dependencies flowing downward:

```text
pages -> components/hooks/queries/routes/themes
components -> hooks/queries/models/themes
queries -> services/models
services -> core/models/firebase/mock
models -> core only when defaults are needed
```

Avoid importing page code into components, services, models, or stores.

## File Conventions

- New `.ts` and `.tsx` files should include the repo copyright header:

  ```ts
  /**
   * Copyright (c) 2026 bachbnt. All rights reserved.
   */
  ```

- Existing component/page folders usually contain:
  `Component.tsx`, `styles.ts`, `props.ts`, `index.ts`.
- Preserve this shape when adding similar modules.
- Keep `index.ts` files as exports only.
- Keep tests out of `src`; unit tests belong in `tests/unit`, automation tests
  in `tests/automation`.

## Mock Mode

`VITE_USE_MOCK_DATA=true` is intended for tests and deterministic local runs.
Do not let mock mode become required for production behavior.

## Worker

Worker code lives in `worker/src` and should remain deployable by Wrangler.
Keep provider-specific HTTP details inside `worker/src/providers.ts`.
Keep request validation in `worker/src/schema.ts`.
Keep rate limiting in `worker/src/rateLimit.ts`.
