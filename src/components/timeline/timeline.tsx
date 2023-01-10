import { Typography } from '@components';
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab/';
import { filter } from 'lodash';
import Props from './props';
import useStyles from './styles';

const Timeline = (props: Props) => {
  const classes = useStyles();
  const { data, renderItem } = props;

  return (
    <MuiTimeline align="alternate">
      {data.map((item, index) =>
        item.visible ? (
          <TimelineItem key={`${item.name} ${item.index}`}>
            <TimelineOppositeContent>
              <Typography variant="subtitle1">{item.time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index !== filter(data, { visible: true }).length - 1 && (
                <TimelineConnector />
              )}
            </TimelineSeparator>
            <TimelineContent>{renderItem(item)}</TimelineContent>
          </TimelineItem>
        ) : (
          <div key={`${item.name} ${item.index}`} />
        )
      )}
    </MuiTimeline>
  );
};

export default Timeline;
