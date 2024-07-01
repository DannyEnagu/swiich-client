import Main from "@/components/dashboard/MainContainer";
import PrivateContacts from "../PrivateContacts";
import DMHeader from "@/components/dashboard/ChatHeaders/DirectMessagesHeader";
import PrivateMessagesWrapper from "../PrivateMessagesWrapper";


export default function page() {
  return (
    <div className="dd-content">
      <PrivateContacts />
      <DMHeader />
      <Main>
        <PrivateMessagesWrapper />
      </Main>
    </div>
  );
}