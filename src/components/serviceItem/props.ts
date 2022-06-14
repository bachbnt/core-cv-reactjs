import { CardProps } from '@material-ui/core';
import { Service } from 'src/models/service';

type Props = {
  item: Service;
} & CardProps;

export default Props;
