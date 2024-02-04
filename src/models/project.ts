export interface Project {
  id: string;
  cover: string;
  covers: string[];
  coverVisible: boolean;
  description: string;
  descriptionVisible: boolean;
  index: number;
  name: string;
  nameVisible: boolean;
  refs: string[];
  technology: string;
  technologyVisible: boolean;
  type: ProjectType;
  visible: boolean;
}

export enum ProjectType {
  COMPANY = 'company',
  FREELANCE = 'freelance',
  PERSONAL = 'personal',
}
