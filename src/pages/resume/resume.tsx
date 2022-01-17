import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Layout from 'src/components/layout/layout';
import Timeline from 'src/components/timeline/timeline';
import Typography from 'src/components/typography/typography';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const Resume = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container>
        <Box mb={2}>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.typography)}
            variant='h4'>
            {t(i18nKey.education)}
          </Typography>
        </Box>
        <Grid container>
          <Timeline items={user?.universities!} />
        </Grid>
        <Box mt={6} mb={2}>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.typography)}
            variant='h4'>
            {t(i18nKey.experience)}
          </Typography>
        </Box>
        <Grid container>
          <Timeline items={user?.companies!} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
