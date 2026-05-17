/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import { z } from 'zod';

const profileCoverSchema = z.object({
  index: z.number().default(0),
  url: z.string().default(''),
  visible: z.boolean().default(true),
});

const profileSpecialtySchema = z.object({
  index: z.number().default(0),
  name: z.string().default(''),
  visible: z.boolean().default(true),
});

export const profileSchema = z.object({
  avatar: z.string().default(''),
  covers: z.array(profileCoverSchema).default([]),
  cv: z.string().default(''),
  name: z.string().default(''),
  specialties: z.array(profileSpecialtySchema).default([]),
  summary: z.string().default(''),
});

export type Profile = z.infer<typeof profileSchema>;
export type ProfileCover = z.infer<typeof profileCoverSchema>;
export type ProfileSpecialty = z.infer<typeof profileSpecialtySchema>;

export const parseProfile = (data: unknown): Profile => {
  const parsed = profileSchema.parse(data ?? {});
  return {
    ...parsed,
    covers: sortBy(filter(parsed.covers, { visible: true }), Constant.SORT_KEY),
    specialties: sortBy(
      filter(parsed.specialties, { visible: true }),
      Constant.SORT_KEY,
    ),
  };
};
