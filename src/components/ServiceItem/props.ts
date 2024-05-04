import { CardProps } from '@material-ui/core';
import { Service } from '@models/service';

type Props = {
  item: Service;
  onItemClick?: (item: Service) => void;
} & CardProps;

export default Props;
