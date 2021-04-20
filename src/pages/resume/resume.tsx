import { Box, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Layout from '../../components/layout/layout';
import Timeline from '../../components/timeline/timeline';
import Typography from '../../components/typography/typography';
import { i18nKey } from '../../locales/i18n';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';

const Resume = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

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
