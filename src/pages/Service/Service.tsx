import { Layout, ServiceItem } from '@components';
import Constant from '@core/constants';
import { Grid } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import Props from './props';
import useStyles from './styles';

const Service = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const services = useMemo(() => {
    return sortBy(filter(user?.service, { visible: true }), Constant.SORT_KEY);
  }, [user?.service]);

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}>
        {services.map((item) => (
          <Grid key={`${item.name} ${item.index}`} item>
            <ServiceItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Service;
