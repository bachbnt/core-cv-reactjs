/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  callClaude,
  callGemini,
  callOpenAI,
  HttpError,
} from '../../../worker/src/providers';

describe('worker providers', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('maps OpenAI chat messages and returns assistant content', async () => {
    const fetchMock = vi.fn(async () =>
      Response.json({ choices: [{ message: { content: 'OpenAI reply' } }] }),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      callOpenAI(
        'key',
        [
          { role: 'user', content: 'Hi' },
          { role: 'model', content: 'Hello' },
        ],
        'system prompt',
      ),
    ).resolves.toBe('OpenAI reply');

    const [, init] = fetchMock.mock.calls[0] as unknown as [
      string,
      RequestInit,
    ];
    const body = JSON.parse(init.body as string);
    expect(body.messages).toEqual([
      { role: 'system', content: 'system prompt' },
      { role: 'user', content: 'Hi' },
      { role: 'assistant', content: 'Hello' },
    ]);
  });

  it('maps Gemini messages and returns candidate text', async () => {
    const fetchMock = vi.fn(async () =>
      Response.json({
        candidates: [{ content: { parts: [{ text: 'Gemini reply' }] } }],
      }),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      callGemini('key', [{ role: 'user', content: 'Hi' }], 'system prompt'),
    ).resolves.toBe('Gemini reply');

    const [, init] = fetchMock.mock.calls[0] as unknown as [
      string,
      RequestInit,
    ];
    const body = JSON.parse(init.body as string);
    expect(body.system_instruction.parts[0].text).toBe('system prompt');
    expect(body.contents[0]).toEqual({
      role: 'user',
      parts: [{ text: 'Hi' }],
    });
  });

  it('throws a typed rate-limit error for upstream 429 responses', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(null, { status: 429 })),
    );

    await expect(
      callClaude('key', [{ role: 'user', content: 'Hi' }], 'system prompt'),
    ).rejects.toMatchObject(new HttpError(429, 'rate_limit'));
  });

  it('requires provider API keys', async () => {
    await expect(callOpenAI('', [], 'system prompt')).rejects.toThrow(
      'Missing OpenAI API key',
    );
  });
});
