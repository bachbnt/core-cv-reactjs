import { CardProps } from '@material-ui/core';
import { Experience } from 'src/models/experience';

export type Props = {
  item: Experience;
} & CardProps;
