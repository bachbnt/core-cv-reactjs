import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Profile from '../../components/profile/profile';
import { ProfileItem } from '../../components/profile/types';
import { routeData } from '../../routes/routeData';
import {
  SiAndroid,
  SiApple,
  SiFlutter,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { SkillItem } from '../../components/skill/types';
import Skill from '../../components/skill/skill';

const About = () => {
  const classes = useStyles();
  const item: ProfileItem = {
    avatar: 'https://avatars.githubusercontent.com/u/51219305?v=4',
    description:
      'My background is the Master in Engineering Physics. Because of the passion for coding, I decided to chose Software Engineer as my profession. With knowledge and skills of technology, I want to become a Project Manager in the future.',
  };

  const items: SkillItem[] = [
    {
      name: 'Android',
      icon: SiAndroid,
    },
    // {
    //   name: 'iOS',
    //   icon: SiApple,
    // },
    {
      name: 'Flutter',
      icon: SiFlutter,
    },
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'ReactJS',
      icon: SiReact,
    },
    // {
    //   name: 'NodeJS',
    //   icon: SiNodeDotJs,
    // },
    // {
    //   name: 'MongoDB',
    //   icon: SiMongodb,
    // },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
  ];

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.about} />
      <Profile item={item} />
      <Skill items={items} />
    </Box>
  );
};

export default About;
