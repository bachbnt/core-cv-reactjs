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

const Experience = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant='h3' align='center'>
        Work Experience
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
                  {item.company.toUpperCase()}
                </Typography>
                <Typography variant='h6'>{item.job}</Typography>
                <Typography>{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
