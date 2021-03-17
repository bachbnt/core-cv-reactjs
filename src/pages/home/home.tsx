import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Intro from '../../components/intro/intro';
import { IntroItem } from '../../components/intro/types';
import { routeData } from '../../routes/routeData';

const Home = () => {
  const classes = useStyles();
  const item: IntroItem = {
    name: 'Bach Bui',
    job: 'App Developer | Web Developer',
    description:
      "Hello, World! I'm a programmer and have a passion for cross-platform programming ...",
  };

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.home} />
      <Intro item={item} />
    </Box>
  );
};

export default Home;
