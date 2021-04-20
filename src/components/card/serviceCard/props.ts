import { CardProps } from '@material-ui/core';
import { Service } from '../../../models/service';

export type Props = {
  item: Service;
} & CardProps;
