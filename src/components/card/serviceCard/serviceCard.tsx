import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import clsx from 'clsx';
import Typography from '../../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const ServiceCard = (props: Props) => {
  const classes = useStyles();
  const { item } = props;
  console.log(item);
  return (
    <MuiCard classes={{ root: classes.root }} className={classes.background}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={clsx(classes.primary, classes.bold)}
            variant='h6'
            align='center'>
            {item.name}
          </Typography>
          <Box mt={2}>
            <Typography variant='body2' align='justify'>
              {item.description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default ServiceCard;
