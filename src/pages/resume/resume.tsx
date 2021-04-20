import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout/layout';
import Timeline from '../../components/timeline/timeline';
import Typography from '../../components/typography/typography';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';

const Resume = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  return (
    <Layout>
      <Grid className={classes.container} container>
        <Typography className={classes.typography} variant='h4'>
          Education
        </Typography>
        <Grid container>
          <Timeline items={user?.universities!} />
        </Grid>
        <Typography className={classes.typography} variant='h4'>
          Experience
        </Typography>
        <Grid container>
          <Timeline items={user?.companies!} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
