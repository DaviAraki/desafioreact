import styled from 'styled-components';
import { styled as styledMaterial } from '@mui/material/styles';
import { Button } from '@mui/material';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const SearchButton = styledMaterial(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;
