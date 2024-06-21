"use client";

import { useSession } from "next-auth/react";
import useSetActiveCanvas from "@/lib/hooks/useSetActiveCanvas";
import ProfileAvatar from "../ProfileAvatar";
import { usePathname } from "next/navigation";


export default function UserProfileIcon() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const currentUserName = session?.user?.name;
  const profilePic = session?.user?.profilePic;
  const {switchOpenCanvas: openRightCanvas} = useSetActiveCanvas();

  return (
    <button
      style={{background: 'none', border: 'none'}}
      onClick={() => openRightCanvas({
        id: session?.user?.id,
        name: currentUserName || '',
        type: 'profile',
        url: pathname,
        rightSidebarContentType: 'profile',
        isRightSidebarOpen: true
      })}
    >
      <ProfileAvatar
        src={profilePic}
        size={45}
        name={currentUserName || ''}
        alt={`user ${currentUserName} profile picture`}
      />
    </button>
  );
}