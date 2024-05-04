import { CardProps } from '@material-ui/core';
import { Project } from '@models/project';

type Props = {
  item: Project;
  onItemClick?: (item: Project) => void;
  onOpenDialog: () => void;
} & CardProps;

export default Props;
