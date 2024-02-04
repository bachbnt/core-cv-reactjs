import { Button, Layout, Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Box, CardMedia, Grid } from '@material-ui/core';
import { Skill, SkillType } from '@models/skill';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCodeSlash, IoLanguage, IoSettings } from 'react-icons/io5';
import Carousel from 'react-material-ui-carousel';
import Props from './props';
import useStyles from './styles';

const About = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const frameworkSkills = useMemo(() => {
    return filter(user?.skill, { type: SkillType.FRAMEWORK, visible: true });
  }, [user?.skill]);

  const languageSkills = useMemo(() => {
    return filter(user?.skill, { type: SkillType.LANGUAGE, visible: true });
  }, [user?.skill]);

  const toolSkills = useMemo(() => {
    return filter(user?.skill, { type: SkillType.TOOL, visible: true });
  }, [user?.skill]);

  const covers = useMemo(() => {
    return filter(user?.profile?.covers, { visible: true });
  }, [user?.profile?.covers]);

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
        <Grid key={item.id} container item xs={6} md={4}>
          <Button
            className={classes.skillText}
            startIcon={renderSkillIcon(item.type)}
            onClick={() => {
              onSkillClick(item);
            }}
          >
            {item.name}
          </Button>
        </Grid>
      ) : null;
    },
    [classes, renderSkillIcon]
  );

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography color='primary' variant='h5'>
            {t(Localization.page2_title1)}
          </Typography>
          <Typography color='primary' variant='h4'>
            {t(Localization.page2_title2, {
              username: user?.profile?.name,
              specialty: user?.profile?.specialties[0].name,
            })}
          </Typography>
          <Box mt={2} mb={4}>
            <Typography variant='subtitle1' align='justify'>
              {user?.profile?.summary}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography color='primary' variant='h5'>
              {t(Localization.page2_title3)}
            </Typography>
          </Box>
          <Grid container xs={12} item>
            {frameworkSkills.map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {languageSkills.map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {toolSkills.map((item) => renderSkillItem(item))}
          </Grid>
        </Grid>
        <Grid
          className={classes.imgContainer}
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          md={6}
          item
        >
          <Carousel className={classes.img}>
            {covers.map((item, index) => (
              <CardMedia
                key={item.url}
                className={classes.img}
                component='img'
                image={item.url}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
