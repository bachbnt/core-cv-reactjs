import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';
import _ from 'lodash';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Timeline = (props: Props) => {
  const classes = useStyles();
  const { data, renderItem } = props;

  return (
    <MuiTimeline align='alternate'>
      {(_.sortBy(data, 'index').reverse() as any[]).map((item, index) =>
        item.visible ? (
          <TimelineItem key={`${item.name} ${item.index}`}>
            <TimelineOppositeContent>
              <Typography variant='subtitle1'>{item.time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index !== _.filter(data, { visible: true }).length - 1 && (
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
