import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { Props } from './props';
import useStyles from './styles';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { open, onClose, pages } = props;
  const history = useHistory();
  const location = useLocation();

  const onPageClick = (path: string) => {
    history.push(path);
  };
  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <MaterialDrawer open={open} onClose={onClose} anchor='right'>
      <List>
        {pages.map((page) => (
          <ListItem
            classes={{
              root: classes.root,
              selected: classes.selected,
            }}
            key={page.name}
            button
            selected={isCurrentPath(page.path)}
            onClick={() => {
              onPageClick(page.path);
            }}>
            <ListItemText classes={{}} primary={page.name}></ListItemText>
          </ListItem>
        ))}
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
