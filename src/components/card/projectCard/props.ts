import { CardProps } from '@material-ui/core';
import { Project } from '../../../models/project';

export type Props = {
  item: Project;
} & CardProps;
