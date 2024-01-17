import { Carousel, Typography } from '@components';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Link,
} from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { useState } from 'react';
import Props from './props';
import useStyles from './styles';

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  const config = useAppSelector(
    (state: RootState) => state.configReducer.config
  );

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const onClickRef = (url: string) => {
    window.open(url);
  };

  return item.visible ? (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={onOpenDialog}>
          {item.coverVisible && (
            <Carousel
              indicators={item.covers?.length > 1}
              navButtonsAlwaysInvisible={!(item.covers?.length > 1)}
            >
              {[
                item.cover || config?.image?.comingSoon,
                ...(item.covers ?? []),
              ].map((element, index) => (
                <CardMedia
                  className={classes.img}
                  component='img'
                  image={element}
                />
              ))}
            </Carousel>
          )}
          <CardContent>
            {item.nameVisible && (
              <Typography color='primary' variant='h6'>
                {item.name}
              </Typography>
            )}
            {item.descriptionVisible && (
              <Box overflow='hidden'>
                <Typography
                  className={themeClasses.cardDescription}
                  variant='body2'
                >
                  {item.description}
                </Typography>
              </Box>
            )}
            {item.technologyVisible && (
              <Typography variant='subtitle2'>{item.technology}</Typography>
            )}
            <Box my={2} />
            {Array.isArray(item.refs) && item.refs.length && (
              <Link
                component='button'
                variant='caption'
                onClick={() => onClickRef(item.refs[0])}
              >
                {item.refs[0]}
              </Link>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog fullWidth maxWidth='md' open={openDialog} onClose={onCloseDialog}>
        <DialogContent>
          {item.coverVisible && (
            <Carousel
              indicators={item.covers?.length > 1}
              navButtonsAlwaysInvisible={!(item.covers?.length > 1)}
            >
              {[
                item.cover || config?.image?.comingSoon,
                ...(item.covers ?? []),
              ].map((element, index) => (
                <CardMedia
                  className={classes.dialogImg}
                  component='img'
                  image={element}
                />
              ))}
            </Carousel>
          )}
          <CardContent>
            {item.nameVisible && (
              <Typography color='primary' variant='h6'>
                {item.name}
              </Typography>
            )}
            {item.descriptionVisible && (
              <Typography variant='body2'>{item.description}</Typography>
            )}
            <Box my={2} />
            {item.technologyVisible && (
              <Typography variant='subtitle2'>{item.technology}</Typography>
            )}
            {Array.isArray(item.refs) && item.refs.length && (
              <Box
                my={2}
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                {item.refs.map((ref) => (
                  <Link
                    component='button'
                    variant='caption'
                    onClick={() => onClickRef(ref)}
                  >
                    {ref}
                  </Link>
                ))}
              </Box>
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
