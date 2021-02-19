import useStyles from './styles';
import NavBar from '../../components/navBar/navBar';
import { Box } from '@material-ui/core';
import Education from '../../components/education/education';
import WorkExperience from '../../components/workExperience/workExperience';

const Resume = () => {
  const classes = useStyles();
  const items1 = [
    {
      time: '2020-Present',
      degree: 'Bachelor',
      school: 'HCMUS',
    },
    {
      time: '2020-Present',
      degree: 'Bachelor',
      school: 'HCMUS',
    },
    {
      time: '2020-Present',
      degree: 'Bachelor',
      school: 'HCMUS',
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
    <>
      <NavBar />
      <Box component='div'>
        <Education items={items1} />
        <WorkExperience items={items2} />
      </Box>
    </>
  );
};

export default Resume;
