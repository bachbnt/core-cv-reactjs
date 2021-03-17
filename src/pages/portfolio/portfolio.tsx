import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Project from '../../components/project/project';
import { ProjectItem } from '../../components/project/types';
import { routeData } from '../../routes/routeData';

const Portfolio = () => {
  const classes = useStyles();
  const items: ProjectItem[] = [
    {
      name: "Bach's CV",
      tech: 'ReactJS',
      cover:
        'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
      description: 'Personal website',
    },
    {
      name: 'Yoga Lasyn',
      tech: 'Flutter',
      cover:
        'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
      description: ' Yoga video watching application',
    },
    {
      name: 'Weather Live',
      tech: 'Flutter',
      cover:
        'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
      description: 'Weather forecast application',
    },
    {
      name: 'P&C Dashboard',
      tech: 'React Native',
      cover:
        'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
      description: 'Internal social network application',
    },
    {
      name: 'Beli Coffee',
      tech: 'Android',
      cover:
        'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
      description: 'Coffee ordering application',
    },
  ];

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.portfolio} />
      <Project items={items} />
    </Box>
  );
};

export default Portfolio;
