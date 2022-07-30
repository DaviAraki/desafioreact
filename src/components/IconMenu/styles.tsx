import { ListItem } from "@mui/material";
import { styled as styledMaterial } from "@mui/material/styles";
import styled from "styled-components";

export const ConfigurationsMenu = styledMaterial(ListItem)`
  width: auto;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
