import {
  Box,
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
  const { open, onClose, items } = props;
  const history = useHistory();
  const location = useLocation();

  const onPageClick = (path: string) => {
    history.push(path);
  };

  return (
    <MaterialDrawer
      classes={{ paper: classes.paper }}
      open={open}
      color='inherit'
      onClose={onClose}
      anchor='right'>
      <List className={classes.list}>
        {items.map((item) => (
          <ListItem
            classes={{
              root: classes.listItem,
              selected: classes.selectedListItem,
            }}
            key={item.name}
            button
            selected={location.pathname === item.path}
            onClick={() => {
              onPageClick(item.path);
            }}>
            <ListItemText classes={{}} primary={item.name}></ListItemText>
          </ListItem>
        ))}
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
