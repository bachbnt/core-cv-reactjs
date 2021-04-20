import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ServiceCard from '../../components/card/serviceCard/serviceCard';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';

const Service = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

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
