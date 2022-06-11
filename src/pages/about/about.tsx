import { useCallback, useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { IoCodeSlash, IoLanguage, IoSettings } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import _ from 'lodash';
import Button from 'src/components/button/button';
import Layout from 'src/components/layout/layout';
import Typography from 'src/components/typography/typography';
import { Skill, SkillType } from 'src/models/skill';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.userReducer);
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(slide === user!.profile.covers.length - 1)) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, user]);

  const onSkillClick = (item: Skill) => {
    if (item.enable) {
      window.open(item.url);
    }
  };

  const renderSkillIcon = useCallback(
    (type: SkillType) => {
      switch (type) {
        case SkillType.FRAMEWORK:
          return <IoCodeSlash className={clsx(classes.primary)} />;
        case SkillType.LANGUAGE:
          return <IoLanguage className={clsx(classes.primary)} />;
        case SkillType.TOOL:
          return <IoSettings className={clsx(classes.primary)} />;
        default:
          return <div />;
      }
    },
    [classes]
  );

  const renderSkillItem = useCallback(
    (item: Skill) => {
      return item.visible ? (
        <Grid key={`${item.name} ${item.index}`} container item xs={6} md={4}>
          <Button
            className={clsx(classes.capitalize)}
            startIcon={renderSkillIcon(item.type)}
            onClick={() => {
              onSkillClick(item);
            }}
          >
            {item.name}
          </Button>
        </Grid>
      ) : (
        <div key={`${item.name} ${item.index}`} />
      );
    },
    [classes, renderSkillIcon]
  );

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container>
        <Grid className={clsx(classes.infoContainer)} item xs={12} md={6}>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h5'
          >
            {t(i18nKey.hello_world)}
          </Typography>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.primary)}
            variant='h4'
          >
            {t(i18nKey.my_name_is_and_i_am_a, {
              username: user?.profile.name,
              specialty: user?.profile.specialties[0].name,
            })}
          </Typography>
          <Box mt={2} mb={4}>
            <Typography variant='subtitle1' align='justify'>
              {user?.profile.summary}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.primary)}
              variant='h5'
            >
              {t(i18nKey.i_have_worked_with)}
            </Typography>
          </Box>
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(user?.skill, { type: SkillType.FRAMEWORK }),
              'index'
            ).map((item) => renderSkillItem(item))}
          </Grid>
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(user?.skill, { type: SkillType.LANGUAGE }),
              'index'
            ).map((item) => renderSkillItem(item))}
          </Grid>
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(user?.skill, { type: SkillType.TOOL }),
              'index'
            ).map((item) => renderSkillItem(item))}
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.imgContainer)}
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          md={6}
          item
        >
          <img
            className={clsx(classes.img)}
            src={_.sortBy(user?.profile.covers, 'index')[slide].url}
            alt='cover'
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
