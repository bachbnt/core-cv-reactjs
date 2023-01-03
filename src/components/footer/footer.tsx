import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Typography } from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import Props from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  return (
    <Grid className={classes.container}>
      <Typography variant='subtitle2'>
        {t(i18nKey.copyright_by, {
          time: new Date().getFullYear(),
          username: user?.profile?.name,
        })}
      </Typography>
    </Grid>
  );
};

export default Footer;
