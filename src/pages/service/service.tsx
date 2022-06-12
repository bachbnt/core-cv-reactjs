import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import ServiceItem from 'src/components/serviceItem/serviceItem';
import Layout from 'src/components/layout/layout';
import useStyles from './styles';
import { useAppSelector } from 'src/redux/store';

const Service = () => {
  const classes = useStyles();
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
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
