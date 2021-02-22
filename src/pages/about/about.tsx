import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Profile from '../../components/profile/profile';

const About = () => {
  const classes = useStyles();
  const data = {
    avatar:
      'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/123094390_1620822461423846_1868681946475942580_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=ZXHHjGYmh1wAX_bPmPz&_nc_ht=scontent.fsgn5-2.fna&oh=85769d76f8947b7d8726e563b58c2b51&oe=605AF8F8',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker including versionsof Lorem Ipsum.',
  };

  return (
    <Box className={classes.container}>
      <NavBar />
      <Profile data={data} />
    </Box>
  );
};

export default About;