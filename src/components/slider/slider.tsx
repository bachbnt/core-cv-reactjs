import useStyles from './styles';
import Props from './types';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Slider = (props: Props) => {
  const { items } = props;

  const classes = useStyles();

  return (
    <Box className={classes.slider} component='nav'>
      <List>
        {items.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.path}>
            <ListItemIcon className={classes.tile}>
              <Home />
            </ListItemIcon>
            <ListItemText className={classes.tile}>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Slider;
