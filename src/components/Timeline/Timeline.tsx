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
import Props from './props';

const Timeline = (props: Props) => {
  const { data, renderItem } = props;

  return (
    <MuiTimeline align='alternate'>
      {data.map((item, index) =>
        item.visible ? (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent>
              <Typography variant='subtitle1'>{item.time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index !== data?.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{renderItem(item)}</TimelineContent>
          </TimelineItem>
        ) : null
      )}
    </MuiTimeline>
  );
};

export default Timeline;
