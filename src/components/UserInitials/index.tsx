import { UserInitialsContainer } from './styles';

interface UserInitialsProps {
  children?: React.ReactNode;
}

function UserInitials({ children }: UserInitialsProps) {
  return <UserInitialsContainer>{children}</UserInitialsContainer>;
}

export { UserInitials };
