/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

export const queryKeys = {
  config: ['config'] as const,
  cv: ['cv'] as const,
  user: ['user'] as const,
  localization: (lang: string) => ['localization', lang] as const,
};
