import useStyles from './styles';
import { Box, Avatar, Typography, List, SvgIcon } from '@material-ui/core';
import Props from './types';

const Profile = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} src={item.avatar} />
      <Box className={classes.info}>
        <Typography variant='h6'>{item.description}</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
