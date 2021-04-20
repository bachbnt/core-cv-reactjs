import { Box, Grid } from '@material-ui/core';
import Layout from '../../components/layout/layout';
import useStyles from './styles';

const Service = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid className={classes.container} container></Grid>
    </Layout>
  );
};

export default Service;
