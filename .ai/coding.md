# Coding Conventions

## TypeScript

- New `.ts` and `.tsx` source/test/config files should start with the existing
  copyright header:

  ```ts
  /**
   * Copyright (c) 2026 bachbnt. All rights reserved.
   */
  ```

- Keep `strict` compatibility. Do not silence type errors with broad casts
  unless the boundary is genuinely dynamic.
- Prefer explicit domain types from `src/models` over ad hoc object shapes.
- Use Zod schemas for data parsed from Firestore, APIs, or unknown payloads.
- Keep nullable/optional access deliberate; avoid chains that hide real missing
  data bugs.

## Imports

- Use repo aliases from `tsconfig.json` for app code:
  `@components`, `@core`, `@hooks`, `@locales`, `@models`, `@pages`,
  `@queries`, `@routes`, `@services`, `@stores`, `@themes`.
- Prefer barrel imports only where the repo already exposes them cleanly.
- Keep Worker tests importing Worker files by relative path from `tests` unless
  a Worker alias is added.

## React

- Keep pages thin: read query data, derive view models with `useMemo` when
  useful, and delegate repeated UI to components.
- Do not call service functions directly from components when a query/mutation
  hook already exists or should exist.
- Keep event tracking names consistent with existing `pageX_*` and
  `component_*` patterns.
- Add accessible names to icon-only buttons (`aria-label`) so Playwright and
  assistive tech can target them.

## Localization

- Do not hardcode user-facing UI text in components, including dialog titles,
  button labels, loading labels, placeholders, form errors, tooltips, and
  `aria-label` values.
- Use `Localization` keys with `t(...)` for reusable interface copy. When adding
  keys, update `src/locales/i18n.ts`, `src/services/mock.ts`, and provide or
  update a Firestore localization patch script/data file.
- Use Firestore/domain documents for content owned by that document, such as CV
  candidate data, PDF metadata, and CV preview titles. Keep UI action labels in
  localization.
- Tests should assert localized/mock data or explicit remote-domain data, not
  newly hardcoded English strings.

## Styling

- Prefer the existing MUI theme overrides in `src/themes/themes.ts` for global
  component behavior.
- Prefer `sx` for small one-off local styles.
- Use page/component `styles.ts` only for meaningful local layout, responsive
  rules, animation styles, or shared class names inside that component/page.
- Do not keep empty `styles.ts` files.
- Keep button heights stable across variants and hover states; account for
  border width with `boxSizing` or equivalent.
- Avoid layout shifts from hover states, dynamic labels, loading states, and
  icons.

## Env

- Add new frontend variables to `.env.example` with `VITE_` prefix.
- Add Worker-only secrets to `.env.example` under the Worker section, but do not
  expose them to frontend code.
