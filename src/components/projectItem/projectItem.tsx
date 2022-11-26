import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import { Typography } from 'src/components';
import { Config } from 'src/models/config';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import Props from './props';
import useStyles from './styles';

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return item.visible ? (
    <div>
      <Card className={clsx(classes.card)} onClick={onOpenDialog}>
        <CardActionArea>
          {item.coverVisible && (
            <CardMedia
              className={classes.img}
              component='img'
              image={item.cover || config.image.comingSoon}
            />
          )}
          <CardContent>
            {item.nameVisible && (
              <Typography color='primary' variant='h6'>
                {item.name}
              </Typography>
            )}
            {item.technologyVisible && (
              <Typography variant='subtitle2'>{item.technology}</Typography>
            )}
            {item.descriptionVisible && (
              <Box mt={2} overflow='hidden'>
                <Typography
                  className={themeClasses.cardDescription}
                  variant='body2'
                >
                  {item.description}
                </Typography>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog fullWidth maxWidth='md' open={openDialog} onClose={onCloseDialog}>
        <DialogContent>
          {item.coverVisible && (
            <CardMedia
              component='img'
              image={item.cover || config.image.comingSoon}
            />
          )}
          <CardContent>
            {item.nameVisible && (
              <Typography color='primary' variant='h6'>
                {item.name}
              </Typography>
            )}
            {item.technologyVisible && (
              <Typography variant='subtitle2'>{item.technology}</Typography>
            )}
            {item.descriptionVisible && (
              <Typography variant='body2'>{item.description}</Typography>
            )}
          </CardContent>
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    <div />
  );
};

export default ProjectItem;
