import { useEffect, useState } from 'react';
import { Box, Grid, Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import _ from 'lodash';
import Avatar from 'src/components/avatar/avatar';
import ContainedButton from 'src/components/button/containedButton/containedButton';
import OutlinedButton from 'src/components/button/outlinedButton/outlinedButton';
import ContactItem from 'src/components/contactItem/contactItem';
import Layout from 'src/components/layout/layout';
import Typography from 'src/components/typography/typography';
import { i18nKey } from 'src/locales/i18n';
import { ContactType } from 'src/models/contact';
import { RootState } from 'src/redux/rootState';
import { ConfigState } from 'src/redux/config/configState';
import { UserState } from 'src/redux/user/userState';
import { RoutePath } from 'src/routes/routePath';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const config = useSelector<RootState, ConfigState>(
    (state) => state.configReducer
  );
  const user = useSelector<RootState, UserState>((state) => state.userReducer);
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(slide === user!.profile.specialties.length - 1)) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, user]);

  const onAboutClick = () => {
    if (config?.aboutEnable) {
      navigate(RoutePath.ABOUT);
    }
  };
  const onContactClick = () => {
    if (config?.contactEnable) {
      navigate(RoutePath.CONTACT);
    }
  };

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container>
        <Grid
          container
          item
          justifyContent='center'
          alignItems='center'
          xs={12}
          md={6}
        >
          <Avatar src={user?.profile?.avatar} />
        </Grid>
        <Grid className={clsx(classes.infoContainer)} item xs={12} md={6}>
          <Typography className={clsx(classes.greeting)} variant='h6'>
            {t(i18nKey.welcome_to_my_home).toUpperCase()}
          </Typography>
          <Box my={2} />
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary, classes.bold)}
            variant='h1'
          >
            {user?.profile?.name}
          </Typography>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h4'
          >
            {user?.profile?.specialties[slide].name}
          </Typography>
          <Box mt={2} mb={6}>
            <Grid container item>
              {_.sortBy(
                _.filter(user?.contact, { type: ContactType.SOCIAL }),
                'index'
              ).map((item) => (
                <Tooltip
                  key={`${item.name} ${item.index}`}
                  classes={{ tooltip: classes.tooltip }}
                  title={item.nameVisible ? item.name : ''}
                >
                  <div>
                    <ContactItem item={item}></ContactItem>
                  </div>
                </Tooltip>
              ))}
            </Grid>
          </Box>
          <Grid container item>
            <Grid item xs={6} md={3}>
              <ContainedButton
                className={clsx(classes.leftButton)}
                onClick={onAboutClick}
                fullWidth
              >
                {t(i18nKey.about_me)}
              </ContainedButton>
            </Grid>
            <Grid item xs={6} md={3}>
              <OutlinedButton
                className={clsx(classes.rightButton)}
                onClick={onContactClick}
                fullWidth
              >
                {t(i18nKey.contact_me)}
              </OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
