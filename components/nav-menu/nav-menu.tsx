import { Drawer, Button } from '@material-ui/core';
import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {menu} from '../../configs/menu';
import NavBar from '../nav-bar';

const NavMenu:React.FC = () => {
  const [menuOpen, changeMenuOpen] = useState<boolean>(false);
  const handleMenuOpen = (e: React.MouseEvent) => {
    changeMenuOpen(!menuOpen)
  }
  const menuItems = menu.map((item, i) => (
    <NavBar menuItem={item} key={i} handleMenuClose={handleMenuOpen}/>
  ))
  return (
    <header>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuOpen}>
        <MenuIcon />
      </Button>
      <Drawer anchor='left' open={menuOpen} onClose={handleMenuOpen}>
        {menuItems}
      </Drawer> 
    </header> 
  )
}

export default NavMenu;