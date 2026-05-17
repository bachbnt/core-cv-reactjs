# Performance Rules

## Frontend

- Keep route pages lazy-loaded through the existing wrapper pattern.
- Avoid adding large dependencies for small UI behavior.
- Keep Firebase imports as modular imports.
- Preserve Vite chunking for Firebase where possible.
- Derive expensive grouped lists with `useMemo` when source arrays are stable.
- Avoid unnecessary global state; prefer query cache for server data.

## Rendering

- Avoid hover/focus styles that trigger layout shifts.
- Prefer CSS transforms/opacity for animation over layout-affecting properties.
- Keep images lazy-loaded where the current pattern uses `loading="lazy"`.
- Make fixed-format UI stable with explicit dimensions, aspect ratios, or
  consistent borders/padding.

## Data

- Fetch user data concurrently as existing `useUserQuery` does.
- Keep query keys stable.
- Avoid refetch-on-focus unless there is a strong product reason.

## Worker

- Validate before provider calls.
- Keep provider response parsing minimal and defensive.
- Rate-limit before upstream calls.
- Avoid returning verbose upstream errors to the client.

## Measurement

- Use Playwright to protect critical layout invariants.
- Use browser devtools or Lighthouse only when optimizing a real performance
  issue, not as a default refactor trigger.
