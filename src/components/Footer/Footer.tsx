/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Grid } from '@mui/material';
import { useUserQuery } from '@queries';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { data: user } = useUserQuery();
  const profile = user?.profile;

  return (
    <Grid className={classes.container}>
      <Typography variant='subtitle2'>
        {t(Localization.footer, {
          time: new Date().getFullYear(),
          username: profile?.name,
        })}
      </Typography>
    </Grid>
  );
};

export default Footer;
