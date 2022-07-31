import { useCallback } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../i18n';

export default function LanguageSelectorViewModel() {
  const [language, setLanguage] = useLocalStorage('language', 'ptBR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLanguage((event.target as HTMLInputElement).value);
  };

  const changeLanguage = useCallback(
    (chosenLanguage: string) => {
      setLanguage(chosenLanguage);
      i18n.changeLanguage(chosenLanguage);
    },
    [setLanguage]
  );

  return {
    language,
    handleChange,
    changeLanguage,
  };
}
