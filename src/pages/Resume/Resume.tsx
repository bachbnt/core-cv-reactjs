import {
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from '@components';
import { Constant } from '@core/constants';
import { i18nKey } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const Resume = (props: Props) => {
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
          <Typography color="primary" variant="h4">
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
          <Typography color="primary" variant="h4">
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
