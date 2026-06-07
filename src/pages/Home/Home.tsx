/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import {
  AnimateIn,
  Avatar,
  Button,
  ContactItem,
  Layout,
  Typography,
} from '@components';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Grid, Tooltip } from '@mui/material';
import { ContactType } from '@models/contact';
import { useConfigQuery, useUserQuery } from '@queries';
import { RoutePath } from '@routes/routePath';
import useThemeStyles from '@themes/styles';
import filter from 'lodash/filter';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({
    page_name: 'page1_home',
  });

  const { data: config } = useConfigQuery();
  const { aboutEnable, contactEnable } = config ?? {};
  const { data: user } = useUserQuery();
  const { profile, contact = [] } = user ?? {};

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
          size={{ xs: 12, md: 6 }}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <AnimateIn delay={0}>
            <Avatar src={profile?.avatar} />
          </AnimateIn>
        </Grid>
        <Grid className={classes.infoContainer} size={{ xs: 12, md: 6 }}>
          <AnimateIn delay={150}>
            <Typography className={classes.greeting} variant='h6'>
              {t(Localization.page1_title).toUpperCase()}
            </Typography>
            <Box sx={{ my: 2 }} />
            <Typography color='primary' variant='h1'>
              {profile?.name}
            </Typography>
            <Typography color='primary' variant='h4'>
              {profile?.specialties?.[0]?.name}
            </Typography>
            <Box sx={{ mt: 2, mb: 6 }}>
              <Grid container>
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
                            item_name: item.id,
                          })
                        }
                      />
                    </div>
                  </Tooltip>
                ))}
              </Grid>
            </Box>
            <Grid container>
              <Grid size={{ xs: 6, md: 4 }}>
                <Button
                  variant='contained'
                  className={classes.leftButton}
                  onClick={onAboutClick}
                  fullWidth
                >
                  {t(Localization.page1_button1)}
                </Button>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
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
          </AnimateIn>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
