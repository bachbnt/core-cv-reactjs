import { Button, Carousel, Layout, Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Box, CardMedia, Grid } from '@material-ui/core';
import { Skill, SkillType } from '@models/skill';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCodeSlash, IoLanguage, IoSettings } from 'react-icons/io5';
import Props from './props';
import useStyles from './styles';

const About = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const { skill = [], profile } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  const { framework, language, tool } = useMemo<{
    [SkillType.FRAMEWORK]: Skill[];
    [SkillType.LANGUAGE]: Skill[];
    [SkillType.TOOL]: Skill[];
  }>(() => {
    return skill.reduce(
      (result, _skill) => {
        if (Object.values(SkillType).includes(_skill.type)) {
          (result[_skill.type] as Skill[]).push(_skill);
        }
        return result;
      },
      {
        [SkillType.FRAMEWORK]: [],
        [SkillType.LANGUAGE]: [],
        [SkillType.TOOL]: [],
      }
    );
  }, [skill]);

  const onSkillClick = (item: Skill) => {
    if (item.urlEnable) {
      window.open(item.url);
    }
  };

  const renderSkillIcon = (type: SkillType) => {
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
  };

  const renderSkillItem = (item: Skill) => {
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
  };
  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography color='primary' variant='h5'>
            {t(Localization.page2_title1)}
          </Typography>
          <Typography color='primary' variant='h4'>
            {t(Localization.page2_title2, {
              username: profile?.name,
              specialty: profile?.specialties[0].name,
            })}
          </Typography>
          <Box mt={2} mb={4}>
            <Typography variant='subtitle1' align='justify'>
              {profile?.summary}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography color='primary' variant='h5'>
              {t(Localization.page2_title3)}
            </Typography>
          </Box>
          <Grid container xs={12} item>
            {framework.map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {language.map((item) => renderSkillItem(item))}
          </Grid>
          <Box my={2} />
          <Grid container xs={12} item>
            {tool.map((item) => renderSkillItem(item))}
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
            {profile?.covers.map((item, index) => (
              <CardMedia
                key={item.url}
                className={classes.img}
                component='img'
                image={item.url}
                loading='lazy'
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
