import { Box, Grid, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import {
  Avatar,
  Button,
  ContactItem,
  Layout,
  Typography,
} from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { Config } from 'src/models/config';
import { ContactType } from 'src/models/contact';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import { RoutePath } from 'src/routes/routePath';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;
  const user = useAppSelector((state: any) => state.userReducer.user) as User;

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
                _.filter(user?.contact, {
                  type: ContactType.SOCIAL,
                  visible: true,
                }),
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
