'use client';

import FilterableNav from "@/components/dashboard/Nav/FilterableNav";

export default function PrivateContacts() {
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
    return (
    <FilterableNav items={directMessages} />
  );
}