/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Typography } from '@components';
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import type { ReactElement } from 'react';

type Props = {
  data: Education[] | Experience[];
  renderItem: (item: Education | Experience) => ReactElement;
};

const Timeline = (props: Props) => {
  const { data, renderItem } = props;

  return (
    <MuiTimeline position='alternate'>
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
        ) : null,
      )}
    </MuiTimeline>
  );
};

export default Timeline;
