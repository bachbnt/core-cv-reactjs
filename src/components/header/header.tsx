import useStyles from './styles';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justify='center'>
        <Avatar
          className={classes.avatar}
          src='https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep.jpg'
          alt='Bach Bui'
        />
      </Grid>
      <Typography className={classes.title} variant='h4'>
        Bach Bui
      </Typography>
      <Typography className={classes.subtitle} variant='h5'>
        Developer
      </Typography>
    </Box>
  );
};

export default Header;
