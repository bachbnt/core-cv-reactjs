import { Box, Grid } from '@material-ui/core';
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Avatar from '../../components/avatar/avatar';
import ContainedButton from '../../components/button/containedButton/containedButton';
import OutlinedButton from '../../components/button/outlinedButton/outlinedButton';
import IconButton from '../../components/button/iconButton/iconButton';
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

  const socialIcons = [
    <SiFacebook size={32} />,
    <SiGithub size={32} />,
    <SiLinkedin size={32} />,
  ];

  useEffect(() => {
    getData();
  }, [getData]);

  const onSocialClick = (url: string) => {
    if (url) {
      window.open(url);
    }
  };
  const onMoreClick = () => {
    history.push(RoutePath.ME);
  };
  const onHireClick = () => {
    history.push(RoutePath.CONTACT);
  };

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container>
        <Grid container justify='center' alignItems='center' xs={12} md={6}>
          <Avatar src={user?.avatar} />
        </Grid>
        <Grid className={clsx(classes.infoContainer)} item xs={12} md={6}>
          <Typography className={clsx(classes.greeting)} variant='h6'>
            {user?.summary.toUpperCase()}
          </Typography>
          <Box mt={2}>
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.primary, classes.bold)}
              variant='h1'>
              {user?.username}
            </Typography>
          </Box>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h4'>
            {user?.job}
          </Typography>
          <Box mt={1} mb={6}>
            <Grid container>
              {user?.socials.map((item, index) => (
                <IconButton
                  onClick={() => {
                    onSocialClick(item.url);
                  }}>
                  {socialIcons[index]}
                </IconButton>
              ))}
            </Grid>
          </Box>
          <Grid container>
            <Grid item xs={6} md={2}>
              <ContainedButton
                className={clsx(classes.leftButton)}
                onClick={onMoreClick}
                fullWidth>
                {t(i18nKey.me)}
              </ContainedButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <OutlinedButton
                className={clsx(classes.rightButton)}
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
