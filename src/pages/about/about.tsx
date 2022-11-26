import { Box, Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCodeSlash, IoLanguage, IoSettings } from 'react-icons/io5';
import { Button, Layout, Typography } from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { Skill, SkillType } from 'src/models/skill';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

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
    if (item.urlEnable) {
      window.open(item.url);
    }
  };

  const renderSkillIcon = useCallback((type: SkillType) => {
    switch (type) {
      case SkillType.FRAMEWORK:
        return <IoCodeSlash />;
      case SkillType.LANGUAGE:
        return <IoLanguage />;
      case SkillType.TOOL:
        return <IoSettings />;
      default:
        return <div />;
    }
  }, []);

  const renderSkillItem = useCallback(
    (item: Skill) => {
      return item.visible ? (
        <Grid key={`${item.name} ${item.index}`} container item xs={6} md={4}>
          <Button
            className={clsx(classes.skillText)}
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
      <Grid className={clsx(themeClasses.container)} container>
        <Grid className={clsx(classes.infoContainer)} item xs={12} md={6}>
          <Typography color='primary' variant='h5'>
            {t(i18nKey.hello_world)}
          </Typography>
          <Typography color='primary' variant='h4'>
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
            <Typography color='primary' variant='h5'>
              {t(i18nKey.i_have_worked_with)}
            </Typography>
          </Box>
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(_.filter(user?.skill, { visible: true }), {
                type: SkillType.FRAMEWORK,
              }),
              'index'
            ).map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(_.filter(user?.skill, { visible: true }), {
                type: SkillType.LANGUAGE,
              }),
              'index'
            ).map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {_.sortBy(
              _.filter(_.filter(user?.skill, { visible: true }), {
                type: SkillType.TOOL,
              }),
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
            src={
              _.sortBy(
                _.filter(user?.profile.covers, { visible: true }),
                'index'
              )[slide].url
            }
            alt='cover'
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
