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
    job: 'Developer',
    description:
      'Voici une première petite séquence de rédaction sur la description dpersonnages célèbres quon peut facilement proposer dès le CE2 ainsi que des productions délèves réalisés grâce au...',
  };

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.home} />
      <Intro item={item} />
    </Box>
  );
};

export default Home;
