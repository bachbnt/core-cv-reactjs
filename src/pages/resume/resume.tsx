import useStyles from './styles';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar/navbar';
import Education from '../../components/education/education';
import Experience from '../../components/experience/experience';
import { EducationItem } from '../../components/education/types';
import { ExperienceItem } from '../../components/experience/types';
import { routeData } from '../../routes/routeData';

const Resume = () => {
  const classes = useStyles();
  const items1: EducationItem[] = [
    {
      time: 'Sep 2016 - Sep 2020',
      degree: 'Bachelor of Physics',
      school: 'University of Science',
    },
    {
      time: 'Dec 2020 - Dec 2022',
      degree: 'Master of Engineering Physics ',
      school: 'University of Science',
    },
  ];
  const items2: ExperienceItem[] = [
    {
      time: 'Mar 2020 - Present',
      job: 'Mobile Developer',
      company: 'DevBlock Vietnam',
      description: 'Developing mobile applications',
    },
    {
      time: 'Apr 2020 - Present',
      job: 'Flutter Developer',
      company: 'Freelancer',
      description: 'Developing mobile applications',
    },
  ];

  return (
    <Box className={classes.container}>
      <Navbar currentRoute={routeData.resume} />
      <Education items={items1.reverse()} />
      <Experience items={items2.reverse()} />
    </Box>
  );
};

export default Resume;
