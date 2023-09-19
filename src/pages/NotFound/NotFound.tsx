import { Grid } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';
import useStyles from './styles';

const NotFound = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const config = useAppSelector(
    (state: RootState) => state.configReducer.config
  );

  return (
    <Grid className={themeClasses.container} container spacing={4}>
      <img src={config?.image?.error404} alt='404' />
    </Grid>
  );
};

export default NotFound;
