import { Box, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Avatar from '../../components/avatar/avatar';
import ContainedButton from '../../components/button/containedButton/containedButton';
import OutlinedButton from '../../components/button/outlinedButton/outlinedButton';
import Layout from '../../components/layout/layout';
import Typography from '../../components/typography/typography';
import { useMe } from '../../hooks/useMe';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import { RoutePath } from '../../routes/routePath';
import useStyles from './styles';
import { i18nKey } from '../../locales/i18n';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { getData } = useMe();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  useEffect(() => {
    getData();
  }, [getData]);

  const onMoreClick = () => {
    history.push(RoutePath.ME);
  };
  const onHireClick = () => {
    history.push(RoutePath.CONTACT);
  };

  return (
    <Layout>
      <Grid className={classes.container} container>
        <Grid container justify='center' alignItems='center' xs={12} md={6}>
          <Avatar src={user?.avatar} />
        </Grid>
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography className={classes.greeting} variant='h6'>
            {user?.summary.toUpperCase()}
          </Typography>
          <Box mt={4}>
            <Typography
              className={clsx(classes.primary, classes.bold)}
              variant='h1'>
              {user?.username}
            </Typography>
          </Box>
          <Box mb={6}>
            <Typography className={classes.primary} variant='h4'>
              {user?.job}
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={6} md={2}>
              <ContainedButton
                className={classes.leftButton}
                onClick={onMoreClick}
                fullWidth>
                {t(i18nKey.me)}
              </ContainedButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <OutlinedButton
                className={classes.rightButton}
                onClick={onHireClick}
                fullWidth>
                {t(i18nKey.contact)}
              </OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
