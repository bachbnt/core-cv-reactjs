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
}

export function parseProfile(data: Record<string, any>): Profile {
  return {
    avatar: data.avatar ?? '',
    covers: data.covers ?? [],
    cv: data.cv ?? '',
    name: data.name ?? '',
    specialties: data.specialties ?? [],
    summary: data.summary ?? '',
  };
}
