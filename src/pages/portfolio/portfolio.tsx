import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Project from '../../components/project/project';
import { ProjectItem } from '../../components/project/types';

const Portfolio = () => {
  const classes = useStyles();
  const items: ProjectItem[] = [
    {
      name: "Bach's Portfolio",
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Yoga Lasyn',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Weather',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'PC Dashboard',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Beli Coffee',
      cover:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      description:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
  ];

  return (
    <Box className={classes.container}>
      <Navbar />
      <Project items={items} />
    </Box>
  );
};

export default Portfolio;
