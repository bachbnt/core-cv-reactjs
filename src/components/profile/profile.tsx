import useStyles from './styles';
import { Box, Avatar, Typography } from '@material-ui/core';
import Props from './types';

const Profile = (props: Props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} src={data.avatar} alt='Bach Bui' />
      <Typography className={classes.info} variant='h5'>
        {data.description}
      </Typography>
    </Box>
  );
};

export default Profile;
