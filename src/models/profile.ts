import Constant from '@core/constants';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';

export interface Profile {
  avatar: string;
  covers: ProfileCover[];
  cv: string;
  name: string;
  specialties: ProfileSpecialty[];
  summary: string;
}

export interface ProfileCover {
  index: number;
  url: string;
  visible: boolean;
}

export interface ProfileSpecialty {
  index: number;
  name: string;
  visible: boolean;
}

export function parseProfile(data: Record<string, any>): Profile {
  return {
    avatar: data.avatar ?? '',
    covers:
      sortBy(filter(data.covers, { visible: true }), Constant.SORT_KEY) ?? [],
    cv: data.cv ?? '',
    name: data.name ?? '',
    specialties:
      sortBy(filter(data.specialties, { visible: true }), Constant.SORT_KEY) ??
      [],
    summary: data.summary ?? '',
  };
}
