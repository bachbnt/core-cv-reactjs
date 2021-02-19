import useStyles from './styles';
import Props from './types';
import { Typography, Paper } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';

const WorkExperience = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <>
      <Typography className={classes.time} variant='h4' align='center'>
        Work Experience
      </Typography>
      <Timeline align='alternate'>
        {items.map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className={classes.time} variant='h5'>
                {item.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index !== items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant='h5'>
                  {item.company.toUpperCase()}
                </Typography>
                <Typography variant='h6'>{item.job}</Typography>
                <Typography>{item.desc}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default WorkExperience;
