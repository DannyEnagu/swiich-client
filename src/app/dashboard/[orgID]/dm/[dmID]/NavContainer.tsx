import NavList from "@/components/dashboard/Nav/NavList";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavLink from "@/components/dashboard/Nav/NavLink";
import Contact from "@/components/dashboard/Nav/DMContact";
import Nav from "@/components/dashboard/Nav/Nav";

export default function NavContainer() {
  return (<Nav>
      <NavList>
        <NavItem>
          <NavLink
            to="/dashboard/1"
            isActive={true}
          >
            <Contact
              messageStatus='unread'
              contactName="John Doe"
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
              contactName="Mathew Ayo"
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
              contactName="Mira Kira"
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
              contactName="Jeff Dannyplus"
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
              contactName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Jonh Doe: how are you doing?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              contactName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Tina: Where are we on the task?"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard/1/dm/1">
            <Contact
              messageStatus='unread'
              contactName="Alexandra Olamide segundo"
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
              contactName="Jeff Dannyplus"
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
              contactName="Jeff Dannyplus"
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
              contactName="Hasley Lee"
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
              contactName="Michael Jackson"
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
              contactName="Jeff Dannyplus"
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
              contactName="Tiwa Savage"
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
              contactName="Jeff Dannyplus"
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
              contactName="Zara Green"
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
              contactName="Jeff Aba"
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