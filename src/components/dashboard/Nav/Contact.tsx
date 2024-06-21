'use client';

import NavLink from './NavLink';
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';
import DMContact from './DMContact';
import GroupContact from './GroupContact';
import { getOrgID } from '@/utils/helpers';
import { usePathname } from 'next/navigation';

// interface ContactProps {
//   contact: DMContactProps | GroupContactProps;
// };


export default function Contact({ contact }: any) {
  const { switchOpenCanvas: changeActiveCanvas } = useSetActiveCanvas();
  const currPathname = usePathname();
  const { type } = contact;
  // Useful for dashboard inbox page to prevent broken links
  const isDM = (type === 'group' && contact.hasOwnProperty('contactID')) || (type === 'dm' && contact.hasOwnProperty('contactID'));

  const getContactID = isDM ? contact.contactID : contact.groupID;
  const orgID = getOrgID(currPathname);
  const linkRef = `/dashboard/${orgID}/${type}/${getContactID}`;

  const updateActiveCanvas = () => {
    try {
      changeActiveCanvas({
        id: getContactID,
        url: linkRef,
        name: contact.contactName || contact.groupTitle || contact.boardName,
        type: type === 'group' ? 'department' : type,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (<NavLink
      href={linkRef}
      onClick={() => updateActiveCanvas()}>
      {isDM ? (
        <DMContact {...contact} />
      ) : (
        <GroupContact {...contact} />
      )}
  </NavLink>)
}