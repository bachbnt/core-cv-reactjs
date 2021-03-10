import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Profile from '../../components/profile/profile';
import { ProfileItem } from '../../components/profile/types';

const About = () => {
  const classes = useStyles();
  const item: ProfileItem = {
    avatar:
      'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/123094390_1620822461423846_1868681946475942580_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=ZXHHjGYmh1wAX_bPmPz&_nc_ht=scontent.fsgn5-2.fna&oh=85769d76f8947b7d8726e563b58c2b51&oe=605AF8F8',
    description:
      'It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker including versionsof Lorem Ipsum.',
    skills: ['Android', 'Flutter', 'React Native', 'React JS'],
  };

  return (
    <Box className={classes.container}>
      <Navbar />
      <Profile item={item} />
    </Box>
  );
};

export default About;
