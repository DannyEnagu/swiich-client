import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/components/ui/Avatar/Avatar";

interface GroupAvatarProps {
    src: string;
    alt: string;
    size: number;
};

export default function GroupAvatar({
    src,
    alt,
    size
}: GroupAvatarProps) {
    return (
        <>
        {src
          ? <Avatar
              imgSrc={src}
              size={size}
              imgAlt={alt}
            />
          : <FontAwesomeIcon
            style={{ height: size, width: size }}
            icon={faHashtag} />}
        </>
    );
}