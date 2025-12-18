import { CardProps } from '@mui/material';
import { Experience } from '@models/experience';

type Props = {
  item: Experience;
  onItemClick?: (item: Experience) => void;
} & CardProps;

export default Props;
