import { UserInitialsContainer } from './styles';

interface UserInitialsProps {
  children?: React.ReactNode;
  size: 'small' | 'medium';
}

function UserInitials({ children, size }: UserInitialsProps) {
  return <UserInitialsContainer size={size}>{children}</UserInitialsContainer>;
}

export { UserInitials };
