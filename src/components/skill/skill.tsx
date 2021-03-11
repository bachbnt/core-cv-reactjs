import useStyles from './styles';
import Props from './types';
import { Box, Button, Grid, Typography } from '@material-ui/core';

const Skill = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Box className={classes.container}>
      <Grid
        className={classes.list}
        container
        justify='center'
        alignItems='center'>
        {items.map((item) => (
          <Grid item>
            <Box className={classes.row}>
              <item.icon className={classes.icon} />
              <Typography className={classes.text} variant='h5'>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
