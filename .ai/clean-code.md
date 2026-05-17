# Clean Code Rules

## Scope

- Keep changes tightly scoped to the request.
- Avoid unrelated formatting churn.
- Preserve existing public behavior unless the task explicitly changes it.

## Naming

- Use domain names already present in the repo: `Config`, `Profile`, `Project`,
  `Payment`, `Service`, `Contact`, `ChatMessage`.
- Keep tracking names consistent and searchable.
- Prefer clear function names over comments explaining simple code.

## Abstraction

- Extract helpers when they remove meaningful duplication or isolate a boundary.
- Do not add abstractions for one-off code.
- Keep UI components reusable only when they are genuinely shared.

## Error Handling

- Throw explicit errors at service boundaries.
- For UI, show localized/generic user-facing messages.
- For tests, assert failure surfaces rather than swallowing errors.

## Comments

- Do not add comments by default.
- Add comments only for boundaries, tricky browser behavior, security decisions,
  non-obvious compatibility constraints, or code that would otherwise be easy to
  misuse.
- Do not comment obvious assignments, JSX structure, prop passing, simple
  conditionals, or code whose name already explains the intent.
- When editing existing files, avoid adding explanatory comments just because a
  nearby block is being changed.

## Refactoring

- Refactor in small steps with tests.
- Keep moved tests functionally equivalent unless intentionally expanding
  coverage.
- Never remove existing tests without replacing equivalent coverage.
