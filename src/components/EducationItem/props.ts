import { CardProps } from '@material-ui/core';
import { Education } from '@models/education';

type Props = {
  item: Education;
  onItemClick?: (item: Education) => void;
} & CardProps;

export default Props;
