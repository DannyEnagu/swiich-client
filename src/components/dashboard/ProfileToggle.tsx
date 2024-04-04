import Avatar from "../Avatar/Avatar";
import StringAvatar from "../Avatar/StringAvatar";

interface ProfileToggleProps {
  currentUserName: string;
  profilePic: string;
};

export default function ProfileToggle({ currentUserName, profilePic }: ProfileToggleProps) {
  return (
    <>
      {profilePic
      ? <Avatar
        size={45}
        imgSrc={profilePic}
        imgAlt={`${currentUserName} is the current Loged in user`}
        />
      : <StringAvatar
          name="John Doe"
          size={45}
        />}
    </>
  );
}