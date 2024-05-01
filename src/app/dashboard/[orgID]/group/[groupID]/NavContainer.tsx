import NavList from "@/components/dashboard/Nav/NavList";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavLink from "@/components/dashboard/Nav/NavLink";
import Nav from "@/components/dashboard/Nav/Nav";
import GroupContact from "@/components/dashboard/Nav/GroupContact";
import Modal from "@/components/Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function NavContainer() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink
            to="/"
            isActive={true}
          >
            <GroupContact
              groupTitle="General"
              groupMsgCount={5}
              groupImg="https://via.placeholder.com/50"
              isPublicGroup={false}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <GroupContact
              groupTitle="Announcements"
              groupMsgCount={8}
              isPublicGroup={false}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <GroupContact
              groupTitle="Management"
              groupMsgCount={84}
              isPublicGroup
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <GroupContact
              groupTitle="Marketing"
              groupMsgCount={50}
              isPublicGroup
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <GroupContact
              groupTitle="Development"
              groupMsgCount={6}
              isPublicGroup
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <Modal>
            <Modal.Summary>
              <span className="py-sm row">
                <FontAwesomeIcon icon={faPlus} size="xl" />
                <span className="mx-sm">Add Group</span>
              </span>
            </Modal.Summary>
            <Modal.Content>
              <p>Modal Content</p>
            </Modal.Content>
          </Modal>
        </NavItem>
      </NavList>
    </Nav>
  );
}