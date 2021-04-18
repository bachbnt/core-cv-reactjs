import { UIPage } from '../../models/ui';

export interface Props {
  open: boolean;
  onClose: () => void;
  pages: UIPage[];
}
