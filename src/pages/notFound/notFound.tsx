import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import { Config } from 'src/models/config';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;

  return (
    <Grid className={clsx(themeClasses.container)} container spacing={4}>
      <img src={config?.image?.error404} alt='404' />
    </Grid>
  );
};

export default NotFound;
