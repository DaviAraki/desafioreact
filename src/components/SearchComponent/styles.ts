import styled from "styled-components";
import { styled as styledMaterial } from "@mui/material/styles";
import { Button } from "@mui/material";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchButton = styledMaterial(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
