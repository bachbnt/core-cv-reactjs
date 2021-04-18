import { CardProps } from '@material-ui/core';
import { UICard } from '../../models/ui';

export type Props = {
  item: UICard;
} & CardProps;
