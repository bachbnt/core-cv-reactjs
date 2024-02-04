import { Layout, ProjectDialog, ProjectItem, Typography } from '@components';
import useDialog from '@hooks/useDialog';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Project as ProjectModel, ProjectType } from '@models/project';
import { RootState, useAppSelector } from '@redux/store';
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

  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const projects = useMemo(() => {
    return filter(user?.project, { visible: true });
  }, [user?.project]);

  const companyProjects = useMemo(() => {
    return filter(projects, {
      type: ProjectType.COMPANY,
    }).reverse();
  }, [projects]);

  const freelanceProjects = useMemo(() => {
    return filter(projects, {
      type: ProjectType.FREELANCE,
    }).reverse();
  }, [projects]);

  const personalProjects = useMemo(() => {
    return filter(projects, {
      type: ProjectType.PERSONAL,
    }).reverse();
  }, [projects]);

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<ProjectModel>(projects);

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
                {t(Localization.page4_title1)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {companyProjects.map((item) => (
                <Grid key={item.id} item>
                  <ProjectItem
                    item={item}
                    onOpenDialog={() => onOpenDialog(item)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {hasFreelanceProject && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.page4_title2)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {freelanceProjects.map((item) => (
                <Grid key={item.id} item>
                  <ProjectItem
                    item={item}
                    onOpenDialog={() => onOpenDialog(item)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {hasPersonalProject && (
          <>
            <Box mt={6} mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.page4_title3)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {personalProjects.map((item) => (
                <Grid key={item.id} item>
                  <ProjectItem
                    item={item}
                    onOpenDialog={() => onOpenDialog(item)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {item && (
          <ProjectDialog
            item={item}
            openDialog={openDialog}
            onCloseDialog={onCloseDialog}
          />
        )}
      </Grid>
    </Layout>
  );
};

export default Project;
