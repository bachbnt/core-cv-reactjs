/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import { z } from 'zod';

const configImageSchema = z.object({
  comingSoon: z.string().default(Constant.DEFAULT_COMING_SOON_IMAGE),
  error404: z.string().default(Constant.DEFAULT_ERROR_404_IMAGE),
});

export const configSchema = z.object({
  aboutEnable: z.boolean().default(false),
  aboutVisible: z.boolean().default(false),
  certificateEnable: z.boolean().default(false),
  certificateVisible: z.boolean().default(false),
  appIcon: z.string().default(Constant.DEFAULT_APP_ICON),
  appTitle: z.string().default(Constant.DEFAULT_APP_TITLE ?? ''),
  blogEnable: z.boolean().default(false),
  blogVisible: z.boolean().default(false),
  contactEnable: z.boolean().default(false),
  contactVisible: z.boolean().default(false),
  cvEnable: z.boolean().default(false),
  cvVisible: z.boolean().default(false),
  homeEnable: z.boolean().default(false),
  homeVisible: z.boolean().default(false),
  projectEnable: z.boolean().default(false),
  projectVisible: z.boolean().default(false),
  resumeEnable: z.boolean().default(false),
  resumeVisible: z.boolean().default(false),
  serviceEnable: z.boolean().default(false),
  serviceVisible: z.boolean().default(false),
  image: configImageSchema.default({
    comingSoon: Constant.DEFAULT_COMING_SOON_IMAGE,
    error404: Constant.DEFAULT_ERROR_404_IMAGE,
  }),
  language: z.string().default(Constant.DEFAULT_LANGUAGE),
  paymentEnable: z.boolean().default(false),
  paymentVisible: z.boolean().default(false),
  chatEnable: z.boolean().default(false),
  chatVisible: z.boolean().default(false),
  chatProvider: z.string().default('gemini'),
});

export type Config = z.infer<typeof configSchema>;

export const parseConfig = (data: unknown): Config =>
  configSchema.parse(data ?? {});
