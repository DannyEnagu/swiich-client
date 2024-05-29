import Image from 'next/image';
import styles from './Avatar.module.css';

interface AvatarProps {
  imgSrc: string;
  imgAlt: string;
  size: number;
};

export default function Avatar({imgSrc, size, imgAlt}: AvatarProps) {
  return (
    <Image
      className={`${styles.avatar}
        ${size > 35 ? 'rounded-img' : 'rounded-img-sm'}`
      }
      src={imgSrc || 'https://via.placeholder.com/50'}
      width={size}
      height={size}
      alt={imgAlt}
    />
  );
}