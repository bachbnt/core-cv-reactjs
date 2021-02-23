import useStyles from './styles';
import Props from './types';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const DrawerMenu = (props: Props) => {
  const { items } = props;

  const classes = useStyles();
  console.log(items);

  return (
    <Box className={classes.slider} component='nav'>
      <List>
        {items.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.path}>
            <ListItemIcon className={classes.tile}>
              {<item.icon />}
            </ListItemIcon>
            <ListItemText className={classes.tile}>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerMenu;
