import { CardProps } from '@material-ui/core';
import { Project } from 'src/models/project';

type Props = {
  item: Project;
} & CardProps;

export default Props;
