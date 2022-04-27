import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import _ from 'lodash';
import ServiceItem from 'src/components/serviceItem/serviceItem';
import Layout from 'src/components/layout/layout';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const Service = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
        {_.sortBy(user?.service, 'index').map((item) => (
          <Grid item>
            <ServiceItem key={item.name} item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Service;
