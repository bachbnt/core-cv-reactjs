import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Social from '../../components/social/social';
import { Facebook, GitHub, Mail, Smartphone } from '@material-ui/icons';
import { SocialItem } from '../../components/social/types';
import { routeData } from '../../routes/routeData';

const Contact = () => {
  const classes = useStyles();
  const items: SocialItem[] = [
    {
      text: 'bachbnt',
      icon: Facebook,
      path: 'https://www.facebook.com/bachbnt',
    },
    {
      text: 'bachbnt',
      icon: GitHub,
      path: 'https://github.com/bachbnt',
    },
    {
      text: 'bachbnt@gmail.com',
      icon: Mail,
      path: 'mailto:bachbnt@gmail.com',
    },
    {
      text: '0384560623',
      icon: Smartphone,
      path: 'tel:0384560623',
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
