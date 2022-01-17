import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Layout from 'src/components/layout/layout';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const Blog = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}></Grid>
    </Layout>
  );
};

export default Blog;
