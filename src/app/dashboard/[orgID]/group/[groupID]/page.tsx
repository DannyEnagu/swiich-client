import Main from "@/components/dashboard/MainContainer";
import GroupContacts from "../GroupContacts";
import GMHeader from "@/components/dashboard/ChatHeaders/GroupMessagesHeader";
import GroupMessagesWrapper from "../GroupMessagesWrapper";


export default function page() {
  return (
    <div className="dd-content">
      <GroupContacts />
      <GMHeader />
      <Main>
        <GroupMessagesWrapper />
      </Main>
    </div>);
}
