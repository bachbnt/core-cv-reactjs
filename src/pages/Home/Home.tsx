import { Avatar, Button, ContactItem, Layout, Typography } from '@components';
import useSlide from '@hooks/useSlide';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Grid, Tooltip } from '@material-ui/core';
import { ContactType } from '@models/contact';
import { ProfileSpecialty } from '@models/profile';
import { RootState, useAppSelector } from '@redux/store';
import { RoutePath } from '@routes/routePath';
import useThemeStyles from '@themes/styles';
import filter from 'lodash/filter';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Props from './props';
import useStyles from './styles';

const Home = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({
    page_name: 'page1_home',
  });

  const { aboutEnable, contactEnable } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};
  const { profile, contact = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  const { slide } = useSlide<ProfileSpecialty>(profile?.specialties);

  const socialContacts = useMemo(() => {
    return filter(contact, {
      type: ContactType.SOCIAL,
    });
  }, [contact]);

  const onAboutClick = () => {
    if (aboutEnable) {
      trackEvent('component_clicked', {
        component_name: 'page1_button1_about',
      });
      navigate(RoutePath.ABOUT);
    }
  };
  const onContactClick = () => {
    if (contactEnable) {
      trackEvent('component_clicked', {
        component_name: 'page1_button2_contact',
      });
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
          <Avatar src={profile?.avatar} />
        </Grid>
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography className={classes.greeting} variant='h6'>
            {t(Localization.page1_title).toUpperCase()}
          </Typography>
          <Box my={2} />
          <Typography color='primary' variant='h1'>
            {profile?.name}
          </Typography>
          <Typography color='primary' variant='h4'>
            {profile?.specialties?.[slide]?.name}
          </Typography>
          <Box mt={2} mb={6}>
            <Grid container item>
              {socialContacts?.map((item) => (
                <Tooltip
                  key={item.id}
                  title={item.nameVisible ? item.name : ''}
                >
                  <div>
                    <ContactItem
                      item={item}
                      onItemClick={(item) =>
                        trackEvent('component_clicked', {
                          component_name: 'page1_list_contact',
                          item_name: item.icon,
                        })
                      }
                    />
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
