# `src/features/`

Vertical slices that own everything a feature needs: components, hooks, types, styles, validation. Use this folder whenever a piece of UI is owned by a single domain concept and not reused as a generic primitive.

## Convention

```
features/
  <feature-name>/
    <Component>.tsx
    <use…>.ts          # hooks specific to this feature
    types.ts            # local types (re-export from @models if shared)
    styles.ts           # local styles
    validation.ts       # zod schemas for forms in the feature
    index.ts            # public surface (`export { default } from './<Component>'`)
```

Import with the `@features/<name>` alias.

## Versus `src/components/`

- `src/components/` → generic UI primitives reused across features (Button, Typography, Avatar, Drawer, Carousel, etc.).
- `src/features/<name>/` → domain-specific UI (ChatBot belongs to the chat feature, a checkout form would belong to a checkout feature, etc.).

When in doubt, start in `src/components/` and graduate to `src/features/` only when the slice gains its own hooks, state, or validation.

## Current features

- **chat** — chatbot widget. Calls the Cloudflare Worker via `@queries/useChatMutation`; the API key never reaches the browser.

## Future migration

`pages/` is still the route entry (the dynamic loader in `src/components/Wrapper.tsx` globs `pages/*/index.ts`). When a page grows beyond a single file, move its supporting logic into `features/<page>/` and keep `pages/<page>/index.ts` as a thin re-export.
