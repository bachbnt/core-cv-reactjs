import { CardProps } from '@material-ui/core';
import { Payment } from 'src/models/payment';

type Props = {
  item: Payment;
} & CardProps;

export default Props;
