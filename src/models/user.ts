import { Contact } from './contact';
import { Education } from './education';
import { Experience } from './experience';
import { Profile } from './profile';
import { Project } from './project';
import { Service } from './service';
import { Skill } from './skill';

export interface User {
  contact: Contact[];
  education: Education[];
  experience: Experience[];
  profile: Profile;
  project: Project[];
  service: Service[];
  skill: Skill[];
}
