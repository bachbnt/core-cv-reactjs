import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Card = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <MuiCard classes={{ root: classes.root }}>
      <CardActionArea>
        <CardMedia image={item.image} />
        <CardContent>
          <Typography variant='h5'>{item.title}</Typography>
          <Typography variant='subtitle1'>{item.subtitle}</Typography>
          <Typography variant='body2'>{item.content}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
