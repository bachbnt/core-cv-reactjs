import useStyles from './styles';
import { Box, Avatar, Typography } from '@material-ui/core';
import Props from './types';

const Profile = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} src={item.avatar} component='div' />
      <Typography className={classes.info} variant='h5'>
        {item.description}
      </Typography>
    </Box>
  );
};

export default Profile;
