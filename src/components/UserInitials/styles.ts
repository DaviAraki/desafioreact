import styled from 'styled-components';

interface UserInitialsProps {
  size: 'small' | 'medium';
}

export const UserInitialsContainer = styled.div<UserInitialsProps>`
  width: ${(props) => (props.size === 'small' ? '1.3rem' : '2.5rem')};
  height: ${(props) => (props.size === 'small' ? '1.3rem' : '2.5rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: purple;
  font-weight: bold;
  color: white;
  font-size: ${(props) => (props.size === 'small' ? '0.8rem' : '1rem')};
`;
