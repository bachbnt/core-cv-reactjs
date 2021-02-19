import useStyles from './styles';
import Props from './types';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const Project = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Grid
      className={classes.container}
      container
      justify='center'
      alignItems='center'>
      {items.map((item, index) => (
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component='img' alt={`${index}`} image={item.image} />
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  {item.name}
                </Typography>
                <Typography variant='body2'>{item.desc}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Project;
