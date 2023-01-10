import { Avatar, Button, ContactItem, Layout, Typography } from '@components';
import { Constant } from '@core/constants';
import { i18nKey } from '@locales/i18n';
import { Box, Grid, Tooltip } from '@material-ui/core';
import { Config } from '@models/config';
import { ContactType } from '@models/contact';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import { RoutePath } from '@routes/routePath';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Props from './props';
import useStyles from './styles';

const Home = (props: Props) => {
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
      if (!(slide === user?.profile?.specialties?.length - 1)) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, user]);

  const socialContacts = useMemo(() => {
    return sortBy(
      filter(user?.contact, {
        type: ContactType.SOCIAL,
        visible: true,
      }),
      Constant.SORT_KEY
    );
  }, [user?.contact]);

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
      <Grid className={themeClasses.container} container>
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
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography className={classes.greeting} variant='h6'>
            {t(i18nKey.welcome_to_my_home).toUpperCase()}
          </Typography>
          <Box my={2} />
          <Typography color='primary' variant='h1'>
            {user?.profile?.name}
          </Typography>
          <Typography color='primary' variant='h4'>
            {user?.profile?.specialties?.[slide]?.name}
          </Typography>
          <Box mt={2} mb={6}>
            <Grid container item>
              {socialContacts?.map((item) => (
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
                className={classes.leftButton}
                onClick={onAboutClick}
                fullWidth
              >
                {t(i18nKey.about_me)}
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                variant='outlined'
                className={classes.rightButton}
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
