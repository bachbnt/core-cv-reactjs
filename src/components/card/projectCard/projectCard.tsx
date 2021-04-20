import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import clsx from 'clsx';
import Typography from '../../typography/typography';
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
        <CardMedia component='img' image={item.cover} />
        <CardContent>
          <Typography
            className={clsx(classes.primary, classes.bold)}
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
