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

const EducationItem = (props: Props) => {
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
            <Typography color="primary" variant="h6">
              {item.name.toUpperCase()}
            </Typography>
          )}
          {item.degreeVisible && (
            <Typography variant="subtitle1">{item.degree}</Typography>
          )}
          {item.majorVisible && (
            <Box mt={2}>
              <Typography variant="body2">{item.major} </Typography>
            </Box>
          )}
        </CardContent>
        {item.imageVisible && (
          <CardMedia
            className={classes.img}
            component="img"
            image={item.image || config?.image?.comingSoon}
          />
        )}
      </CardActionArea>
    </Card>
  );
};

export default EducationItem;
