import styled from "styled-components";
import { styled as styledMaterial } from "@mui/material/styles";
import { Button } from "@mui/material";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #2e3b40;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const ThemeButton = styledMaterial(Button)`
  background-color: ${(props) => props.theme.palette.secondary.main};
`;
