import { CheckBox } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { SearchInput } from '../SearchInput';
import {
  Buttons,
  ButtonsContainer,
  SearchButton,
  SearchContainer,
} from './styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useViewModel from './ViewModel';

function SearchComponent() {
  const { t } = useTranslation();
  const { removeMarked, clickFilter } = useViewModel();

  return (
    <SearchContainer>
      <SearchInput />
      <ButtonsContainer>
        <Buttons>
          <CheckBox />
          <SearchButton variant='contained'>{t('Assign')}</SearchButton>
          <SearchButton variant='contained' onClick={removeMarked}>
            {t('Archive')}
          </SearchButton>
          <SearchButton variant='contained'>{t('Schedule')}</SearchButton>
        </Buttons>
        <FilterAltIcon onClick={clickFilter} />
      </ButtonsContainer>
    </SearchContainer>
  );
}

export { SearchComponent };
