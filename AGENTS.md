# Agent Instructions

This repo uses shared AI working rules in `.ai/`. Read the relevant files before
editing.

Start with:

- `.ai/project.md`
- `.ai/coding.md`
- `.ai/structure.md`
- `.ai/testing.md`

For reviews, also read:

- `.ai/review.md`
- `.ai/performance.md`
- `.ai/security.md`

For refactors and cleanup, also read:

- `.ai/clean-code.md`

Before finishing, run the checks that match the change. For broad source
changes, prefer:

```bash
npm run typecheck
npm run lint
npm run test:unit:run
```

Run Playwright when UI behavior changes:

```bash
npm run test:automation
```
