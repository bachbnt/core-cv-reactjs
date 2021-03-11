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
import { routeData } from '../../routes/routeData';

const Drawer = (props: Props) => {
  const { open, onClose, currentRoute } = props;
  const classes = useStyles();

  return (
    <BaseDrawer open={open} onClose={onClose} anchor='right'>
      <Box className={classes.drawer} component='nav'>
        <List>
          {Object.values(routeData).map((route, index) => (
            <ListItem
              selected={currentRoute.name === route.name}
              classes={{
                root: classes.root,
                selected: classes.selected,
              }}
              button
              key={index}
              component={Link}
              to={route.path}>
              <ListItemIcon>
                {
                  <route.icon
                    className={
                      currentRoute.name === route.name
                        ? classes.selectedIcon
                        : classes.unselectedIcon
                    }
                  />
                }
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary:
                    currentRoute.name === route.name
                      ? classes.selectedTitle
                      : classes.unselectedTitle,
                }}
                primary={route.title}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </BaseDrawer>
  );
};

export default Drawer;
