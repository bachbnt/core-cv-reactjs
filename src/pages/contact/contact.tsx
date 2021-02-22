import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Social from '../../components/social/social';
import { Facebook, GitHub, Mail, Smartphone } from '@material-ui/icons';

const Contact = () => {
  const classes = useStyles();
  const items = [
    {
      text: '/tonbach18598',
      icon: Facebook,
      path: 'https://www.facebook.com/tonbach18598/',
    },
    {
      text: '/tonbach18598',
      icon: GitHub,
      path: 'https://github.com/tonbach18598',
    },
    {
      text: 'tonbach18598',
      icon: Mail,
      path: 'https://www.facebook.com/',
    },
    {
      text: '0384560623',
      icon: Smartphone,
      path: '0384560623',
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
