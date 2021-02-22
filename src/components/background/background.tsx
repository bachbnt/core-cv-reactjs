import useStyles from './styles';
import Props from './types';
import { Box } from '@material-ui/core';

const Background = (props: Props) => {
  const classes = useStyles();
  const { className, children } = props;

  return (
    <Box className={`${classes.container}${className}`}>
      <Box className={classes.backgroundImage} />
      <Box className={classes.backgroundColor} />
      {children}
    </Box>
  );
};

export default Background;
