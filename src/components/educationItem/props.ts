import { CardProps } from '@material-ui/core';
import { Education } from 'src/models/education';

export type Props = {
  item: Education;
} & CardProps;
