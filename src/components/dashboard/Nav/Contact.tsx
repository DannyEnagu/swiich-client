'use client';

import NavLink from './NavLink';
import useActiveCanvas from '@/lib/hooks/useActiveCanvas';
import DMContact from './DMContact';
import GroupContact from './GroupContact';
import { getOrgID } from '@/utils/helpers';
import { usePathname } from 'next/navigation';

// interface ContactProps {
//   contact: DMContactProps | GroupContactProps;
// };


export default function Contact({ contact }: any) {
  const { setCanvas: changeActiveCanvas } = useActiveCanvas();
  const currPathname = usePathname();
  const { type } = contact;
  // Useful for dashboard inbox page to prevent broken links
  const isDM = (type === 'group' && contact.hasOwnProperty('contactID')) || (type === 'dm' && contact.hasOwnProperty('contactID'));

  const getContactID = isDM ? contact.contactID : contact.groupID;
  const orgID = getOrgID(currPathname);
  const linkRef = `/dashboard/${orgID}/${type}/${getContactID}`;

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