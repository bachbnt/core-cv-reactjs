# Code Review Checklist

Review for concrete bugs first. Prefer findings with file and line references.

## Correctness

- Does the change preserve route behavior and feature flags from config?
- Are Firestore documents parsed safely with defaults?
- Does query caching/persistence still behave predictably?
- Are async mutations handling success, error, and loading states?
- Does mock mode avoid writing to Firebase?
- Does Worker validation reject malformed requests?

## UI Behavior

- Are clickable controls accessible by role/name?
- Do hover/focus/loading states avoid layout shifts?
- Does mobile drawer behavior still work?
- Are route transitions and scroll navigation unaffected?
- Is text still readable and contained on small screens?

## Testing

- Is there a unit test for new parsing, service, hook, store, or Worker logic?
- Is there Playwright coverage for visible user flows?
- Do tests avoid real network/API dependencies?
- Are selectors resilient and user-facing?

## Security

- No provider API key appears in frontend env or source.
- Worker secrets are referenced via Wrangler secrets or `.dev.vars`.
- CORS origins are deliberate.
- Error messages do not leak secrets or upstream response bodies.

## Maintainability

- Does the change fit existing folder/layer boundaries?
- Is duplicate logic extracted only when it reduces real complexity?
- Are comments sparse and useful?
- Are unrelated refactors avoided?
