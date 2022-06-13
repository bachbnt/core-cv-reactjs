import { Box, Card, CardActionArea, CardContent } from '@material-ui/core';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const EducationItem = (props: Props) => {
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
          {item.degreeVisible && (
            <Typography variant='subtitle1'>{item.degree}</Typography>
          )}
          {item.majorVisible && (
            <Box mt={2}>
              <Typography variant='body2'>{item.major} </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EducationItem;
