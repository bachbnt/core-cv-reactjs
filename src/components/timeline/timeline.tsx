import { Typography, Paper } from '@material-ui/core';
import {
  Timeline as MaterialTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';
import { Props } from './props';
import useStyles from './styles';

const Timeline = (props: Props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <MaterialTimeline align='alternate'>
      {items.map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant='h6'>{item.time}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant='h5'>{item.title.toUpperCase()}</Typography>
              <Typography variant='subtitle1'>{item.subtitle}</Typography>
              <Typography variant='body2'>{item.content} </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MaterialTimeline>
  );
};

export default Timeline;
