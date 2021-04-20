import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { i18nKey } from '../../locales/i18n';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import Typography from '../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  return (
    <Grid className={classes.container}>
      <Typography variant='subtitle2'>
        {t(i18nKey.copyright, {
          year: new Date().getFullYear(),
          username: user?.username,
        })}
      </Typography>
    </Grid>
  );
};

export default Footer;
