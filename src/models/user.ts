import { Company } from './company';
import { Contact } from './contact';
import { Project } from './project';
import { Service } from './service';
import { Technology } from './technology';
import { University } from './university';

export interface User {
  username: string;
  job: string;
  summary: string;
  avatar: string;
  description: string;
  cv: string;
  universities: University[];
  companies: Company[];
  technologies: Technology[];
  projects: Project[];
  services: Service[];
  contacts: Contact[];
}
