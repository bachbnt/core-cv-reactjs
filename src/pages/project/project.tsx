import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ProjectCard from 'src/components/card/projectCard/projectCard';
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
        {user?.projects
          .slice()
          .reverse()
          .map((item) => (
            <Grid item>
              <ProjectCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Project;
