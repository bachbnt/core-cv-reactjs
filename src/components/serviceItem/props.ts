import { CardProps } from '@material-ui/core';
import { Service } from '@models/service';

type Props = {
  item: Service;
} & CardProps;

export default Props;
