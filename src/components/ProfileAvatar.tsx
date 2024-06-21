import Avatar from "./ui/Avatar/Avatar";
import StringAvatar from "./ui/Avatar/StringAvatar";

interface ProfileAvatarProps {
    src?: string;
    size: number;
    name: string;
    alt: string;
};

export default function ProfileAvatar({
    src, size, alt, name
}: ProfileAvatarProps) {
    return (<>
        {src
            ? <Avatar
              size={size}
              imgSrc={src}
              imgAlt={alt}
              />
            : <StringAvatar
                name={name}
                size={size}
              />}
    </> );
}