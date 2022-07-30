import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const [language, setLanguage] = useLocalStorage("language", "ptBR");
  const [value, setValue] = useState(language);
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLanguage((event.target as HTMLInputElement).value);
  };

  const changeLanguage = (chosenLanguage: string) => {
    setLanguage(chosenLanguage);
    setValue(chosenLanguage);
    i18n.changeLanguage(chosenLanguage);
  };

  return (
    <FormControl>
      <FormLabel id="language-selector">{t("Choose_Language")}</FormLabel>
      <RadioGroup
        aria-labelledby="language-selector"
        name="language-selector"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="ptBR" control={<Radio />} label="pt-BR" />
        <FormControlLabel value="enUS" control={<Radio />} label="en-US" />
        <FormControlLabel value="esES" control={<Radio />} label="es-ES" />
      </RadioGroup>
    </FormControl>
  );
}
