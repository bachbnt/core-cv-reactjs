import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ServiceCard from 'src/components/card/serviceCard/serviceCard';
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
        {user?.services.map((item) => (
          <Grid item>
            <ServiceCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Service;
