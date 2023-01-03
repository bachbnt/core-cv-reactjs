import { Box, Grid } from '@material-ui/core';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from 'src/components';
import { Constant } from 'src/core/constants';
import { i18nKey } from 'src/locales/i18n';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Resume = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const education = useMemo(() => {
    return sortBy(
      filter(user?.education, { visible: true }),
      Constant.SORT_KEY
    ).reverse() as Education[];
  }, [user?.education]);

  const experience = useMemo(() => {
    return sortBy(
      filter(user?.experience, { visible: true }),
      Constant.SORT_KEY
    ).reverse() as Experience[];
  }, [user?.experience]);

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Box mb={2}>
          <Typography color='primary' variant='h4'>
            {t(i18nKey.education)}
          </Typography>
        </Box>
        <Grid container>
          <Timeline
            data={education}
            renderItem={(item) => (
              <EducationItem
                key={`${item.name} ${item.index}`}
                item={item as Education}
              />
            )}
          />
        </Grid>
        <Box mt={6} mb={2}>
          <Typography color='primary' variant='h4'>
            {t(i18nKey.experience)}
          </Typography>
        </Box>
        <Grid container>
          <Timeline
            data={experience}
            renderItem={(item) => (
              <ExperienceItem
                key={`${item.name} ${item.index}`}
                item={item as Experience}
              />
            )}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
