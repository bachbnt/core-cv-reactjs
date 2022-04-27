import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import clsx from 'clsx';
import { routes } from 'src/routes/routes';
import { Props } from './props';
import useStyles from './styles';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { open, onClose } = props;
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  const onPageClick = (path: string) => {
    if (location.pathname !== path) {
      history.push(path);
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
        {routes.map((route) => (
          <ListItem
            key={route.name}
            classes={{
              root: classes.listItem,
              selected: classes.selectedListItem,
            }}
            button
            selected={location.pathname === route.path}
            onClick={() => {
              onPageClick(route.path);
            }}
          >
            <ListItemText primary={t(route.name)}></ListItemText>
          </ListItem>
        ))}
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
