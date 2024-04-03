import styles from './Avatar.module.css';

interface StringAvatarProps {
  name: string;
  size: number;
};

function stringToColorCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
}



export default function StringAvatar({name, size}: StringAvatarProps) {
  return (
    <div 
      className={`${styles.stringAvatar} ${size > 35 ? 'rounded-img' : 'rounded-img-sm'}`}
      style={{
        backgroundColor: stringToColorCode(name),
        width: size,
        height: size
      }}
    >
      {`${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`}
    </div>
  );
}