import { Typography } from '@components';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { Config } from '@models/config';
import { useAppSelector } from '@redux/store';
import Props from './props';
import useStyles from './styles';

const ExperienceItem = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;

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
            image={item.image || config?.image?.comingSoon}
          />
        )}
      </CardActionArea>
    </Card>
  );
};

export default ExperienceItem;
