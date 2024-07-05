'use client';

import FilterableNav from "@/components/dashboard/Nav/FilterableNav";
import { addMenu, selectMenuByType } from "@/lib/features/reusableContextualMenuSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetPrivateContactsQuery } from "@/services/reusableContextualMenuService";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function PrivateContacts() {
  const {data: session} = useSession();
  const dispatch = useAppDispatch();
  const privateContacts =  useAppSelector((state) => selectMenuByType(state, "dm"));
  const authUserID = session?.user?.id;
  const { data, isError, isLoading } = useGetPrivateContactsQuery(authUserID);

  useEffect(() => {
    if (data && !isError && !isLoading) {
      const contacts: NavProps[] = data.map((contact: any) => ({
        contactID: contact.senderId === authUserID ? contact.recipientId : contact.senderId,
        contactName: contact.senderId === authUserID ? contact.
        recipient.name : contact.sender.name,
        profilePic: '',
        type: "dm",
        senderStatus: "Online",
        messageStatus: "read",
        timeStamps: contact.createdAt,
        messagesCount: 1,
        lastMessage: contact.content,
        typing: false,
      }));
      dispatch(addMenu(contacts))
    };
  }, [
    data,
    isError,
    isLoading,
    dispatch,
    authUserID,
  ]);
  return (<FilterableNav
    items={privateContacts}
    isLoading={isLoading} />);
}