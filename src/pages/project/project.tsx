import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import _ from 'lodash';
import ProjectItem from 'src/components/projectItem/projectItem';
import Layout from 'src/components/layout/layout';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const Project = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
        {_.sortBy(user?.project, 'index')
          .reverse()
          .map((item) => (
            <Grid key={item.name} item>
              <ProjectItem item={item} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Project;
