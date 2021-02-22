import useStyles from './styles';
import Props from './types';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Facebook, GitHub, Web } from '@material-ui/icons';

const Social = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <Box className={classes.container}>
      <Grid
        className={classes.list}
        container
        justify='center'
        alignItems='center'>
        {items.map((item) => (
          <Grid item>
            <Box
              className={classes.button}
              component={Button}
              onClick={() => {
                handleClick(item.path);
              }}>
              <Facebook className={classes.iconButton} />
              <Typography className={classes.textButton} variant='h5'>
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Social;
