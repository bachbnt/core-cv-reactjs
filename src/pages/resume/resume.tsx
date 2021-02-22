import useStyles from './styles';
import { Box } from '@material-ui/core';
import NavBar from '../../components/navBar/navBar';
import Education from '../../components/education/education';
import WorkExperience from '../../components/workExperience/workExperience';

const Resume = () => {
  const classes = useStyles();
  const items1 = [
    {
      time: 'Sep 2016 - Sep 2020',
      degree: 'Bachelor',
      school: 'UNIVERSITY OF SCIENCE ',
    },
    {
      time: 'Dec 2020 - Dec 2022',
      degree: 'Master',
      school: 'UNIVERSITY OF SCIENCE ',
    },
  ];
  const items2 = [
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
    {
      time: '2020-Present',
      job: 'Developer',
      company: 'DevBlock',
      desc:
        'Description Description Description Description Description Description Description Description Description Description',
    },
  ];

  return (
    <Box className={classes.container}>
      <NavBar />
      <Education items={items1} />
      <WorkExperience items={items2} />
    </Box>
  );
};

export default Resume;
