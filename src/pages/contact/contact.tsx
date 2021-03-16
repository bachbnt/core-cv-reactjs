import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Social from '../../components/social/social';
import { SocialItem } from '../../components/social/types';
import { routeData } from '../../routes/routeData';
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si';
import { MdMail, MdPhoneAndroid } from 'react-icons/md';

const Contact = () => {
  const classes = useStyles();
  const items: SocialItem[] = [
    {
      text: 'bachbnt@gmail.com',
      icon: MdMail,
      path: 'mailto:bachbnt@gmail.com',
    },
    {
      text: '0384560623',
      icon: MdPhoneAndroid,
      path: 'tel:0384560623',
    },
    {
      text: 'bachbnt',
      icon: SiFacebook,
      path: 'https://www.facebook.com/bachbnt',
    },
    {
      text: 'bachbnt',
      icon: SiLinkedin,
      path: 'https://www.linkedin.com/in/bachbnt/',
    },
    {
      text: 'bachbnt',
      icon: SiGithub,
      path: 'https://github.com/bachbnt',
    },
  ];

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.contact} />
      <Social items={items} />
    </Box>
  );
};

export default Contact;
