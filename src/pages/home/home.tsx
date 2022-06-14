import { useEffect, useState } from 'react';
import { Box, Grid, Tooltip } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import _ from 'lodash';
import {
  Avatar,
  Button,
  ContactItem,
  Layout,
  Typography,
} from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { ContactType } from 'src/models/contact';
import { RoutePath } from 'src/routes/routePath';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const config = useAppSelector((state) => state.configReducer.config);
  const user = useAppSelector((state) => state.userReducer.user);
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
      <Grid className={clsx(themeClasses.container)} container>
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
          <Typography color='primary' variant='h1'>
            {user?.profile?.name}
          </Typography>
          <Typography color='primary' variant='h4'>
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
              <Button
                variant='contained'
                className={clsx(classes.leftButton)}
                onClick={onAboutClick}
                fullWidth
              >
                {t(i18nKey.about_me)}
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                variant='outlined'
                className={clsx(classes.rightButton)}
                onClick={onContactClick}
                fullWidth
              >
                {t(i18nKey.contact_me)}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
