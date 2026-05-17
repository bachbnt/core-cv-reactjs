/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

export interface Skill {
  id: string;
  index: number;
  name: string;
  nameVisible: boolean;
  type: SkillType;
  url: string;
  urlEnable: boolean;
  visible: boolean;
}

export enum SkillType {
  FRAMEWORK = 'framework',
  LANGUAGE = 'language',
  TOOL = 'tool',
}
