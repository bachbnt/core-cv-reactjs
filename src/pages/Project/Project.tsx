import { Layout, ProjectItem, Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { ProjectType } from '@models/project';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const Project = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const companyProjects = useMemo(() => {
    return filter(user?.project, {
      type: ProjectType.COMPANY,
      visible: true,
    }).reverse();
  }, [user?.project]);

  const freelanceProjects = useMemo(() => {
    return filter(user?.project, {
      type: ProjectType.FREELANCE,
      visible: true,
    }).reverse();
  }, [user?.project]);

  const personalProjects = useMemo(() => {
    return filter(user?.project, {
      type: ProjectType.PERSONAL,
      visible: true,
    }).reverse();
  }, [user?.project]);

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
      <Grid className={themeClasses.container} container>
        {hasCompanyProject && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.company)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
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
                {t(Localization.freelance)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
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
                {t(Localization.personal)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
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
