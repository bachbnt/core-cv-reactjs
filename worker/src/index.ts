/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { callClaude, callGemini, callOpenAI, HttpError } from './providers';
import { enforceRateLimit, type RateLimitEnv } from './rateLimit';
import { chatRequestSchema } from './schema';

export interface Env extends RateLimitEnv {
  GEMINI_API_KEY?: string;
  OPENAI_API_KEY?: string;
  ANTHROPIC_API_KEY?: string;
  ALLOWED_ORIGINS?: string;
}

const json = (body: unknown, init: ResponseInit = {}): Response =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  });

const resolveCors = (
  request: Request,
  env: Env,
): Record<string, string> => {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = (env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const allowAll = allowed.includes('*');
  const isAllowed = allowAll || allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin || '*' : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
};

const handleChat = async (
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<Response> => {
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';

  try {
    await enforceRateLimit(env, ip);
  } catch (error) {
    return json(
      { error: (error as Error).message },
      { status: 429, headers: cors },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, { status: 400, headers: cors });
  }

  const parsed = chatRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      { error: 'invalid_request', issues: parsed.error.issues },
      { status: 400, headers: cors },
    );
  }

  const { provider, messages, systemPrompt } = parsed.data;

  try {
    let text: string;
    if (provider === 'openai') {
      text = await callOpenAI(env.OPENAI_API_KEY, messages, systemPrompt);
    } else if (provider === 'claude') {
      text = await callClaude(env.ANTHROPIC_API_KEY, messages, systemPrompt);
    } else {
      text = await callGemini(env.GEMINI_API_KEY, messages, systemPrompt);
    }
    return json({ text }, { headers: cors });
  } catch (error) {
    if (error instanceof HttpError) {
      return json(
        { error: error.message },
        { status: error.status, headers: cors },
      );
    }
    return json(
      { error: 'upstream_error' },
      { status: 502, headers: cors },
    );
  }
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = resolveCors(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/health') {
      return json({ ok: true }, { headers: cors });
    }

    if (request.method === 'POST' && url.pathname === '/chat') {
      return handleChat(request, env, cors);
    }

    return json({ error: 'not_found' }, { status: 404, headers: cors });
  },
};
