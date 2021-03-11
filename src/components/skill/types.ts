import { IconType } from 'react-icons';

export interface SkillItem {
  name: string;
  icon: IconType;
}

export default interface Props {
  items: SkillItem[];
}
