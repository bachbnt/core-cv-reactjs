import Constant from '@core/constants';
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Config } from '@models/config';
import { useAppSelector } from '@redux/store';
import { routes } from '@routes/routes';
import { lowerCase } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import Props from './props';
import useStyles from './styles';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { open, onClose } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;

  const onPageClick = async (component: string, path: string) => {
    if (
      (config as any)[`${lowerCase(component)}Enable`] &&
      location.pathname !== path
    ) {
      navigate(path);
    } else {
      copyUrl(path);
    }
  };

  const copyUrl = async (path: string) => {
    const url = Constant.DOMAIN + path;
    await navigator.clipboard.writeText(url);
  };

  return (
    <MuiDrawer open={open} color='inherit' onClose={onClose} anchor='right'>
      <List>
        {routes.map((route) =>
          (config as any)?.[`${lowerCase(route.component)}Visible`] ? (
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
    </MuiDrawer>
  );
};

export default Drawer;
