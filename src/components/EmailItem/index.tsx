import { Checkbox } from "@mui/material";
import { useState } from "react";
import { subMenu } from "../../store/slices/emailSlice";
import { UserInitials } from "../UserInitials";
import {
  Content,
  Date,
  DateAndParticipants,
  EmailContainer,
  MainContent,
  Name,
  Participants,
  Subject,
} from "./styles";

interface EmailItemProps {
  email: subMenu;
}

function EmailItem({ email }: EmailItemProps) {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleMouseOver = () => {
    setShowCheckBox(true);
  };

  const handleMouseOut = () => {
    setShowCheckBox(false);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <EmailContainer onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
      <MainContent>
        {showCheckBox ? (
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        ) : (
          <UserInitials size={"medium"}>{email.owner}</UserInitials>
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
              <UserInitials size={"small"} key={user}>
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
