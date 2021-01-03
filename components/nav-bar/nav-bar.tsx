import React from 'react';
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuItemType } from "../../configs/menu";

const NavBar:React.FC<{menuItem:MenuItemType, handleMenuClose(e:React.MouseEvent):void}> = ({menuItem, handleMenuClose}) => {
  return (
    <div onClick={handleMenuClose}>
      <Link href={menuItem.link}>
        <MenuItem>
            {menuItem.text}
        </MenuItem>
      </Link>
    </div>
  )
}

export default NavBar;