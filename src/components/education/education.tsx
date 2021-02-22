import useStyles from './styles';
import Props from './types';
import { Box, Typography, Paper } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';

const Education = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant='h3' align='center'>
        Education
      </Typography>
      <Timeline align='alternate'>
        {items.map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className={classes.text} variant='h5'>
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
                  {item.school.toUpperCase()}
                </Typography>
                <Typography variant='h6'>{item.degree}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education;
