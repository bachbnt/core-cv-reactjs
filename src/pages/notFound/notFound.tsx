import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import useThemeStyles from 'src/themes/styles';
import variables from 'src/themes/variables';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  return (
    <Grid className={clsx(themeClasses.container)} container spacing={4}>
      <img src={variables.error404url} alt='404' />
    </Grid>
  );
};

export default NotFound;
