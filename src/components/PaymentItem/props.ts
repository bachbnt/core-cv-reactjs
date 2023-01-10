import { CardProps } from '@material-ui/core';
import { Payment } from '@models/payment';

type Props = {
  item: Payment;
} & CardProps;

export default Props;
