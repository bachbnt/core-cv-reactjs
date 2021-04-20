import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import clsx from 'clsx';
import Typography from '../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Card = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <MuiCard classes={{ root: classes.root }} className={classes.background}>
      <CardActionArea>
        <CardMedia component='img' image={item.cover} />
        <CardContent>
          <Typography
            className={clsx(classes.primary, classes.bold)}
            variant='h5'>
            {item.name}
          </Typography>
          <Typography className={classes.bold} variant='subtitle1'>
            {item.technology}
          </Typography>
          <Typography variant='body2'>{item.summary}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
