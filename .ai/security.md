# Security Rules

## Secrets

- Never put Gemini, OpenAI, or Anthropic API keys in frontend code or `VITE_*`
  env variables.
- Use Cloudflare Worker secrets:
  `GEMINI_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`.
- Keep `.env`, `.env.local`, and `worker/.dev.vars` ignored.
- Keep `.env.example` placeholder-only.

## Chat Proxy

- Frontend must call only `VITE_CHAT_PROXY_URL`.
- Worker must validate `/chat` requests with Zod before provider calls.
- Worker should rate-limit before provider calls when KV is configured.
- CORS `ALLOWED_ORIGINS` should be explicit for production.

## Firebase

- Treat Firebase web config as public identifiers, not private secrets.
- Keep write operations limited and intentional.
- For tests and automation, use `VITE_USE_MOCK_DATA=true` instead of writing to
  Firestore.

## Logging

- Do not log secrets, provider request headers, or full upstream error bodies.
- Console logging in production code should be deliberate and reviewed.

## Dependencies

- Avoid adding dependencies for small helpers.
- Check package purpose and browser impact before adding frontend dependencies.
