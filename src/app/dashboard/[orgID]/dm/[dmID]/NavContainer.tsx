import NavList from "@/components/dashboard/Nav/NavList";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavLink from "@/components/dashboard/Nav/NavLink";
import Contact from "@/components/dashboard/Nav/DMContact";
import Nav from "@/components/dashboard/Nav/Nav";

export default function NavContainer() {
  return (<Nav>
      <NavList>
        <NavItem isActive={true}>
          <NavLink to="/">
            <Contact
              messageStatus='unread'
              userName="John Doe"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/group/1">
            <Contact
              messageStatus='read'
              userName="Mathew Ayo"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Mira Kira"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Alexandra Olamide segundo"
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
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Hasley Lee"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Michael Jackson"
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
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Tiwa Savage"
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
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Zara Green"
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
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              userName="Jeff Aba"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic=""
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>);  
}