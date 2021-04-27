import { Box, Paper } from '@material-ui/core';
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
      {items
        .slice()
        .reverse()
        .map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant='subtitle1'>{item.time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index !== items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={clsx(classes.background)} elevation={3}>
                <Typography
                  classes={{ root: classes.primary }}
                  className={clsx(classes.bold)}
                  variant='h6'>
                  {item.name.toUpperCase()}
                </Typography>
                <Typography className={clsx(classes.bold)} variant='subtitle1'>
                  {item.specialty}
                </Typography>
                {item.description && (
                  <Box mt={2}>
                    <Typography variant='body2'>{item.description} </Typography>
                  </Box>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
    </MuiTimeline>
  );
};

export default Timeline;
