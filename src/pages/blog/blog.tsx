import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import Layout from 'src/components/layout/layout';
import useStyles from './styles';

const Blog = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}></Grid>
    </Layout>
  );
};

export default Blog;
