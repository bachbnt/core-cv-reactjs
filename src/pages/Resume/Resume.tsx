/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import {
  AnimateIn,
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from '@components';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@mui/material';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { useUserQuery } from '@queries';
import useThemeStyles from '@themes/styles';
import { useTranslation } from 'react-i18next';
import Props from './props';

const Resume = (props: Props) => {
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({ page_name: 'page3_resume' });

  const { data: user } = useUserQuery();
  const { education = [], experience = [] } = user ?? {};

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <AnimateIn delay={0} width='100%'>
          <Box mb={2} width='100%' textAlign='center'>
            <Typography color='primary' variant='h4'>
              {t(Localization.page3_title1)}
            </Typography>
          </Box>
          <Grid container>
            <Timeline
              data={[...education].reverse()}
              renderItem={(item) => (
                <EducationItem
                  key={item.id}
                  item={item as Education}
                  onItemClick={(item) =>
                    trackEvent('component_clicked', {
                      component_name: 'page3_list_education',
                      item_name: item.id,
                    })
                  }
                />
              )}
            />
          </Grid>
        </AnimateIn>
        <AnimateIn delay={150} width='100%'>
          <Box mt={6} mb={2} width='100%' textAlign='center'>
            <Typography color='primary' variant='h4'>
              {t(Localization.page3_title2)}
            </Typography>
          </Box>
          <Grid container>
            <Timeline
              data={[...experience].reverse()}
              renderItem={(item) => (
                <ExperienceItem
                  key={item.id}
                  item={item as Experience}
                  onItemClick={(item) =>
                    trackEvent('component_clicked', {
                      component_name: 'page3_list_experience',
                      item_name: item.id,
                    })
                  }
                />
              )}
            />
          </Grid>
        </AnimateIn>
      </Grid>
    </Layout>
  );
};

export default Resume;
