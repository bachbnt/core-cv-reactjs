import { Grid } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';

const NotFound = (props: Props) => {
  const themeClasses = useThemeStyles();

  const { image } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};

  return (
    <Grid className={themeClasses.container} container spacing={4}>
      <img src={image?.error404} alt='404' />
    </Grid>
  );
};

export default NotFound;
