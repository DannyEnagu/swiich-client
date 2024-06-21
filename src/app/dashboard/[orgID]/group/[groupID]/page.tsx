import Main from "@/components/dashboard/MainContainer";
import GroupContacts from "../GroupContacts";
import Posts from "@/components/dashboard/Posts";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import GMHeader from "@/components/dashboard/ChatHeaders/GroupMessagesHeader";

const PostsWrapper = withContentWrapper(Posts, true);

export default function page() {
  return (
    <div className="dd-content">
      <GroupContacts />
      <GMHeader />
      <Main>
        <PostsWrapper />
      </Main>
    </div>);
}
