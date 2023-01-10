import { Footer, Header } from '@components';
import { Box } from '@material-ui/core';
import Props from './props';
import useStyles from './styles';

const Layout = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Box className={classes.container}>
      <Header />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
