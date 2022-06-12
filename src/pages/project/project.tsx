import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import ProjectItem from 'src/components/projectItem/projectItem';
import Layout from 'src/components/layout/layout';
import useStyles from './styles';
import { useAppSelector } from 'src/redux/store';

const Project = () => {
  const classes = useStyles();
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
        {_.sortBy(user?.project, 'index')
          .reverse()
          .map((item) => (
            <Grid key={`${item.name} ${item.index}`} item>
              <ProjectItem item={item} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Project;
