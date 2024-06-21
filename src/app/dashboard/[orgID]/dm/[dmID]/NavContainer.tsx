'use client'

import NavList from "@/components/dashboard/Nav/NavList";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavLink from "@/components/dashboard/Nav/NavLink";
import DMContact from "@/components/dashboard/Nav/DMContact";
import Nav from "@/components/dashboard/Nav/Nav";
import useSetActiveCanvas from "@/lib/hooks/useSetActiveCanvas";

// Create an array of 5 contacts
const contacts = [
  {
    id: 1,
    contactName: "John Doe",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 2,
    contactName: "Mathew Ayo",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "",
    messagesCount: 99,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'read',
  },
  {
    id: 3,
    contactName: "Mira Kira",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "",
    messagesCount: 99,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 4,
    contactName: "Jeff Dannyplus",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
    typing: true,
  },
  {
    id: 5,
    contactName: "Jeff Dannyplus",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Jonh Doe: how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 6,
    contactName: "Tina",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Tina: Where are we on the task?",
    messageStatus: 'unread',
  },
  {
    id: 7,
    contactName: "Alexandra Olamide segundo",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 8,
    contactName: "Jeff Dannyplus",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 9,
    contactName: "Jeff Dannyplus",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 10,
    contactName: "Hasley Lee",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 11,
    contactName: "Michael Jackson",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 12,
    contactName: "Jeff Dannyplus",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "https://via.placeholder.com/50",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
  {
    id: 13,
    contactName: "Tiwa Savage",
    senderStatus: "Online",
    timeStamps: "10 m",
    profilePic: "",
    messagesCount: 3,
    lastMessage: "Hello Jonh Doe, how are you doing?",
    messageStatus: 'unread',
  },
];

export default function NavContainer() {
  const changeActiveContact = useSetActiveCanvas();

  const dmContacts = contacts.map((contact, index) => (
    <NavItem key={index + contact.contactName}>
      <NavLink
        href={`/dashboard/${1}/dm/${index}`}
        onChange={() => changeActiveContact({
          url: `/dashboard/${1}/dm/${index}`,
          id: contact.id,
          name: contact.contactName,
        })}
      >
        <DMContact
          messageStatus={contact.messageStatus}
          contactName={contact.contactName}
          senderStatus={contact.senderStatus}
          timeStamps={contact.timeStamps}
          profilePic={contact.profilePic}
          messagesCount={contact.messagesCount}
          lastMessage={contact.lastMessage}
        />
      </NavLink>;
    </NavItem>
  ));
  return (<Nav showSearch>
      <NavList>
        {dmContacts}
      </NavList>
    </Nav>);  
}