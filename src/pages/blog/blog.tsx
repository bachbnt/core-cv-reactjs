import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';

const Blog = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}></Grid>
    </Layout>
  );
};

export default Blog;
