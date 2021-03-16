import { IconType } from 'react-icons';

export interface SocialItem {
  text: string;
  icon: IconType;
  path: string;
}

export default interface Props {
  items: SocialItem[];
}
