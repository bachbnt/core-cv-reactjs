import { Work } from './work';
import { Contact } from './contact';
import { Project } from './project';
import { Service } from './service';
import { Technology } from './technology';

export interface User {
  username: string;
  job: string;
  summary: string;
  avatar: string;
  cover: string;
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
