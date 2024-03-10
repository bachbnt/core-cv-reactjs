import { Carousel, Typography } from '@components';
import {
  Box,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Link,
} from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import Props from './props';
import useStyles from './styles';

const ProjectDialog = (props: Props) => {
  const classes = useStyles();
  const { item, openDialog, onCloseDialog } = props;

  const { image } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};

  const onClickRef = (url: string) => {
    window.open(url);
  };

  return item.visible ? (
    <Dialog
      key={item.id}
      fullWidth
      maxWidth='md'
      open={openDialog}
      onClose={onCloseDialog}
    >
      <DialogContent>
        {item.coverVisible && (
          <Carousel
            indicators={item.covers?.length > 1}
            navButtonsAlwaysInvisible={!(item.covers?.length > 1)}
          >
            {[item.cover || image?.comingSoon, ...(item.covers ?? [])].map(
              (element, index) => (
                <CardMedia
                  key={element}
                  className={classes.dialogImg}
                  component='img'
                  image={element}
                  loading='lazy'
                />
              )
            )}
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

          {item.technologyVisible && (
            <Box my={2}>
              <Typography variant='subtitle2'>{item.technology}</Typography>
            </Box>
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
                  key={ref}
                  component='button'
                  variant='caption'
                  align='left'
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
  ) : null;
};

export default ProjectDialog;
