import { CardProps } from '@material-ui/core';
import { Experience } from 'src/models/experience';

type Props = {
  item: Experience;
} & CardProps;

export default Props;
