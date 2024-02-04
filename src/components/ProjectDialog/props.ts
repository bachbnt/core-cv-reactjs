import { CardProps } from '@material-ui/core';
import { Project } from '@models/project';

type Props = {
  item: Project;
  openDialog: boolean;
  onCloseDialog: () => void;
} & CardProps;

export default Props;
