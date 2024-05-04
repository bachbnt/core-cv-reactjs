import useTracker from '@hooks/useTracker';
import { Grid } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';

const NotFound = (props: Props) => {
  const themeClasses = useThemeStyles();
  const _ = useTracker({ page_name: 'page_404_not_found' });

  const { image } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};

  return (
    <Grid className={themeClasses.container} container spacing={4}>
      <img src={image?.error404} alt='404' />
    </Grid>
  );
};

export default NotFound;
