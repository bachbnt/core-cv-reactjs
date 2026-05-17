/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { parseProfile, profileSchema } from '@models/profile';
import { describe, expect, it } from 'vitest';

describe('profileSchema', () => {
  it('fills default profile fields', () => {
    const result = parseProfile({});

    expect(result.name).toBe('');
    expect(result.avatar).toBe('');
    expect(result.covers).toEqual([]);
    expect(result.specialties).toEqual([]);
  });

  it('keeps only visible covers and specialties sorted by index', () => {
    const result = parseProfile({
      covers: [
        { index: 2, url: 'second', visible: true },
        { index: 1, url: 'hidden', visible: false },
        { index: 0, url: 'first', visible: true },
      ],
      specialties: [
        { index: 3, name: 'Later', visible: true },
        { index: 1, name: 'Hidden', visible: false },
        { index: 0, name: 'First', visible: true },
      ],
    });

    expect(result.covers.map((cover) => cover.url)).toEqual([
      'first',
      'second',
    ]);
    expect(result.specialties.map((specialty) => specialty.name)).toEqual([
      'First',
      'Later',
    ]);
  });

  it('rejects malformed profile data', () => {
    const result = profileSchema.safeParse({ covers: 'not-an-array' });

    expect(result.success).toBe(false);
  });
});
