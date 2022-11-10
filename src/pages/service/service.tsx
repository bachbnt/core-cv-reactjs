import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { Layout, ServiceItem } from 'src/components';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Service = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const user = useAppSelector((state: any) => state.userReducer.user);

  return (
    <Layout>
      <Grid className={clsx(themeClasses.container)} container spacing={4}>
        {_.sortBy(user?.service, 'index').map((item) => (
          <Grid key={`${item.name} ${item.index}`} item>
            <ServiceItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Service;
