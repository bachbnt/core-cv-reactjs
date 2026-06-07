/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { AnimateIn, Layout, ServiceItem } from '@components';
import useTracker from '@hooks/useTracker';
import { Grid } from '@mui/material';
import { useUserQuery } from '@queries';
import useThemeStyles from '@themes/sharedStyles';

const Service = () => {
  const themeClasses = useThemeStyles();
  const { trackEvent } = useTracker({ page_name: 'page6_service' });

  const { data: user } = useUserQuery();
  const { service = [] } = user ?? {};

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={themeClasses.container} container spacing={4}>
          {service.map((item, index) => (
            <Grid key={item.id}>
              <AnimateIn delay={index * 80}>
                <ServiceItem
                  item={item}
                  onItemClick={(item) =>
                    trackEvent('component_clicked', {
                      component_name: 'page5_list_service',
                      item_name: item.id,
                    })
                  }
                />
              </AnimateIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Service;
