import { Paper } from '@material-ui/core';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';
import clsx from 'clsx';
import Typography from '../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Timeline = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <MuiTimeline align='alternate'>
      {items.reverse().map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant='h6'>{item.time}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper className={classes.background} elevation={3}>
              <Typography
                className={clsx(classes.primary, classes.bold)}
                variant='h6'>
                {item.name.toUpperCase()}
              </Typography>
              <Typography className={classes.bold} variant='subtitle1'>
                {item.specialty}
              </Typography>
              <Typography variant='body2'>{item.description} </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;
