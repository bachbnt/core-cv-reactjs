import { CardProps } from '@material-ui/core';
import { Service } from 'src/models/service';

export type Props = {
  item: Service;
} & CardProps;
