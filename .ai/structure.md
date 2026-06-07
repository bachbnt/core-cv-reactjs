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

- Component/page folders should keep `index.ts` as the public export and the
  main implementation in `Component.tsx` or `Page.tsx`.
- Do not create empty `props.ts` or `styles.ts` files just to preserve folder
  shape.
- Keep props/types inline in the component file when they are short, used by one
  component only, or represent an empty object.
- Split props/types into `props.ts` only when they are large, reused by multiple
  files, or carry domain-heavy callback contracts.
- Keep styles inline with `sx` for small local rules. Use `styles.ts` only when
  the component/page has meaningful reusable local layout, responsive rules, or
  animation styles.
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
