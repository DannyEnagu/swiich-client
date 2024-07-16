import { useEffect } from "react";
import { useSession } from "next-auth/react";
import useSocket from "@/lib/hooks/useSocket";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectActiveDepartment, selectActiveDM } from "../features/uiSlice";
import { addMessage } from "../features/messageSlice";

export default function useSocketConnection(userId: CurrentUser["id"]) {
  const socket = useSocket();
  const dispatch = useAppDispatch();
  const activeDm = useAppSelector(selectActiveDM);
  const activeDepartment = useAppSelector(selectActiveDepartment);
  const session = useSession();
  const authUserID = session.data?.user?.id;
  const dmMsgKey = `dm-${authUserID}-${activeDm?.id}`;
  const groupMsgKey = `group-${activeDepartment?.id}`;
  
  useEffect(() => {
    if (userId && socket) {
        socket.emit("userConnected", userId);
    }

    function dispatchGroupMessage(message: Message) {
        dispatch(addMessage({
            key: groupMsgKey,
            value: message
        }));
    }

    function dispatchPrivateMessage(message: Message) {
        dispatch(addMessage({
          key: dmMsgKey,
          value: message
        }));
    }

    socket.on('groupMessage', dispatchGroupMessage);

    socket.on('private-message', dispatchPrivateMessage);
    
    return () => {
        socket.off('groupMessage');
        socket.off('private-message');
    };
}, [
        userId,
        socket,
        dispatch,
        activeDm,
        activeDepartment,
        session,
        authUserID,
        dmMsgKey,
        groupMsgKey
    ]);
}