import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import clsx from 'clsx';
import { Typography } from 'src/components';
import useThemeStyles from 'src/themes/styles';
import variables from 'src/themes/variables';
import Props from './props';
import useStyles from './styles';

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  return item.visible ? (
    <MuiCard className={clsx(classes.card)}>
      <CardActionArea>
        {item.coverVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.cover ? item.cover : variables.comingSoonUrl}
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
    </MuiCard>
  ) : (
    <div />
  );
};

export default ProjectItem;
