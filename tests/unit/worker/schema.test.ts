/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { describe, expect, it } from 'vitest';
import {
  chatProviderSchema,
  chatRequestSchema,
} from '../../../worker/src/schema';

describe('worker chat schema', () => {
  it('accepts supported providers', () => {
    expect(chatProviderSchema.safeParse('gemini').success).toBe(true);
    expect(chatProviderSchema.safeParse('openai').success).toBe(true);
    expect(chatProviderSchema.safeParse('claude').success).toBe(true);
  });

  it('rejects unsupported providers and empty message lists', () => {
    expect(
      chatRequestSchema.safeParse({
        provider: 'ollama',
        messages: [],
        systemPrompt: 'system',
      }).success,
    ).toBe(false);
  });

  it('rejects oversized message content and system prompts', () => {
    const result = chatRequestSchema.safeParse({
      provider: 'openai',
      messages: [{ role: 'user', content: 'x'.repeat(2001) }],
      systemPrompt: 'x'.repeat(8001),
    });

    expect(result.success).toBe(false);
  });
});
