import { CardProps } from '@mui/material';
import { Education } from '@models/education';

type Props = {
  item: Education;
  onItemClick?: (item: Education) => void;
} & CardProps;

export default Props;
