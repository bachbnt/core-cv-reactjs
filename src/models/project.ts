export interface Project {
  cover: string;
  coverVisible: boolean;
  description: string;
  descriptionVisible: boolean;
  index: number;
  name: string;
  nameVisible: boolean;
  technology: string;
  technologyVisible: boolean;
  type: ProjectType;
  visible: boolean;
}

export enum ProjectType {
  COMPANY = 'company',
  PERSONAL = 'personal',
}
