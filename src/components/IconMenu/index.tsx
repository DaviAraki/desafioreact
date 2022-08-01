import * as React from 'react';
import Menu from '@mui/material/Menu';
import { ConfigurationsMenu, MenuContainer } from './styles';
import useViewModel from './ViewModel';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuProps {
  children?: React.ReactNode;
}

export default function IconMenu({ children }: MenuProps) {
  const { anchorEl, handleClickListItem, handleClose, open } = useViewModel();

  return (
    <>
      <ConfigurationsMenu
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <MenuIcon />
      </ConfigurationsMenu>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        <MenuContainer>{children}</MenuContainer>
      </Menu>
    </>
  );
}
