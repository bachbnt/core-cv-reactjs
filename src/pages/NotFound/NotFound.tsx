/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import useTracker from '@hooks/useTracker';
import { Grid } from '@mui/material';
import { useConfigQuery } from '@queries';
import useThemeStyles from '@themes/styles';

const NotFound = () => {
  const themeClasses = useThemeStyles();
  useTracker({ page_name: 'page_404_not_found' });

  const { data: config } = useConfigQuery();
  const image = config?.image;

  return (
    <Grid className={themeClasses.container} container spacing={4}>
      <img src={image?.error404} alt='404' />
    </Grid>
  );
};

export default NotFound;
