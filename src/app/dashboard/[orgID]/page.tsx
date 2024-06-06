import Main from "@/components/dashboard/MainContainer";
import withContentWrapper from "@/components/dashboard/ContentWrapper";
import Welcome from "@/components/dashboard/Welcome";
import FilterableNav from "@/components/dashboard/Nav/FilterableNav";

const WelcomeWrapper = withContentWrapper(Welcome);

const inboxItems: NavProps[] = [
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
    contactID: 75,
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
    contactID: 50,
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
    contactID: 5000,
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
    contactID: 1000,
    contactName: "Group One",
    type: "group",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
  },
  {
    contactID: 80,
    contactName: "Group Two",
    type: "group",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
  },
  {
    contactID: 100,
    contactName: "Group Three",
    type: "group",
    profilePic: "",
    senderStatus: "Online",
    messageStatus: "read",
    timeStamps: "10:00 AM",
    messagesCount: 0,
    lastMessage: "Hello there",
    typing: false,
  },
];  

export default function page() {
  return (
    <div className="dd-content">
      <FilterableNav items={inboxItems} />
      <Main>
        <WelcomeWrapper />
      </Main>
    </div>
  );
}