import Main from "@/components/dashboard/MainContainer";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import Welcome from "@/components/dashboard/Welcome";
import InboxContact from "./InboxContacts";

const WelcomeWrapper = withContentWrapper(Welcome); 

export default function page() {
  return (
    <div className="dd-content">
      <InboxContact />
      <Main>
        <WelcomeWrapper />
      </Main>
    </div>
  );
}