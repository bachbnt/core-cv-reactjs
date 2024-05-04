import { CardProps } from '@material-ui/core';
import { Experience } from '@models/experience';

type Props = {
  item: Experience;
  onItemClick?: (item: Experience) => void;
} & CardProps;

export default Props;
