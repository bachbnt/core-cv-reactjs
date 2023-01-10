import { Button, Layout, Typography } from '@components';
import { Constant } from '@core/constants';
import { i18nKey } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Skill, SkillType } from '@models/skill';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCodeSlash, IoLanguage, IoSettings } from 'react-icons/io5';
import Props from './props';
import useStyles from './styles';

const About = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(slide === user?.profile?.covers?.length - 1)) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, user]);

  const frameworkSkills = useMemo(() => {
    return sortBy(
      filter(filter(user?.skill, { visible: true }), {
        type: SkillType.FRAMEWORK,
      }),
      Constant.SORT_KEY
    );
  }, [user?.skill]);

  const languageSkills = useMemo(() => {
    return sortBy(
      filter(filter(user?.skill, { visible: true }), {
        type: SkillType.LANGUAGE,
      }),
      Constant.SORT_KEY
    );
  }, [user?.skill]);

  const toolSkills = useMemo(() => {
    return sortBy(
      filter(filter(user?.skill, { visible: true }), {
        type: SkillType.TOOL,
      }),
      Constant.SORT_KEY
    );
  }, [user?.skill]);

  const covers = useMemo(() => {
    return sortBy(
      filter(user?.profile?.covers, { visible: true }),
      Constant.SORT_KEY
    );
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
        <Grid key={`${item.name} ${item.index}`} container item xs={6} md={4}>
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
      ) : (
        <div key={`${item.name} ${item.index}`} />
      );
    },
    [classes, renderSkillIcon]
  );

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={classes.infoContainer} item xs={12} md={6}>
          <Typography color="primary" variant="h5">
            {t(i18nKey.hello_world)}
          </Typography>
          <Typography color="primary" variant="h4">
            {t(i18nKey.my_name_is_and_i_am_a, {
              username: user?.profile?.name,
              specialty: user?.profile?.specialties[0].name,
            })}
          </Typography>
          <Box mt={2} mb={4}>
            <Typography variant="subtitle1" align="justify">
              {user?.profile?.summary}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography color="primary" variant="h5">
              {t(i18nKey.i_have_worked_with)}
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
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          item
        >
          <img className={classes.img} src={covers[slide].url} alt="cover" />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
