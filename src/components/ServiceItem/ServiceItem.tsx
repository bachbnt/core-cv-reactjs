import { Typography } from '@components';
import { Box, Card, CardActionArea, CardContent } from '@material-ui/core';
import useThemeStyles from '@themes/styles';
import clsx from 'clsx';
import Props from './props';
import useStyles from './styles';

const ServiceItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item, onItemClick } = props;

  return item.visible ? (
    <Card
      key={item.id}
      className={clsx(classes.card, themeClasses.card)}
      onClick={() => {
        onItemClick?.(item);
      }}
    >
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
    </Card>
  ) : (
    <div />
  );
};

export default ServiceItem;
