import { useCallback } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../i18n';

export default function LanguageSelectorViewModel() {
  const [language, setLanguage] = useLocalStorage('language', 'ptBR');

  //essa função recebe a linguagem e chama a função de mudar a linguagem
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLanguage((event.target as HTMLInputElement).value);
  };

  //essa função é responsável por alterar o idioma do sistema lendo o local storage
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
