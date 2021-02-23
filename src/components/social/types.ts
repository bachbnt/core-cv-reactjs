import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

export interface SocialItem {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  path: string;
}

export default interface Props {
  items: SocialItem[];
}
