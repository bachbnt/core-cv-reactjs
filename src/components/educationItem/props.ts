import { CardProps } from '@material-ui/core';
import { Education } from 'src/models/education';

type Props = {
  item: Education;
} & CardProps;

export default Props;
