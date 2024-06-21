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

// Make the text color to be white
// if the bg color is black or any dark color.
function textColorTransform(bgColor: string) {
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? 'black' : 'white';
}

export default function StringAvatar({name='user name', size}: StringAvatarProps) {
  const transformName = name.toUpperCase();
  const bgColor = stringToColorCode(name);
  const textColor = textColorTransform(bgColor);
  return (
    <div 
      className={`${styles.stringAvatar} ${size > 35 ? 'rounded-img' : 'rounded-img-sm'}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: size,
        height: size
      }}
    >
      {transformName && `${transformName.split(' ')[0][0]}${transformName.split(' ')[1]
        ? transformName.split(' ')[1][0]
        : ''}
      `}
    </div>
  );
}