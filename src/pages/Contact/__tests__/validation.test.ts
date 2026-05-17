/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Localization } from '@locales/i18n';
import { describe, expect, it } from 'vitest';
import { contactSchema } from '../validation';

describe('contactSchema', () => {
  it('passes for fully populated input', () => {
    const result = contactSchema.safeParse({
      name: 'Bach',
      message: 'Hello',
    });
    expect(result.success).toBe(true);
  });

  it('rejects empty name with the localized error key', () => {
    const result = contactSchema.safeParse({ name: '', message: 'hi' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameIssue = result.error.issues.find((i) =>
        i.path.includes('name'),
      );
      expect(nameIssue?.message).toBe(Localization.page7_field1_error);
    }
  });

  it('rejects empty message with the localized error key', () => {
    const result = contactSchema.safeParse({ name: 'Bach', message: '' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const messageIssue = result.error.issues.find((i) =>
        i.path.includes('message'),
      );
      expect(messageIssue?.message).toBe(Localization.page7_field2_error);
    }
  });
});
