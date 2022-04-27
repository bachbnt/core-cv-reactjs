import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);

  return (
    <Grid className={clsx(classes.container)}>
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
