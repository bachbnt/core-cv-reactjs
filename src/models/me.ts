import { Work } from './work';
import { Contact } from './contact';
import { Project } from './project';
import { Service } from './service';
import { Technology } from './technology';

export interface Me {
  name: string;
  jobs: string[];
  avatar: string;
  covers: string[];
  description: string;
  cv: string;
  universities: Work[];
  companies: Work[];
  technologies: Technology[];
  projects: Project[];
  services: Service[];
  contacts: Contact[];
  socials: Contact[];
}

export function fromRawToMe(raw: any): Me {
  return {
    name: raw.get('name'),
    jobs: raw.get('jobs'),
    avatar: raw.get('avatar'),
    covers: raw.get('covers'),
    description: raw.get('description'),
    cv: raw.get('cv'),
    universities: raw.get('universities'),
    companies: raw.get('companies'),
    technologies: raw.get('technologies'),
    projects: raw.get('projects'),
    services: raw.get('services'),
    contacts: raw.get('contacts'),
    socials: raw.get('socials'),
  };
}
