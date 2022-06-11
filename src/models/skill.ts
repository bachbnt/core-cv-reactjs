export interface Skill {
  enable: boolean;
  index: number;
  name: string;
  nameVisible: boolean;
  type: SkillType;
  url: string;
  visible: boolean;
}

export enum SkillType {
  FRAMEWORK = 'framework',
  LANGUAGE = 'language',
  TOOL = 'tool',
}
