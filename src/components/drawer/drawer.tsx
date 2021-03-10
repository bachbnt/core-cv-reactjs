import useStyles from './styles';
import Props from './types';
import {
  Drawer as BaseDrawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Drawer = (props: Props) => {
  const { items, open, onClose } = props;

  const classes = useStyles();
  console.log(items);

  return (
    <BaseDrawer open={open} onClose={onClose} anchor='right'>
      <Box className={classes.drawer} component='nav'>
        <List>
          {items.map((item, key) => (
            <ListItem button key={key} component={Link} to={item.path}>
              <ListItemIcon className={classes.tile}>
                {<item.icon className={classes.tile} />}
              </ListItemIcon>
              <ListItemText className={classes.tile}>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </BaseDrawer>
  );
};

export default Drawer;
