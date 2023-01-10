import { CardProps } from '@material-ui/core';
import { Education } from '@models/education';

type Props = {
  item: Education;
} & CardProps;

export default Props;
