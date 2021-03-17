import useStyles from './styles';
import Props from './types';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routeData } from '../../routes/routeData';

const Intro = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Box className={classes.container}>
      <Box className={classes.infoContainer}>
        <Typography className={classes.nameText} variant='h1'>
          {item.name}
        </Typography>
        <Typography className={classes.jobText} variant='h4'>
          {item.job}
        </Typography>
        <Typography className={classes.descriptionText} variant='h5'>
          {item.description}
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button
            classes={{ root: classes.aboutButton }}
            color='inherit'
            size='large'
            component={Link}
            {...({ to: routeData.about.path } as any)}>
            {routeData.about.name} Me
          </Button>
          <Button
            classes={{ root: classes.contactButton }}
            variant='outlined'
            color='inherit'
            size='large'
            component={Link}
            {...({ to: routeData.contact.path } as any)}>
            {routeData.contact.name} Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
