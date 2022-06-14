import { Box, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  EducationItem,
  ExperienceItem,
  Layout,
  Timeline,
  Typography,
} from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Resume = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <Layout>
      <Grid className={clsx(themeClasses.container)} container>
        <Box mb={2}>
          <Typography color='primary' variant='h4'>
            {t(i18nKey.education)}
          </Typography>
        </Box>
        <Grid container>
          <Timeline
            data={user!.education}
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
            data={user!.experience}
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
