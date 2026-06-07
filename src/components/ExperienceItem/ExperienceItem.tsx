/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Typography } from '@components';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useConfigQuery } from '@queries';
import Props from './props';
import useStyles from './styles';

const ExperienceItem = (props: Props) => {
  const classes = useStyles();
  const { item, onItemClick } = props;

  const { data: config } = useConfigQuery();
  const image = config?.image;

  return (
    <Card key={item.id} elevation={3} onClick={() => onItemClick?.(item)}>
      <CardActionArea>
        <CardContent>
          {item.nameVisible && (
            <Typography color='primary' variant='h6'>
              {item.name.toUpperCase()}
            </Typography>
          )}
          {item.positionVisible && (
            <Typography variant='subtitle1'>{item.position}</Typography>
          )}
          {item.responsibilityVisible && (
            <Box sx={{ mt: 2 }}>
              <Typography variant='body2'>{item.responsibility} </Typography>
            </Box>
          )}
        </CardContent>
        {item.imageVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.image || image?.comingSoon}
            loading='lazy'
          />
        )}
      </CardActionArea>
    </Card>
  );
};

export default ExperienceItem;
