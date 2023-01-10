import { Grid } from '@material-ui/core';
import { Config } from '@models/config';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';
import useStyles from './styles';

const NotFound = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;

  return (
    <Grid className={themeClasses.container} container spacing={4}>
      <img src={config?.image?.error404} alt="404" />
    </Grid>
  );
};

export default NotFound;
