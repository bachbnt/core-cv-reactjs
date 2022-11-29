import { Box, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, ProjectItem, Typography } from 'src/components';
import { Constant } from 'src/core/constants';
import { i18nKey } from 'src/locales/i18n';
import { ProjectType } from 'src/models/project';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Project = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const companyProjects = useMemo(() => {
    return sortBy(
      filter(filter(user.project, { visible: true }), {
        type: ProjectType.COMPANY,
      }),
      Constant.SORT_KEY
    ).reverse();
  }, [user.project]);

  const freelanceProjects = useMemo(() => {
    return sortBy(
      filter(filter(user.project, { visible: true }), {
        type: ProjectType.FREELANCE,
      }),
      Constant.SORT_KEY
    ).reverse();
  }, [user.project]);

  const personalProjects = useMemo(() => {
    return sortBy(
      filter(filter(user.project, { visible: true }), {
        type: ProjectType.PERSONAL,
      }),
      Constant.SORT_KEY
    ).reverse();
  }, [user.project]);

  const hasCompanyProject = useMemo(() => {
    return companyProjects.length > 0;
  }, [companyProjects]);

  const hasFreelanceProject = useMemo(() => {
    return freelanceProjects.length > 0;
  }, [freelanceProjects]);

  const hasPersonalProject = useMemo(() => {
    return personalProjects.length > 0;
  }, [personalProjects]);

  return (
    <Layout>
      <Grid className={clsx(themeClasses.container)} container>
        {hasCompanyProject && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(i18nKey.company)}
              </Typography>
            </Box>
            <Grid
              className={clsx(themeClasses.container)}
              container
              spacing={4}
            >
              {companyProjects.map((item) => (
                <Grid key={`${item.name} ${item.index}`} item>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {hasFreelanceProject && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(i18nKey.freelance)}
              </Typography>
            </Box>
            <Grid
              className={clsx(themeClasses.container)}
              container
              spacing={4}
            >
              {freelanceProjects.map((item) => (
                <Grid key={`${item.name} ${item.index}`} item>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {hasPersonalProject && (
          <>
            <Box mt={6} mb={2}>
              <Typography color='primary' variant='h4'>
                {t(i18nKey.personal)}
              </Typography>
            </Box>
            <Grid
              className={clsx(themeClasses.container)}
              container
              spacing={4}
            >
              {personalProjects.map((item) => (
                <Grid key={`${item.name} ${item.index}`} item>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Project;
