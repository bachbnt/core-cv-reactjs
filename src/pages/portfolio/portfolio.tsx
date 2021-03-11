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
      name: "Bach's Portfolio",
      tech: 'ReactJS',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Yoga Lasyn',
      tech: 'Flutter',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Weather',
      tech: 'Flutter',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'P&C Dashboard',
      tech: 'React Native',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Beli Coffee',
      tech: 'Android',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
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
