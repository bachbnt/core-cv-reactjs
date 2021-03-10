import useStyles from './styles';
import { Box, Avatar, Typography, List } from '@material-ui/core';
import Props from './types';

const Profile = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} src={item.avatar} />
      <Box className={classes.info}>
        <Typography variant='h5'>{item.description}</Typography>
        <List className={classes.list}>
          {item.skills.map((item) => (
            <Typography variant='h5'>{`- ${item}`}</Typography>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Profile;
