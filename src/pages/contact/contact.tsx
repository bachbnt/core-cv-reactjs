import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Social from '../../components/social/social';
import { Facebook, GitHub, Mail, Smartphone } from '@material-ui/icons';
import { SocialItem } from '../../components/social/types';

const Contact = () => {
  const classes = useStyles();
  const items: SocialItem[] = [
    {
      text: 'tonbach18598',
      icon: Facebook,
      path: 'https://www.facebook.com/tonbach18598/',
    },
    {
      text: 'tonbach18598',
      icon: GitHub,
      path: 'https://github.com/tonbach18598',
    },
    {
      text: 'tonbach18598@gmail.com',
      icon: Mail,
      path: 'mailto:tonbach18598@gmail.com',
    },
    {
      text: '0384560623',
      icon: Smartphone,
      path: 'tel:0384560623',
    },
  ];

  return (
    <Box className={classes.container}>
      <NavBar />
      <Social items={items} />
    </Box>
  );
};

export default Contact;
