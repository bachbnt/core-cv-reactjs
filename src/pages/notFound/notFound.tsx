import { Box } from '@material-ui/core';
import clsx from 'clsx';
import { variables } from 'src/themes/variables';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container)}>
      <img src={variables.error404url} alt='404' />
    </Box>
  );
};

export default NotFound;
