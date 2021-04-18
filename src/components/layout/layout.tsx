import { Box } from '@material-ui/core';
import { UIPage } from '../../models/ui';
import { RouteName } from '../../routes/routeName';
import { RoutePath } from '../../routes/routePath';
import { Props } from './props';
import useStyles from './styles';

const Layout = (props: Props) => {
  const classes = useStyles();

  const items: UIPage[] = [
    {
      name: RouteName.HOME,
      path: RoutePath.HOME,
    },
    {
      name: RouteName.ME,
      path: RoutePath.ME,
    },
    {
      name: RouteName.RESUME,
      path: RoutePath.RESUME,
    },
    {
      name: RouteName.PROJECT,
      path: RoutePath.PROJECT,
    },
    {
      name: RouteName.SERVICE,
      path: RoutePath.SERVICE,
    },
    {
      name: RouteName.CONTACT,
      path: RoutePath.CONTACT,
    },
  ];

  return <Box></Box>;
};

export default Layout;
