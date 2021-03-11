import useStyles from './styles';
import Props from './types';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const Project = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Box className={classes.container}>
      <Grid
        className={classes.list}
        container
        justify='center'
        alignItems='center'>
        {items.map((item, index) => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia component='img' image={item.cover} />
                <CardContent>
                  <Typography className={classes.title} variant='h5'>
                    {item.name}
                  </Typography>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    {item.tech}
                  </Typography>
                  <Typography variant='body2'>{item.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
