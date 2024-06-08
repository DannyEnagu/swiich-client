"use client";

import { useSession } from "next-auth/react";
import Avatar from "../ui/Avatar/Avatar";
import StringAvatar from "../ui/Avatar/StringAvatar";
import useActiveCanvas from "@/lib/hooks/useActiveCanvas";


export default function UserProfileIcon() {
  const { data: session } = useSession();
  const currentUserName = session?.user?.name;
  const profilePic = session?.user?.profilePic;
  const {openRightSide: openRightCanvas} = useActiveCanvas();

  return (
    <button
      style={{background: 'none', border: 'none'}}
      onClick={() => openRightCanvas({
        contentID: session?.user?.id,
        content: 'profile',
        isOpen: true
      })}
    >
      {profilePic
      ? <Avatar
        size={45}
        imgSrc={profilePic}
        imgAlt={`${currentUserName} is the current Logged in user`}
        />
      : <StringAvatar
          name={currentUserName || ''}
          size={45}
        />}
    </button>
  );
}