import ProfileAvatar from "@/components/ProfileAvatar";

interface DMAvatarProps {
    userName: string;
    profilePic: string;
    size: number;
};

export default function DMAvatar({
    userName,
    profilePic,
    size}: DMAvatarProps) {
    return (<>
        <ProfileAvatar
            src={profilePic}
            size={size}
            name={userName}
            alt={`user ${userName} profile picture`}
        />
    </>)
}