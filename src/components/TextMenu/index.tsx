import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import { ConfigurationsMenu } from './styles';
import { useTranslation } from 'react-i18next';
import useViewModel from './ViewModel';

interface MenuProps {
  children?: React.ReactNode;
  text: string;
}

export default function LogoutMenu({ children, text }: MenuProps) {
  const { t } = useTranslation();
  const { anchorEl, handleClickListItem, handleClose, open } = useViewModel();

  return (
    <>
      <ConfigurationsMenu
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <ListItemText primary={t(text)} />
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
        {children}
      </Menu>
    </>
  );
}
