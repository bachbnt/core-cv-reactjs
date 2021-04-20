import { Box } from '@material-ui/core';
import clsx from 'clsx';
import { Image } from '../../constants/image';
import useStyles from './styles';

const Error = () => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container)}>
      <img src={Image.ERROR} alt='error' />
    </Box>
  );
};

export default Error;
