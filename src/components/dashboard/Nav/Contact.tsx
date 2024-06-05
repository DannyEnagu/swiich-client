import NavLink from './NavLink';
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';
import DMContact from './DMContact';
import GroupContact from './GroupContact';

// interface ContactProps {
//   contact: DMContactProps | GroupContactProps;
// };


export default function Contact({ contact }: any) {
    const changeActiveCanvas = useSetActiveCanvas();
    const { type } = contact;
    // Useful for dashboard inbox page to prevent broken links
    const isDM = (type === 'group' && contact.hasOwnProperty('contactID')) || (type === 'dm' && contact.hasOwnProperty('contactID'));

    const getContactID = isDM ? contact.contactID : contact.groupID;

    const linkRef = `/dashboard/${1}/${type}/${getContactID}`;

    return (<NavLink
        href={linkRef}
        onClick={() => changeActiveCanvas({
          id: contact.contactID || contact.groupID,
          url: linkRef,
          name: contact.contactName || contact.groupTitle || contact.boardName
        })}>
        {isDM ? (
          <DMContact {...contact} />
        ) : (
          <GroupContact {...contact} />
        )}
    </NavLink>)
  }