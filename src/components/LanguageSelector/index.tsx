import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTranslation } from 'react-i18next';
import useViewModel from './ViewModel';

export default function LanguageSelector() {
  const { t } = useTranslation();
  const { handleChange, language } = useViewModel();

  return (
    <FormControl>
      <FormLabel id='language-selector'>{t('Choose_Language')}</FormLabel>
      <RadioGroup
        aria-labelledby='language-selector'
        name='language-selector'
        value={language}
        onChange={handleChange}
      >
        <FormControlLabel value='ptBR' control={<Radio />} label='pt-BR' />
        <FormControlLabel value='enUS' control={<Radio />} label='en-US' />
        <FormControlLabel value='esES' control={<Radio />} label='es-ES' />
      </RadioGroup>
    </FormControl>
  );
}
