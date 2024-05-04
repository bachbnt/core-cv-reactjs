import { Layout, ProjectDialog, ProjectItem, Typography } from '@components';
import useDialog from '@hooks/useDialog';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Grid } from '@material-ui/core';
import { Project as ProjectModel, ProjectType } from '@models/project';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Props from './props';

const Project = (props: Props) => {
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({ page_name: 'page4_project' });

  const { project = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  const { company, freelance, personal } = useMemo<{
    [ProjectType.COMPANY]: ProjectModel[];
    [ProjectType.FREELANCE]: ProjectModel[];
    [ProjectType.PERSONAL]: ProjectModel[];
  }>(() => {
    return project.reduce(
      (result, _project) => {
        if (Object.values(ProjectType).includes(_project.type)) {
          (result[_project.type] as ProjectModel[]).push(_project);
        }
        return result;
      },
      {
        [ProjectType.COMPANY]: [],
        [ProjectType.FREELANCE]: [],
        [ProjectType.PERSONAL]: [],
      }
    );
  }, [project]);

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<ProjectModel>(project);

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        {company?.length > 0 && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.page4_title1)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {company.map((item) => (
                <Grid key={item.id} item>
                  <ProjectItem
                    item={item}
                    onItemClick={() =>
                      trackEvent('component_clicked', {
                        component_name: 'page4_list_project',
                        item_name: item.id,
                      })
                    }
                    onOpenDialog={() => onOpenDialog(item)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {freelance?.length > 0 && (
          <>
            <Box mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.page4_title2)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {freelance.map((item) => (
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

        {personal?.length > 0 && (
          <>
            <Box mt={6} mb={2}>
              <Typography color='primary' variant='h4'>
                {t(Localization.page4_title3)}
              </Typography>
            </Box>
            <Grid className={themeClasses.container} container spacing={4}>
              {personal.map((item) => (
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
