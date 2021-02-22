import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Project from '../../components/project/project';

const Portfolio = () => {
  const classes = useStyles();
  const items = [
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
    {
      name: 'Project 1',
      image:
        'https://blog.taskpigeon.co/wp-content/uploads/2018/07/8-Online-Course-Providers-To-Train-Upskill-Your-Employees.jpg',
      desc:
        ' Description  Description  Description  Description  Description  Description  Description  Description  Description  Description ',
    },
  ];

  return (
    <Box className={classes.container}>
      <NavBar />
      <Project items={items} />
    </Box>
  );
};

export default Portfolio;
