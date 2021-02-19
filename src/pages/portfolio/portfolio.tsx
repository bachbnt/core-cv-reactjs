import useStyles from './styles';
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
    <>
      <NavBar />
      <Project items={items} />
    </>
  );
};

export default Portfolio;
