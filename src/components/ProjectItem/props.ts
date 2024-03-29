import { CardProps } from '@material-ui/core';
import { Project } from '@models/project';

type Props = {
  item: Project;
  onOpenDialog: () => void;
} & CardProps;

export default Props;
