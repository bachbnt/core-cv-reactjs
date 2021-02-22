import useStyles from './styles';
import Props from './types';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Intro = (props: Props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Box className={classes.container}>
      <Box className={classes.infoContainer}>
        <Typography className={classes.nameText} variant='h1'>
          {data.name}
        </Typography>
        <Typography className={classes.jobText} variant='h3'>
          {data.job}
        </Typography>
        <Typography className={classes.quoteText} variant='h5'>
          {data.quote}
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button
            className={classes.aboutButton}
            color='inherit'
            size='large'
            component={Link}
            {...({ to: '/about' } as any)}>
            About Me
          </Button>
          <Button
            className={classes.contactButton}
            variant='outlined'
            color='inherit'
            size='large'
            component={Link}
            {...({ to: '/contact' } as any)}>
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
