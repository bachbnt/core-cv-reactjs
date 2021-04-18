import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router';
import Button from '../button/button';
import Drawer from '../drawer/drawer';
import { Props } from './props';
import useStyles from './styles';

const Header = (props: Props) => {
  const classes = useStyles();
  const { pages } = props;
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const onPageClick = (path: string) => {
    history.push(path);
  };
  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar>
        <Button onClick={() => {}}>
          <Typography>CV</Typography>s
        </Button>
        {pages.map((page) => (
          <Button
            onClick={() => {
              onPageClick(page.path);
            }}>
            <Typography>{page.name}</Typography>
          </Button>
        ))}
        <IconButton>
          <MdMenu />
        </IconButton>
      </Toolbar>
      <Drawer open={open} onClose={onHamburgerClick} pages={pages} />
    </AppBar>
  );
};

export default Header;
