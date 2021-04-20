import { Box, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import Avatar from '../../components/avatar/avatar';
import ContainedButton from '../../components/button/containedButton/containedButton';
import OutlinedButton from '../../components/button/outlinedButton/outlinedButton';
import Layout from '../../components/layout/layout';
import Typography from '../../components/typography/typography';
import { useMe } from '../../hooks/useMe';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import { RoutePath } from '../../routes/routePath';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const { getData } = useMe();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  useEffect(() => {
    getData();
  }, [getData]);

  const onMoreClick = () => {
    history.push(RoutePath.ME);
  };
  const onHireClick = () => {
    history.push(RoutePath.CONTACT);
  };

  return (
    <Layout>
      <Grid className={classes.container} container>
        <Grid container justify='center' alignItems='center' xs={12} md={6}>
          <Avatar src={user?.avatar} />
        </Grid>
        <Grid className={classes.info} item xs={12} md={6}>
          <Typography variant='h6'>{user?.summary.toUpperCase()}</Typography>
          <Typography
            className={clsx(classes.primary, classes.bold)}
            variant='h1'>
            {user?.username}
          </Typography>
          <Typography className={classes.primary} variant='h4'>
            {user?.job}
          </Typography>
          <Grid>
            <ContainedButton onClick={onMoreClick}>More</ContainedButton>
            <OutlinedButton onClick={onHireClick}>Hire</OutlinedButton>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
