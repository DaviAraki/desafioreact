import { CheckBox } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchInput } from '../SearchInput';
import { ButtonsContainer, SearchButton, SearchContainer } from './styles';

function SearchComponent() {
  const { t } = useTranslation();

  return (
    <SearchContainer>
      <SearchInput />
      <ButtonsContainer>
        <CheckBox />
        <SearchButton variant='contained'>{t('Assign')}</SearchButton>
        <SearchButton variant='contained'>{t('Archive')}</SearchButton>
        <SearchButton variant='contained'>{t('Schedule')}</SearchButton>
      </ButtonsContainer>
    </SearchContainer>
  );
}

export { SearchComponent };
