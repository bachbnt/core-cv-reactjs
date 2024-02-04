import {
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from '@components';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const Resume = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const education = useMemo(() => {
    return filter(user?.education, { visible: true }).reverse();
  }, [user?.education]);

  const experience = useMemo(() => {
    return filter(user?.experience, {
      visible: true,
    }).reverse();
  }, [user?.experience]);

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
            data={education}
            renderItem={(item) => (
              <EducationItem key={item.id} item={item as Education} />
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
            data={experience}
            renderItem={(item) => (
              <ExperienceItem key={item.id} item={item as Experience} />
            )}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
