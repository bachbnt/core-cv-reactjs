import { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { IoCodeSlash } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Button from 'src/components/button/button';
import Layout from 'src/components/layout/layout';
import Typography from 'src/components/typography/typography';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(index === user!.covers.length - 1)) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index, user]);

  const onTechnologyClick = (url: string) => {
    if (url) {
      window.open(url);
    }
  };

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container>
        <Grid className={clsx(classes.infoContainer)} item xs={12} md={6}>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h5'>
            {t(i18nKey.hello_world)}
          </Typography>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h4'>
            {t(i18nKey.my_name_is_and_i_am_a, {
              username: user?.name,
              job: user?.jobs[0],
            })}
          </Typography>
          <Box mt={2} mb={4}>
            <Typography variant='subtitle1' align='justify'>
              {user?.description}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.primary)}
              variant='h5'>
              {t(i18nKey.i_have_worked_with)}
            </Typography>
          </Box>
          <Grid container xs={12}>
            {user?.technologies.map((item) => (
              <Grid container item xs={6} md={4}>
                <Button
                  className={clsx(classes.capitalize)}
                  startIcon={<IoCodeSlash className={clsx(classes.primary)} />}
                  onClick={() => {
                    onTechnologyClick(item.url);
                  }}>
                  {item.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.imgContainer)}
          container
          justify='center'
          alignItems='center'
          xs={12}
          md={6}>
          <img
            className={clsx(classes.img)}
            src={user?.covers[index]}
            alt='cover'
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
