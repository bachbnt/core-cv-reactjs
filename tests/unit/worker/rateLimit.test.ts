/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { enforceRateLimit } from '../../../worker/src/rateLimit';

const createKv = (initial: Record<string, string> = {}) => {
  const store = new Map(Object.entries(initial));
  return {
    get: vi.fn(async (key: string) => store.get(key) ?? null),
    put: vi.fn(async (key: string, value: string) => {
      store.set(key, value);
    }),
    store,
  };
};

describe('worker rate limit', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('skips rate limiting when KV binding is missing', async () => {
    await expect(enforceRateLimit({}, '127.0.0.1')).resolves.toBeUndefined();
  });

  it('increments minute and day buckets', async () => {
    vi.spyOn(Date, 'now').mockReturnValue(120_000);
    const kv = createKv();

    await enforceRateLimit(
      { CHAT_RATE_LIMIT: kv as any, RATE_LIMIT_PER_MINUTE: '2' },
      '127.0.0.1',
    );

    expect(kv.put).toHaveBeenCalledWith('m:127.0.0.1:2', '1', {
      expirationTtl: 120,
    });
    expect(kv.put).toHaveBeenCalledWith('d:127.0.0.1:0', '1', {
      expirationTtl: 90_000,
    });
  });

  it('rejects requests over the per-minute limit', async () => {
    vi.spyOn(Date, 'now').mockReturnValue(120_000);
    const kv = createKv({ 'm:127.0.0.1:2': '2', 'd:127.0.0.1:0': '1' });

    await expect(
      enforceRateLimit(
        { CHAT_RATE_LIMIT: kv as any, RATE_LIMIT_PER_MINUTE: '2' },
        '127.0.0.1',
      ),
    ).rejects.toThrow('rate_limit_minute');
  });

  it('rejects requests over the per-day limit', async () => {
    vi.spyOn(Date, 'now').mockReturnValue(120_000);
    const kv = createKv({ 'm:127.0.0.1:2': '0', 'd:127.0.0.1:0': '3' });

    await expect(
      enforceRateLimit(
        { CHAT_RATE_LIMIT: kv as any, RATE_LIMIT_PER_DAY: '3' },
        '127.0.0.1',
      ),
    ).rejects.toThrow('rate_limit_day');
  });
});
