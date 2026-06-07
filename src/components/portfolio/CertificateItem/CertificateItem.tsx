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

const CertificateItem = (props: Props) => {
  const classes = useStyles();
  const { item, onOpenDialog } = props;

  const { data: config } = useConfigQuery();
  const image = config?.image;

  return item.visible ? (
    <Card className={classes.card}>
      <CardActionArea component='span' onClick={onOpenDialog}>
        {item.imageVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.image || image?.comingSoon}
            loading='lazy'
          />
        )}
        <CardContent>
          {item.nameVisible && (
            <Typography color='primary' variant='h6'>
              {item.name}
            </Typography>
          )}
          {item.issuerVisible && (
            <Typography variant='body2'>{item.issuer}</Typography>
          )}
          {item.timeVisible && (
            <Box sx={{ mt: 1 }}>
              <Typography variant='caption'>{item.time}</Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null;
};

export default CertificateItem;
