import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/ChatHeader/Header";
import withContentWrapper from "@/components/dashboard/ContentWrapper";
import Messages from "@/components/dashboard/Messages";
import FilterableNav from "@/components/dashboard/Nav/FilterableNav";

const MessagesWrapper = withContentWrapper(Messages, true);

// create a list of 5 direct messages don't repeat the same user

const directMessages: NavProps[] = [
  {
    contactID: 1,
    contactName: "John Doe",
    profilePic: "",
    type: "dm",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 7,
    lastMessage: "Hello there",
    typing: false,
  },
  {
    contactID: 2,
    contactName: "Christopher Nolan",
    type: "dm",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "unread",
    timeStamps: "10:00 AM",
    messagesCount: 4,
    lastMessage: "Hello there",
    typing: true,
  },
  {
    contactID: 3,
    contactName: "Linus Torvalds",
    profilePic: "",
    type: "dm",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
  },
  {
    contactID: 4,
    contactName: "Tina gregory",
    type: "dm",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
  },
  {
    contactID: 5,
    contactName: "Alice Doe",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
    type: "dm",
  },
];

export default function page() {
  return (
    <div className="dd-content">
      {/* <NavContainer /> */}
      <FilterableNav items={directMessages} />
      <Header isDm />
      <Main>
        <MessagesWrapper />
      </Main>
    </div>
  );
}