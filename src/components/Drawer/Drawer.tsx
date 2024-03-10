import Constant from '@core/constants';
import {
  List,
  ListItem,
  ListItemText,
  Drawer as MuiDrawer,
} from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import { routes } from '@routes/routes';
import lowerCase from 'lodash/lowerCase';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import Props from './props';

const Drawer = (props: Props) => {
  const { open, onClose } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const config = useAppSelector(
    (state: RootState) => state.configReducer.config
  );

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
                onPageClick(route.component, route.path);
              }}
            >
              <ListItemText primary={t(route.name)}></ListItemText>
            </ListItem>
          ) : null
        )}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
