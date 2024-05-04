import {
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from '@components';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { useTranslation } from 'react-i18next';
import Props from './props';

const Resume = (props: Props) => {
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({ page_name: 'page3_resume' });

  const { education = [], experience = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Box mb={2}>
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
                    item_name: item.name,
                  })
                }
              />
            )}
          />
        </Grid>
        <Box mt={6} mb={2}>
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
                    item_name: item.name,
                  })
                }
              />
            )}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
