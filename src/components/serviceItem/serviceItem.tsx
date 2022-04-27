import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import clsx from 'clsx';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const ServiceItem = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return item.visible ? (
    <MuiCard
      classes={{ root: classes.root }}
      className={clsx(classes.background, classes.center)}
    >
      <CardActionArea>
        <CardContent>
          {item.nameVisible && (
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.bold)}
              variant='h6'
              align='center'
            >
              {item.name}
            </Typography>
          )}
          {item.descriptionVisible && (
            <Box mt={2}>
              <Typography variant='body2' align='center'>
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

export default ServiceItem;
