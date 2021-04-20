import { Box } from '@material-ui/core';
import clsx from 'clsx';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Props } from './props';
import useStyles from './styles';

const Layout = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Box className={clsx(classes.container)}>
      <Header />
      <Box className={clsx(classes.content)}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
