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
}

export interface ProfileSpecialty {
  index: number;
  name: string;
}

export function parseProfile(data: any): Profile {
  return {
    avatar: data.get('avatar'),
    covers: data.get('covers'),
    cv: data.get('cv'),
    name: data.get('name'),
    specialties: data.get('specialties'),
    summary: data.get('summary'),
  };
}
