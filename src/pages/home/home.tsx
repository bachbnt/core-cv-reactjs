import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Intro from '../../components/intro/intro';

const Home = () => {
  const classes = useStyles();
  const data = {
    name: 'Bach Bui',
    job: 'React Developer',
    quote:
      'Voici une première petite séquence de rédaction sur la description dpersonnages célèbres quon peut facilement proposer dès le CE2 ainsi que des productions délèves réalisés grâce au...',
    image:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep.jpg',
  };

  return (
    <Box className={classes.container}>
      <NavBar />
      <Intro data={data} />
    </Box>
  );
};

export default Home;
