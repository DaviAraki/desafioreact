import { CheckBox } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../SearchInput";
import {
  Buttons,
  ButtonsContainer,
  SearchButton,
  SearchContainer,
} from "./styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useDispatch } from "react-redux";
import { setIsFiltering } from "../../store/slices/emailSlice";

function SearchComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setIsFiltering());
  }

  return (
    <SearchContainer>
      <SearchInput />
      <ButtonsContainer>
        <Buttons>
          <CheckBox />
          <SearchButton variant='contained'>{t("Assign")}</SearchButton>
          <SearchButton variant='contained'>{t("Archive")}</SearchButton>
          <SearchButton variant='contained'>{t("Schedule")}</SearchButton>
        </Buttons>
        <FilterAltIcon onClick={handleClick} />
      </ButtonsContainer>
    </SearchContainer>
  );
}

export { SearchComponent };
