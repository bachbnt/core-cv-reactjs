import { Route } from '../../routes/types';

export default interface Props {
  open: boolean;
  onClose: () => void;
  currentRoute: Route;
}
