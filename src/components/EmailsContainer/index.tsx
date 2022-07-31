import { useSelector } from "react-redux";
import { useGetEmailsQuery } from "../../services/emails";
import { RootState } from "../../store";
import { Email, subMenu } from "../../store/slices/emailSlice";
import { EmailItem } from "../EmailItem";

function EmailsContainer() {
  const { data } = useGetEmailsQuery({});
  const { items, isFiltering, emailFilter } = useSelector(
    (state: RootState) => state.emails
  );

  return (
    <div>
      {data &&
        items?.map((email: Email) =>
          email?.subMenuItems?.map((subMenu: subMenu) =>
            isFiltering ? (
              emailFilter && subMenu.subject.includes(emailFilter) ? (
                <EmailItem key={subMenu.id} email={subMenu} />
              ) : null
            ) : (
              <EmailItem key={subMenu.id} email={subMenu} />
            )
          )
        )}
    </div>
  );
}

export { EmailsContainer };
