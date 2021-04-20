import { Box } from '@material-ui/core';
import { Image } from '../../constants/image';
import useStyles from './styles';

const Error = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img className={classes.img} src={Image.ERROR} alt='error' />
    </Box>
  );
};

export default Error;
