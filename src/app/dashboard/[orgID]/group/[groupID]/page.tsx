import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/ChatHeader/Header";
import GroupContacts from "../GroupContacts";
import Posts from "@/components/dashboard/Posts";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";

const PostsWrapper = withContentWrapper(Posts, true);

export default function page() {
  return (
    <div className="dd-content">
      <GroupContacts />
      <Header isDm={false} />
      <Main>
        <PostsWrapper />
      </Main>
    </div>
  );
}
