/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Localization } from '@locales/i18n';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, { message: Localization.page7_field1_error }),
  message: z.string().min(1, { message: Localization.page7_field2_error }),
});

export type FormValues = z.infer<typeof contactSchema>;
