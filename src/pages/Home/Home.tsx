import { Avatar, Button, ContactItem, Layout, Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Box, Grid, Tooltip } from '@material-ui/core';
import { ContactType } from '@models/contact';
import { RootState, useAppSelector } from '@redux/store';
import { RoutePath } from '@routes/routePath';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
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
    (state: RootState) => state.configReducer.config
  );
  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!user?.profile?.specialties?.length) {
        return;
      }
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
    return filter(user?.contact, {
      type: ContactType.SOCIAL,
      visible: true,
    });
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
            {t(Localization.page1_title).toUpperCase()}
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
                  key={item.id}
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
            <Grid item xs={6} md={4}>
              <Button
                variant='contained'
                className={classes.leftButton}
                onClick={onAboutClick}
                fullWidth
              >
                {t(Localization.page1_button1)}
              </Button>
            </Grid>
            <Grid item xs={6} md={4}>
              <Button
                variant='outlined'
                className={classes.rightButton}
                onClick={onContactClick}
                fullWidth
              >
                {t(Localization.page1_button2)}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
