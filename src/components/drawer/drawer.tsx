import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';
import _ from 'lodash';
import { routes } from 'src/routes/routes';
import { useAppSelector } from 'src/redux/store';
import { Props } from './props';
import useStyles from './styles';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { open, onClose } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const config = useAppSelector((state) => state.configReducer.config);

  const onPageClick = (name: string, path: string) => {
    if (
      (config as any)[`${_.lowerCase(name)}Enable`] &&
      location.pathname !== path
    ) {
      navigate(path);
    }
  };

  return (
    <MaterialDrawer
      classes={{ paper: classes.paper }}
      open={open}
      color='inherit'
      onClose={onClose}
      anchor='right'
    >
      <List className={clsx(classes.list)}>
        {routes.map((route) =>
          (config as any)?.[`${_.lowerCase(route.name)}Visible`] ? (
            <ListItem
              key={route.name}
              classes={{
                root: classes.listItem,
                selected: classes.selectedListItem,
              }}
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
