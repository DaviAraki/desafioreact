import { Subject } from '@mui/icons-material';
import { subMenu } from '../../store/slices/emailSlice';
import { UserInitials } from '../UserInitials';
import {
  Content,
  Date,
  DateAndParticipants,
  EmailContainer,
  Name,
  Participants,
} from './styles';

interface EmailItemProps {
  email: subMenu;
}

function EmailItem({ email }: EmailItemProps) {
  return (
    <EmailContainer>
      <UserInitials>{email.owner}</UserInitials>
      <Content>
        <Name>{email.name}</Name>
        <Subject>{email.subject}</Subject>
      </Content>
      <DateAndParticipants>
        <Date>15/05/2020</Date>
        <Participants>
          {email.users.map((user: string) => (
            <UserInitials>{user}</UserInitials>
          ))}
        </Participants>
      </DateAndParticipants>
    </EmailContainer>
  );
}

export { EmailItem };
