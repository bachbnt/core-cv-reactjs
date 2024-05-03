import { Layout, ServiceItem } from '@components';
import useTracker from '@hooks/useTracker';
import { Grid } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';

const Service = (props: Props) => {
  const themeClasses = useThemeStyles();
  useTracker();

  const { service = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}>
        {service.map((item) => (
          <Grid key={item.id} item>
            <ServiceItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Service;
