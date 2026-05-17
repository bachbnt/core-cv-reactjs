/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

export interface RateLimitEnv {
  CHAT_RATE_LIMIT?: KVNamespace;
  RATE_LIMIT_PER_DAY?: string;
  RATE_LIMIT_PER_MINUTE?: string;
}

const parseLimit = (raw: string | undefined, fallback: number): number => {
  const value = Number.parseInt(raw ?? '', 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

export const enforceRateLimit = async (
  env: RateLimitEnv,
  ip: string,
): Promise<void> => {
  if (!env.CHAT_RATE_LIMIT) return;

  const perMinute = parseLimit(env.RATE_LIMIT_PER_MINUTE, 10);
  const perDay = parseLimit(env.RATE_LIMIT_PER_DAY, 200);
  const now = Date.now();
  const minuteBucket = Math.floor(now / 60_000);
  const dayBucket = Math.floor(now / 86_400_000);

  const minuteKey = `m:${ip}:${minuteBucket}`;
  const dayKey = `d:${ip}:${dayBucket}`;

  const [minuteRaw, dayRaw] = await Promise.all([
    env.CHAT_RATE_LIMIT.get(minuteKey),
    env.CHAT_RATE_LIMIT.get(dayKey),
  ]);

  const minuteCount = Number.parseInt(minuteRaw ?? '0', 10);
  const dayCount = Number.parseInt(dayRaw ?? '0', 10);

  if (minuteCount >= perMinute) {
    throw new Error('rate_limit_minute');
  }
  if (dayCount >= perDay) {
    throw new Error('rate_limit_day');
  }

  await Promise.all([
    env.CHAT_RATE_LIMIT.put(minuteKey, String(minuteCount + 1), {
      expirationTtl: 120,
    }),
    env.CHAT_RATE_LIMIT.put(dayKey, String(dayCount + 1), {
      expirationTtl: 90_000,
    }),
  ]);
};
