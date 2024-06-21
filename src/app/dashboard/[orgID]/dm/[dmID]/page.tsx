import Main from "@/components/dashboard/MainContainer";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import Messages from "@/components/dashboard/Messages";
import PrivateContacts from "../PrivateContacts";
import DMHeader from "@/components/dashboard/ChatHeaders/DirectMessagesHeader";

const MessagesWrapper = withContentWrapper(Messages, true);

export default function page() {
  return (
    <div className="dd-content">
      <PrivateContacts />
      <DMHeader />
      <Main>
        <MessagesWrapper />
      </Main>
    </div>
  );
}