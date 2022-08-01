import { Button } from '@mui/material';
import { styled as styledMaterial } from '@mui/material/styles';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const LoginButton = styledMaterial(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;
