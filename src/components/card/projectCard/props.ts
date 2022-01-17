import { CardProps } from '@material-ui/core';
import { Project } from 'src/models/project';

export type Props = {
  item: Project;
} & CardProps;
