import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/ChatHeader/Header";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import Messages from "@/components/dashboard/Messages";
import FilterableNav from "@/components/dashboard/Nav/FilterableNav";
import PrivateContacts from "../PrivateContacts";

const MessagesWrapper = withContentWrapper(Messages, true);

// create a list of 5 direct messages don't repeat the same user
export default function page() {
  return (
    <div className="dd-content">
      <PrivateContacts />
      <Header isDm />
      <Main>
        <MessagesWrapper />
      </Main>
    </div>
  );
}