import styled from 'styled-components';

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  flex: 1;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

export const Name = styled.h4`
  font-size: 1.2rem;
`;

export const Subject = styled.h5`
  font-size: 1rem;
`;

export const DateAndParticipants = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Date = styled.p`
  font-size: 0.8rem;
`;

export const Participants = styled.div`
  display: flex;
  gap: 0.2rem;
`;
