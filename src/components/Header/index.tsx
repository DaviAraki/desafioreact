import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconMenu from '../IconMenu';
import LanguageSelector from '../LanguageSelector';
import TextMenu from '../TextMenu';
import { HeaderContainer, MenuContainer, ThemeButton } from './styles';
import useViewModel from './ViewModel';

const Header = () => {
  const { onCLickChangeTheme, onButtonLogoutClick } = useViewModel();

  return (
    <HeaderContainer>
      <IconMenu>
        <ThemeButton variant='contained' onClick={onCLickChangeTheme}>
          Change Theme
        </ThemeButton>
        <LanguageSelector />
      </IconMenu>
      <MenuContainer>
        <TextMenu text='Help' />
        <TextMenu text='Settings'>
          <Button onClick={onButtonLogoutClick}>Logout</Button>
        </TextMenu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export { Header };
