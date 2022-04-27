import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import clsx from 'clsx';
import { Image } from 'src/constants/image';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return item.visible ? (
    <MuiCard
      classes={{ root: classes.root }}
      className={clsx(classes.background)}
    >
      <CardActionArea>
        {item.coverVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.cover ? item.cover : Image.COMING_SOON}
          />
        )}
        <CardContent>
          {item.nameVisible && (
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.bold)}
              variant='h6'
            >
              {item.name}
            </Typography>
          )}
          {item.technologyVisible && (
            <Typography className={clsx(classes.bold)} variant='subtitle2'>
              {item.technology}
            </Typography>
          )}
          {item.descriptionVisible && (
            <Box mt={2}>
              <Typography variant='body2'>{item.description}</Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </MuiCard>
  ) : (
    <div />
  );
};

export default ProjectItem;
