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

const ProjectCard = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <MuiCard
      classes={{ root: classes.root }}
      className={clsx(classes.background)}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component='img'
          image={item.cover ? item.cover : Image.COMING_SOON}
        />
        <CardContent>
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.bold)}
            variant='h6'>
            {item.name}
          </Typography>
          <Typography className={clsx(classes.bold)} variant='subtitle2'>
            {item.technology}
          </Typography>
          <Box mt={2}>
            <Typography variant='body2'>{item.summary}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default ProjectCard;
