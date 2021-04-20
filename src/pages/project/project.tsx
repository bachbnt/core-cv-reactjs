import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Card from '../../components/card/card';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';

const Project = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  return (
    <Layout>
      <Grid className={classes.container} container spacing={4}>
        {user?.projects.map((item) => (
          <Grid item>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Project;
