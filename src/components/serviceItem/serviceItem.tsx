import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import clsx from 'clsx';
import { Typography } from 'src/components';
import useThemeStyles from 'src/themes/styles';
import Props from './props';
import useStyles from './styles';

const ServiceItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  return item.visible ? (
    <MuiCard className={clsx(classes.card, themeClasses.card)}>
      <CardActionArea>
        <CardContent className={themeClasses.cardContent}>
          {item.nameVisible && (
            <Typography color='primary' variant='h6' align='center'>
              {item.name}
            </Typography>
          )}
          {item.descriptionVisible && (
            <Box mt={2} overflow='hidden'>
              <Typography
                className={themeClasses.cardDescription}
                variant='body2'
                align='center'
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

export default ServiceItem;
