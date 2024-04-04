import Nav from "@/components/dashboard/Nav/Nav";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavList from "@/components/dashboard/Nav/NavList";
import NavLink from "@/components/dashboard/Nav/NavLink";
import Contact from "@/components/dashboard/Nav/DMContact";


export default function NavContainer() {
  return (
    <Nav>
      <NavList>
        <NavItem isActive={true}>
          <NavLink
          to="/">
            <Contact
              messageStatus='unread'
              contactName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/group/1">
            <Contact
              messageStatus='read'
              contactName="Mathew Ayo"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/group/1">
            <Contact
              messageStatus='read'
              contactName="Annoucement"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/group/1">
            <Contact
              messageStatus='read'
              contactName="Marketing"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/group/1">
            <Contact
              messageStatus='read'
              contactName="Sales"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}