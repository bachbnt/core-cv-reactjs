import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { Typography } from 'src/components';
import variables from 'src/themes/variables';
import Props from './props';
import useStyles from './styles';

const ExperienceItem = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Card elevation={3}>
      <CardActionArea>
        <CardContent>
          {item.nameVisible && (
            <Typography color='primary' variant='h6'>
              {item.name.toUpperCase()}
            </Typography>
          )}
          {item.positionVisible && (
            <Typography variant='subtitle1'>{item.position}</Typography>
          )}
          {item.responsibilityVisible && (
            <Box mt={2}>
              <Typography variant='body2'>{item.responsibility} </Typography>
            </Box>
          )}
        </CardContent>
        {item.imageVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.image ? item.image : variables.comingSoonUrl}
          />
        )}
      </CardActionArea>
    </Card>
  );
};

export default ExperienceItem;
