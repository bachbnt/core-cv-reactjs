import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { Constant } from 'src/core/constants';
import { useAppSelector } from 'src/redux/store';
import { routes } from 'src/routes/routes';
import Props from './props';
import useStyles from './styles';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { open, onClose } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const config = useAppSelector((state: any) => state.configReducer.config);

  const onPageClick = async (name: string, path: string) => {
    if (
      (config as any)[`${_.lowerCase(name)}Enable`] &&
      location.pathname !== path
    ) {
      navigate(path);
    } else {
      copyUrl(path);
    }
  };

  const copyUrl = async (path: string) => {
    const url = Constant.BASE_URL + path;
    await navigator.clipboard.writeText(url);
  };

  return (
    <MaterialDrawer
      open={open}
      color='inherit'
      onClose={onClose}
      anchor='right'
    >
      <List>
        {routes.map((route) =>
          (config as any)?.[`${_.lowerCase(route.name)}Visible`] ? (
            <ListItem
              key={route.name}
              button
              selected={location.pathname === route.path}
              onClick={() => {
                onPageClick(route.name, route.path);
              }}
            >
              <ListItemText primary={t(route.name)}></ListItemText>
            </ListItem>
          ) : (
            <div key={route.name} />
          )
        )}
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
