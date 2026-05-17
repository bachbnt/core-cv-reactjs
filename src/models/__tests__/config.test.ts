/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import { describe, expect, it } from 'vitest';
import { configSchema, parseConfig } from '../config';

describe('configSchema', () => {
  it('fills sensible defaults when Firestore returns an empty document', () => {
    const result = parseConfig({});
    expect(result.aboutEnable).toBe(false);
    expect(result.aboutVisible).toBe(false);
    expect(result.chatProvider).toBe('gemini');
    expect(result.language).toBe(Constant.DEFAULT_LANGUAGE);
    expect(result.image.comingSoon).toBe(Constant.DEFAULT_COMING_SOON_IMAGE);
    expect(result.image.error404).toBe(Constant.DEFAULT_ERROR_404_IMAGE);
  });

  it('preserves provided values', () => {
    const result = parseConfig({
      aboutEnable: true,
      chatProvider: 'claude',
      language: 'vi',
    });
    expect(result.aboutEnable).toBe(true);
    expect(result.chatProvider).toBe('claude');
    expect(result.language).toBe('vi');
  });

  it('rejects malformed types', () => {
    const result = configSchema.safeParse({ aboutEnable: 'yes' });
    expect(result.success).toBe(false);
  });
});
