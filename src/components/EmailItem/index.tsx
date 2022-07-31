import { Checkbox } from '@mui/material';
import { subMenu } from '../../store/slices/emailSlice';
import { UserInitials } from '../UserInitials';
import useViewModel from './ViewModel';
import {
  Content,
  Date,
  DateAndParticipants,
  EmailContainer,
  MainContent,
  Name,
  Participants,
  Subject,
} from './styles';

interface EmailItemProps {
  email: subMenu;
}

function EmailItem({ email }: EmailItemProps) {
  const {
    checked,
    handleChange,
    handleMouseLeave,
    handleMouseOver,
    showCheckBox,
  } = useViewModel();

  return (
    <EmailContainer
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <MainContent>
        {showCheckBox ? (
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        ) : (
          <UserInitials size={'medium'}>{email.owner}</UserInitials>
        )}
        <Content>
          <Name>{email.name}</Name>
          <Subject>{email.subject}</Subject>
        </Content>
      </MainContent>

      <DateAndParticipants>
        <Date>15/05/2020</Date>
        <Participants>
          {email.users.map((user: string) =>
            checked && showCheckBox ? (
              <Checkbox />
            ) : (
              <UserInitials size={'small'} key={user}>
                {user}
              </UserInitials>
            )
          )}
        </Participants>
      </DateAndParticipants>
    </EmailContainer>
  );
}

export { EmailItem };
